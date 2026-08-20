const CACHE_NAME = 'gym-tracker-v25';
const urlsToCache = [
    './',
    './index.html',
    './lock.html',
    './styles.css?v=20260816-8',
    './styles-overrides.css?v=20260818-14',
    './app.js?v=20260818-16',
    './manifest.json'
];

// Install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

// Ưu tiên mạng để HTML, CSS và JS luôn cùng một phiên bản sau khi deploy.
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const copy = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                return response;
            })
            .catch(() => {
                if (event.request.mode === 'navigate') return caches.match('./index.html');
                return caches.match(event.request);
            })
    );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            ).then(() => self.clients.claim());
        })
    );
});
