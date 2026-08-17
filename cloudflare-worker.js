const ALLOWED_ORIGINS = new Set([
  'https://tronghieu1201.github.io',
  'http://127.0.0.1:5500',
  'http://localhost:5500'
]);

const SESSION_LIFETIME_MS = 7 * 24 * 60 * 60 * 1000;

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Cache-Control': 'no-store',
    'Vary': 'Origin'
  };
}

function json(data, status = 200, origin = null) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(origin ? corsHeaders(origin) : { 'Cache-Control': 'no-store' })
    }
  });
}

function base64UrlEncode(value) {
  const bytes = typeof value === 'string' ? new TextEncoder().encode(value) : value;
  let binary = '';
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecode(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  return new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
}

async function secureCompare(input, expected) {
  const [inputHash, expectedHash] = await Promise.all([sha256(input), sha256(expected)]);
  let difference = 0;
  for (let index = 0; index < inputHash.length; index++) {
    difference |= inputHash[index] ^ expectedHash[index];
  }
  return difference === 0;
}

async function sign(value, secret) {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value)));
}

async function createSessionToken(env) {
  const payload = base64UrlEncode(JSON.stringify({ scope: 'sync', exp: Date.now() + SESSION_LIFETIME_MS }));
  const signature = base64UrlEncode(await sign(payload, env.MY_UNLOCK));
  return { token: `${payload}.${signature}`, expiresAt: JSON.parse(new TextDecoder().decode(base64UrlDecode(payload))).exp };
}

async function verifySession(request, env) {
  const authorization = request.headers.get('Authorization') || '';
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
  const [payload, signature] = token.split('.');
  if (!payload || !signature || !env.MY_UNLOCK) return false;

  const expectedSignature = base64UrlEncode(await sign(payload, env.MY_UNLOCK));
  if (!(await secureCompare(signature, expectedSignature))) return false;

  try {
    const data = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload)));
    return data.scope === 'sync' && Number.isFinite(data.exp) && data.exp > Date.now();
  } catch {
    return false;
  }
}

function supabaseHeaders(env, extra = {}) {
  return {
    'apikey': env.SUPABASE_SECRET_KEY,
    'Authorization': `Bearer ${env.SUPABASE_SECRET_KEY}`,
    ...extra
  };
}

async function supabaseRequest(env, path, init = {}) {
  if (!env.SUPABASE_URL || !env.SUPABASE_SECRET_KEY) {
    throw new Error('Supabase chưa được cấu hình trong Worker.');
  }

  const supabaseBaseUrl = env.SUPABASE_URL
    .replace(/\/+$/, '')
    .replace(/\/rest\/v1$/, '');

  const response = await fetch(`${supabaseBaseUrl}/rest/v1/${path}`, {
    ...init,
    headers: supabaseHeaders(env, init.headers)
  });

  if (!response.ok) {
    throw new Error(await response.text() || 'Supabase không thể xử lý yêu cầu.');
  }
  return response;
}

function toDatabaseDay(row) {
  return {
    'Ngày': row.workout_date,
    'Thứ': row.weekday_name,
    'Nhóm cơ / lịch': row.workout_plan,
    'Trạng thái': row.status,
    'Bài đã xong': row.completed_count,
    'Tổng bài': row.total_exercises,
    'Bấm giờ (phút)': row.workout_minutes,
    'Ghi chú': Object.keys(row.exercise_notes || {}).length,
    exercise_state: row.exercise_state || {},
    exercise_notes: row.exercise_notes || {},
    completed_at: row.completed_at || null
  };
}

function fromDatabaseDay(row) {
  return {
    workout_date: row['Ngày'],
    weekday_name: row['Thứ'],
    workout_plan: row['Nhóm cơ / lịch'],
    status: row['Trạng thái'],
    completed_count: row['Bài đã xong'],
    total_exercises: row['Tổng bài'],
    workout_minutes: row['Bấm giờ (phút)'],
    exercise_state: row.exercise_state || {},
    exercise_notes: row.exercise_notes || {},
    completed_at: row.completed_at
  };
}

async function readBody(request, origin) {
  try {
    return await request.json();
  } catch {
    throw json({ ok: false, message: 'Dữ liệu gửi lên không hợp lệ.' }, 400, origin);
  }
}

async function requireSession(request, env, origin) {
  if (!(await verifySession(request, env))) {
    throw json({ ok: false, message: 'Phiên đồng bộ đã hết hạn. Hãy mở khóa lại.' }, 401, origin);
  }
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const allowedOrigin = ALLOWED_ORIGINS.has(origin) ? origin : null;
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      if (!allowedOrigin) return json({ ok: false, message: 'Origin không được phép.' }, 403);
      return new Response(null, { status: 204, headers: corsHeaders(allowedOrigin) });
    }

    if (request.method === 'GET' && (url.pathname === '/' || url.pathname === '/health')) {
      return json({ ok: true, service: 'Gym Tracker API' }, 200, allowedOrigin);
    }

    if (!allowedOrigin) return json({ ok: false, message: 'Origin không được phép.' }, 403);

    if (request.method === 'POST' && url.pathname === '/verify') {
      const { action, password } = await readBody(request, allowedOrigin);
      const passwords = {
        delete: env.Delete_PASSWORD,
        lock: env.LOCK_PASSWORD,
        unlock: env.MY_UNLOCK
      };
      if (!passwords[action] || typeof password !== 'string') {
        return json({ ok: false, message: 'Yêu cầu không hợp lệ.' }, 400, allowedOrigin);
      }
      if (!(await secureCompare(password, passwords[action]))) {
        return json({ ok: false, message: 'Mật khẩu không đúng.' }, 401, allowedOrigin);
      }

      const session = action === 'unlock' ? await createSessionToken(env) : {};
      return json({ ok: true, action, message: 'Xác thực thành công.', ...session }, 200, allowedOrigin);
    }

    try {
      await requireSession(request, env, allowedOrigin);

      if (request.method === 'GET' && url.pathname === '/data/bootstrap') {
        const [daysResponse, sessionsResponse] = await Promise.all([
          supabaseRequest(env, 'workout_days?select=*&order=Ng%C3%A0y.asc'),
          supabaseRequest(env, 'stopwatch_sessions?select=*&order=started_at.desc')
        ]);
        const workoutDays = (await daysResponse.json()).map(fromDatabaseDay);
        return json({ ok: true, workoutDays, sessions: await sessionsResponse.json() }, 200, allowedOrigin);
      }

      if (request.method === 'PUT' && url.pathname === '/data/workout-day') {
        const { row } = await readBody(request, allowedOrigin);
        if (!row || typeof row.workout_date !== 'string') {
          return json({ ok: false, message: 'Hàng dữ liệu ngày tập không hợp lệ.' }, 400, allowedOrigin);
        }
        await supabaseRequest(env, 'workout_days?on_conflict=Ng%C3%A0y', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates,return=minimal' },
          body: JSON.stringify(toDatabaseDay(row))
        });
        return json({ ok: true }, 200, allowedOrigin);
      }

      if (request.method === 'PUT' && url.pathname === '/data/workout-days') {
        const { rows } = await readBody(request, allowedOrigin);

        if (!Array.isArray(rows) || rows.some(row => !row || typeof row.workout_date !== 'string')) {
          return json(
            { ok: false, message: 'Danh sách ngày tập không hợp lệ.' },
            400,
            allowedOrigin
          );
        }

        await supabaseRequest(env, 'workout_days?on_conflict=Ng%C3%A0y', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates,return=minimal'
          },
          body: JSON.stringify(rows.map(toDatabaseDay))
        });

        return json({ ok: true }, 200, allowedOrigin);
      }

      if (request.method === 'PUT' && url.pathname === '/data/stopwatch-session') {
        const { session } = await readBody(request, allowedOrigin);
        if (!session || typeof session.client_id !== 'string' || typeof session.started_at !== 'string') {
          return json({ ok: false, message: 'Phiên bấm giờ không hợp lệ.' }, 400, allowedOrigin);
        }
        await supabaseRequest(env, 'stopwatch_sessions?on_conflict=client_id', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates,return=minimal' },
          body: JSON.stringify(session)
        });
        return json({ ok: true }, 200, allowedOrigin);
      }

      if (request.method === 'DELETE' && url.pathname.startsWith('/data/stopwatch-session/')) {
        const clientId = decodeURIComponent(url.pathname.slice('/data/stopwatch-session/'.length));
        await supabaseRequest(env, `stopwatch_sessions?client_id=eq.${encodeURIComponent(clientId)}`, { method: 'DELETE' });
        return json({ ok: true }, 200, allowedOrigin);
      }

      if (request.method === 'DELETE' && url.pathname === '/data/all') {
        const { password } = await readBody(request, allowedOrigin);
        if (!env.Delete_PASSWORD || typeof password !== 'string' || !(await secureCompare(password, env.Delete_PASSWORD))) {
          return json({ ok: false, message: 'Mật khẩu xóa dữ liệu không đúng.' }, 401, allowedOrigin);
        }
        await Promise.all([
          supabaseRequest(env, 'workout_days?Ng%C3%A0y=gte.1900-01-01', { method: 'DELETE' }),
          supabaseRequest(env, 'stopwatch_sessions?id=gte.0', { method: 'DELETE' })
        ]);
        return json({ ok: true }, 200, allowedOrigin);
      }
    } catch (error) {
      if (error instanceof Response) return error;
      return json({ ok: false, message: 'Không thể đồng bộ dữ liệu.', detail: error.message }, 502, allowedOrigin);
    }

    return json({ ok: false, message: 'Không tìm thấy API.' }, 404, allowedOrigin);
  }
};
