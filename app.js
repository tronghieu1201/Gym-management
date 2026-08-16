// Workout data structure
const workoutData = {
    1: {
        name: 'Thứ 2',
        focus: 'Chest • Side Delts • Triceps',
        subtitle: 'Ngực chính, vai giữa, tay sau',
        exercises: [
            { 
                name: 'Dumbbell Floor Press', 
                sets: '4 hiệp × 8–12 lần', 
                notes: 'Tác động: chính vào ngực; phụ vào tay sau và vai trước',
                technique: 'Nằm ngửa trên sàn, co gối, giữ tạ ngang ngực và khuỷu chếch khỏi thân 30–45°. Hạ bắp tay chạm nhẹ sàn rồi đẩy tạ thẳng lên; không xoè khuỷu ngang 90°',
                image: 'dumbbell-floor-press.jpg'
            },
            { 
                name: 'Push-up', 
                sets: '3 hiệp × 8–20 lần', 
                notes: 'Tác động: chính vào ngực; phụ vào tay sau, vai trước và cơ bụng',
                technique: 'Đặt tay rộng hơn vai một chút, giữ đầu–lưng–mông–chân thành một đường thẳng. Hạ ngực gần chạm sàn với khuỷu chếch 30–45° rồi đẩy lên; không võng lưng',
                image: 'push-up.jpg'
            },
            { 
                name: 'Band Chest Fly', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: ngực, đặc biệt ở pha khép tay',
                technique: 'Móc dây chắc chắn phía sau ở ngang ngực, bước lên trước để tạo độ căng. Giữ khuỷu hơi cong, khép hai tay trước ngực rồi mở ra chậm và có kiểm soát',
                image: 'band-chest-fly.jpg'
            },
            { 
                name: 'Dumbbell Lateral Raise', 
                sets: '4 hiệp × 12–20 lần', 
                notes: 'Tác động: vai giữa',
                technique: 'Cầm tạ hai bên, khuỷu hơi cong và nâng cánh tay sang ngang đến gần ngang vai. Dẫn chuyển động bằng khuỷu; không nhún người, quăng tạ hoặc nhún vai',
                image: 'dumbbell-lateral-raise.jpg'
            },
            { 
                name: 'Dumbbell Overhead Triceps Extension', 
                sets: '3 hiệp × 10–15 lần', 
                notes: 'Tác động: tay sau, nhấn mạnh đầu dài',
                technique: 'Giữ một quả tạ bằng hai tay trên đầu, cố định bắp tay gần tai. Gập khuỷu hạ tạ ra sau đầu rồi duỗi tay lên; không xoè khuỷu quá rộng',
                image: 'overhead-triceps-extension.jpg'
            },
            { 
                name: 'Band Triceps Pushdown', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: tay sau. Có thể thay Close-grip Push-up 2×8-15',
                technique: 'Móc dây ở vị trí cao và giữ khuỷu sát thân. Duỗi cẳng tay xuống đến khi tay gần thẳng rồi trở lại chậm; bắp tay không đưa ra trước–sau',
                image: 'band-triceps-pushdown.jpg'
            }
        ]
    },
    2: {
        name: 'Thứ 3',
        focus: 'Back • Rear Delts • Biceps',
        subtitle: 'Lưng, vai sau, tay trước',
        exercises: [
            { 
                name: 'Pull-up', 
                sets: '4 hiệp × 5–10 lần', 
                notes: 'Tác động: chính vào cơ xô và lưng trên; phụ vào tay trước',
                technique: 'Nắm xà tay sấp, rộng bằng hoặc hơn vai một chút. Từ tư thế treo có kiểm soát, kéo ngực hướng về xà đến khi cằm vượt xà rồi hạ chậm; không đạp hoặc vung chân. Nếu chưa đủ sức: dùng dây hỗ trợ hoặc Negative Pull-up (nhảy lên rồi hạ chậm 3-5 giây)',
                image: 'pull-up.jpg'
            },
            { 
                name: 'One-arm Dumbbell Row', 
                sets: '4 hiệp × 8–15 lần mỗi bên', 
                notes: 'Tác động: cơ xô, lưng giữa và cơ quanh bả vai. Nghỉ 2-3 phút',
                technique: 'Chống một tay lên ghế chắc chắn hoặc đùi, giữ lưng trung lập. Kéo tạ về phía hông, ép bả vai về sau rồi hạ tạ hết tầm; không xoay vặn thân người',
                image: 'one-arm-dumbbell-row.jpg'
            },
            { 
                name: 'Band Straight-arm Pulldown', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: cơ xô',
                technique: 'Móc dây trên cao, đứng hơi nghiêng người về trước và giữ cánh tay gần thẳng. Kéo dây xuống sát đùi bằng cơ xô rồi đưa lên chậm; hạn chế gập khuỷu',
                image: 'band-straight-arm-pulldown.jpg'
            },
            { 
                name: 'Bent-over Dumbbell Rear-delt Fly', 
                sets: '3 hiệp × 12–20 lần', 
                notes: 'Tác động: vai sau và lưng trên',
                technique: 'Gập hông, giữ lưng thẳng và khuỷu hơi cong. Dang hai tay sang hai bên đến gần ngang thân rồi hạ chậm; không nhún vai hoặc quăng tạ',
                image: 'bent-over-rear-delt-fly.jpg'
            },
            { 
                name: 'Alternating Dumbbell Curl', 
                sets: '3 hiệp × 8–15 lần mỗi bên', 
                notes: 'Tác động: tay trước',
                technique: 'Đứng thẳng, lòng bàn tay hướng ra trước và giữ khuỷu sát thân. Cuốn từng quả tạ lên, siết tay trước rồi hạ hết tầm; không đung đưa người',
                image: 'alternating-dumbbell-curl.jpg'
            },
            { 
                name: 'Hammer Curl', 
                sets: '3 hiệp × 10–15 lần mỗi bên', 
                notes: 'Tác động: cơ cánh tay, tay trước và cẳng tay',
                technique: 'Giữ hai lòng bàn tay hướng vào nhau như cầm búa. Cố định khuỷu, cuốn tạ lên rồi hạ chậm; không đưa vai về trước',
                image: 'hammer-curl.jpg'
            }
        ]
    },
    3: {
        name: 'Thứ 4',
        focus: 'Legs • Calves • Abs',
        subtitle: 'Chân, bắp chân, bụng',
        exercises: [
            { 
                name: 'Goblet Squat', 
                sets: '3 hiệp × 8–15 lần', 
                notes: 'Tác động: đùi trước và mông; phụ vào đùi sau và cơ bụng. Nghỉ 2-3 phút',
                technique: 'Ôm một quả tạ sát trước ngực, chân rộng khoảng bằng vai. Đẩy gối theo hướng mũi chân, ngồi xuống sâu trong khả năng rồi đạp đều cả bàn chân để đứng lên. Nếu tạ nhẹ: dùng nhịp hạ 3 giây – dừng 1 giây – nâng lên',
                image: 'goblet-squat.jpg'
            },
            { 
                name: 'Dumbbell Romanian Deadlift', 
                sets: '3 hiệp × 8–15 lần', 
                notes: 'Tác động: gân kheo, mông và lưng dưới. Nghỉ 2-3 phút',
                technique: 'Cầm tạ trước đùi, gối hơi chùng và đẩy hông ra sau. Hạ tạ sát chân đến khi gân kheo căng rồi siết mông đứng lên; giữ lưng trung lập và không biến động tác thành squat',
                image: 'dumbbell-romanian-deadlift.jpg'
            },
            { 
                name: 'Bulgarian Split Squat', 
                sets: '3 hiệp × 8–12 lần mỗi chân', 
                notes: 'Tác động: đùi trước và mông; cải thiện thăng bằng',
                technique: 'Đặt mu bàn chân sau lên ghế thấp, chắc chắn và chân trước bước đủ xa. Hạ hông thẳng xuống, giữ gối trước theo hướng mũi chân rồi đạp bằng chân trước để đứng lên',
                image: 'bulgarian-split-squat.jpg'
            },
            { 
                name: 'Band Lying Leg Curl', 
                sets: '3 hiệp × 12–20 lần', 
                notes: 'Tác động: gân kheo',
                technique: 'Móc dây ở vị trí thấp, chắc chắn và quấn vào cổ chân. Nằm sấp, giữ hông áp xuống sàn, co gối kéo gót chân về gần mông rồi duỗi chân trở lại chậm',
                image: 'band-lying-leg-curl.jpg'
            },
            { 
                name: 'Single-leg Calf Raise', 
                sets: '3 hiệp × 12–20 lần mỗi chân', 
                notes: 'Tác động: bắp chân',
                technique: 'Đứng một chân, một tay vịn chắc chắn và tay còn lại cầm tạ. Hạ gót xuống có kiểm soát, nhón lên cao hết mức và dừng một nhịp ở trên',
                image: 'single-leg-calf-raise.jpg'
            },
            { 
                name: 'Reverse Crunch', 
                sets: '3 hiệp × 12–20 lần', 
                notes: 'Tác động: bụng, đặc biệt chức năng cuộn xương chậu',
                technique: 'Nằm ngửa, co gối và ép lưng dưới xuống sàn. Siết bụng cuộn xương chậu, đưa gối về phía ngực để mông nhấc nhẹ khỏi sàn; không vung chân lấy đà',
                image: 'reverse-crunch.jpg'
            },
            { 
                name: 'Plank', 
                sets: '3 hiệp × 30–60 giây', 
                notes: 'Tác động: toàn bộ vùng core, mông và vai giữ ổn định',
                technique: 'Chống khuỷu ngay dưới vai, siết bụng và mông để cơ thể thành một đường thẳng. Không võng lưng hoặc nâng mông quá cao',
                image: 'plank.jpg'
            }
        ]
    },
    4: {
        name: 'Thứ 5',
        focus: 'Recovery',
        subtitle: 'Hồi phục - Nghỉ hoặc Zone 2 nhẹ',
        isRest: true,
        exercises: [
            { 
                name: 'Rest hoặc Zone 2 Cardio', 
                sets: '25-40 phút', 
                notes: 'Tác động: hệ thần kinh, khớp và cơ bắp được hồi phục',
                technique: 'Ưu tiên nghỉ hoàn toàn nếu còn đau cơ hoặc mệt. Nếu khỏe: đi bộ nhanh/chạy nhẹ ở cường độ vẫn nói chuyện được. Không tập tạ nặng',
                image: 'recovery-cardio.jpg'
            },
            { 
                name: 'Mobility Work (Tùy chọn)', 
                sets: '10-15 phút', 
                notes: 'Band Pull-apart, Shoulder CARs, Cat-Cow, Hip Flexor Stretch, Ankle Mobility',
                technique: 'Vận động nhẹ vai, bả vai, hông và cổ chân. Di chuyển chậm trong tầm không đau. Không ép sâu hoặc thực hiện quá nhanh',
                image: 'mobility-work.jpg'
            }
        ]
    },
    5: {
        name: 'Thứ 6',
        focus: 'Shoulders • Chest • Triceps',
        subtitle: 'Vai chính, ngực phụ, tay sau',
        exercises: [
            { 
                name: 'Standing Dumbbell Shoulder Press', 
                sets: '4 hiệp × 6–12 lần', 
                notes: 'Tác động: vai trước, vai giữa và tay sau. Nghỉ 2-3 phút',
                technique: 'Đứng vững, siết bụng và mông, giữ tạ ngang vai với khuỷu hơi hướng ra trước. Đẩy tạ lên trên đầu rồi hạ chậm; không ưỡn lưng để lấy đà. Nếu tạ quá nhẹ: thay Pike Push-up 4×6-15',
                image: 'standing-dumbbell-shoulder-press.jpg'
            },
            { 
                name: 'Dumbbell Lateral Raise', 
                sets: '4 hiệp × 12–20 lần', 
                notes: 'Tác động: vai giữa',
                technique: 'Nâng tạ sang hai bên đến gần ngang vai với khuỷu hơi cong. Hạ tạ có kiểm soát; không nhún người hoặc kéo vai lên tai',
                image: 'dumbbell-lateral-raise.jpg'
            },
            { 
                name: 'Band Face Pull', 
                sets: '3 hiệp × 15–25 lần', 
                notes: 'Tác động: vai sau, cơ xoay ngoài vai và lưng trên',
                technique: 'Móc dây ngang mặt hoặc cao hơn một chút. Kéo dây về hai bên mặt, mở khuỷu và xoay bàn tay ra sau; siết vai sau, không nhún vai',
                image: 'band-face-pull.jpg'
            },
            { 
                name: 'Feet-elevated Push-up', 
                sets: '3 hiệp × 8–20 lần', 
                notes: 'Tác động: ngực trên và vai trước; phụ vào tay sau',
                technique: 'Đặt chân lên ghế chắc chắn, hai tay chống sàn và giữ thân người thẳng. Hạ phần ngực trên gần sàn rồi đẩy lên; không để lưng võng',
                image: 'feet-elevated-push-up.jpg'
            },
            { 
                name: 'Dumbbell Squeeze Floor Press', 
                sets: '2 hiệp × 10–15 lần', 
                notes: 'Tác động: ngực và tay sau',
                technique: 'Nằm trên sàn, ép hai quả tạ sát vào nhau trước ngực. Duy trì lực ép vào nhau trong toàn bộ lúc đẩy lên và hạ xuống',
                image: 'dumbbell-squeeze-floor-press.jpg'
            },
            { 
                name: 'Dumbbell Overhead Triceps Extension', 
                sets: '3 hiệp × 10–15 lần', 
                notes: 'Tác động: tay sau, nhấn mạnh đầu dài',
                technique: 'Giữ một quả tạ bằng hai tay trên đầu, bắp tay gần tai. Gập khuỷu hạ tạ ra sau đầu rồi duỗi tay lên; giữ thân người và bắp tay ổn định',
                image: 'overhead-triceps-extension.jpg'
            },
            { 
                name: 'Diamond Push-up', 
                sets: '2 hiệp × 8–15 lần', 
                notes: 'Tác động: tay sau; phụ vào ngực và vai trước',
                technique: 'Đặt hai tay gần nhau dưới ngực, hạ người với khuỷu tương đối sát thân rồi đẩy lên. Nếu đau cổ tay: đổi sang Close-grip Push-up',
                image: 'diamond-push-up.jpg'
            }
        ]
    },
    6: {
        name: 'Thứ 7',
        focus: 'Back • Biceps • Forearms • Abs',
        subtitle: 'Lưng, tay trước, cẳng tay, bụng',
        exercises: [
            { 
                name: 'Chin-up', 
                sets: '3 hiệp × 5–10 lần', 
                notes: 'Tác động: cơ xô và tay trước; phụ vào lưng trên. Nghỉ 2-3 phút',
                technique: 'Nắm xà tay ngửa, rộng khoảng bằng vai. Kéo khuỷu xuống sát thân để đưa ngực lên và cằm vượt xà, sau đó hạ người chậm; không vung chân',
                image: 'chin-up.jpg'
            },
            { 
                name: 'One-arm Dumbbell Row', 
                sets: '3 hiệp × 8–15 lần mỗi bên', 
                notes: 'Tác động: cơ xô, với khuỷu kéo sát thân',
                technique: 'Giữ lưng trung lập và kéo khuỷu sát sườn, đưa tạ về phía hông. Hạ tạ đến khi tay gần thẳng; không xoay người để lấy đà',
                image: 'one-arm-dumbbell-row.jpg'
            },
            { 
                name: 'Dumbbell Pullover', 
                sets: '2 hiệp × 10–15 lần', 
                notes: 'Tác động: cơ xô; phụ vào ngực và tay sau giữ ổn định',
                technique: 'Nằm ngửa trên sàn, giữ một quả tạ bằng hai tay phía trên ngực. Giữ khuỷu hơi cong, hạ tạ ra sau đầu trong tầm kiểm soát rồi dùng cơ xô kéo tạ trở lại; không ưỡn lưng',
                image: 'dumbbell-pullover.jpg'
            },
            { 
                name: 'Concentration Curl', 
                sets: '3 hiệp × 8–15 lần mỗi bên', 
                notes: 'Tác động: tay trước',
                technique: 'Ngồi, tì mặt sau khuỷu vào mặt trong đùi. Cuốn tạ lên, siết tay trước rồi hạ gần thẳng tay; không di chuyển khuỷu',
                image: 'concentration-curl.jpg'
            },
            { 
                name: 'Band Curl', 
                sets: '3 hiệp × 12–20 lần', 
                notes: 'Tác động: tay trước',
                technique: 'Đứng lên giữa dây và cầm hai đầu dây. Giữ khuỷu sát thân, cuốn tay lên rồi hạ chậm, luôn duy trì độ căng của dây',
                image: 'band-curl.jpg'
            },
            { 
                name: 'Dumbbell Reverse Curl', 
                sets: '2 hiệp × 12–15 lần mỗi bên', 
                notes: 'Tác động: cẳng tay và cơ cánh tay',
                technique: 'Cầm tạ với lòng bàn tay hướng xuống, giữ khuỷu sát thân và cuốn tạ lên. Giữ cổ tay thẳng, không bẻ cổ tay hoặc đung đưa người',
                image: 'dumbbell-reverse-curl.jpg'
            },
            { 
                name: 'Farmer Hold', 
                sets: '2 hiệp × 30–60 giây', 
                notes: 'Tác động: lực nắm, cẳng tay, cầu vai và core',
                technique: 'Cầm tạ nặng hai bên, đứng cao người, siết bụng và nắm tạ thật chắc. Không nghiêng người hoặc để vai đổ ra trước',
                image: 'farmer-hold.jpg'
            },
            { 
                name: 'Hanging Knee Raise', 
                sets: '3 hiệp × 8–15 lần', 
                notes: 'Tác động: bụng và cơ gập hông',
                technique: 'Treo người trên xà, siết bụng kéo gối về phía ngực và cuộn nhẹ xương chậu lên. Hạ chân có kiểm soát; không đung đưa',
                image: 'hanging-knee-raise.jpg'
            }
        ]
    },
    0: {
        name: 'Chủ nhật',
        focus: 'Rest',
        subtitle: 'Nghỉ hoàn toàn',
        isRest: true,
        exercises: [
            { 
                name: 'Nghỉ ngơi hoàn toàn', 
                sets: '', 
                notes: 'Hồi phục: Nghỉ hoàn toàn hoặc chỉ đi bộ nhẹ',
                technique: 'Không cần chạy nặng hoặc tập bù. Ưu tiên ăn đủ protein, uống đủ nước và ngủ đủ giấc để chuẩn bị cho Thứ 2',
                image: 'rest-day.jpg'
            }
        ]
    }
};

// State management
let currentWeekOffset = 0;
let workoutProgress = loadProgress();
let stopwatchInterval = null;
let stopwatchTime = 0;
let stopwatchRunning = false;
let stopwatchHistory = loadStopwatchHistory();

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderWorkouts();
    updateStats();
    setupEventListeners();
    setupNavigation();
    setupMobileMenu();
    startLiveClock();
    updateStopwatchHistory();
    
    // Check for updates
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Relative path keeps the PWA working under a GitHub Pages project path.
            navigator.serviceWorker.register('./sw.js').catch(() => {
                // Service worker not available, continue without it
            });
        });
    }
});

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.content-page');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active from all
            navItems.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active to clicked
            item.classList.add('active');
            const pageName = item.dataset.page;
            const targetPage = document.getElementById(`${pageName}-page`);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            // Update page title
            const pageTitle = document.querySelector('.page-title');
            const pageMeta = {
                workout: { eyebrow: 'Kế hoạch tuần', title: 'Lịch tập luyện', subtitle: 'Tập trung vào vai, lưng, ngực và tay.' },
                stats: { eyebrow: 'Nhìn lại hành trình', title: 'Tiến độ tập luyện', subtitle: 'Theo dõi nhịp độ và thành tích của bạn.' },
                exercises: { eyebrow: 'Theo dõi thời lượng', title: 'Bấm giờ tập luyện', subtitle: 'Theo dõi thời lượng cho từng buổi tập.' },
                settings: { eyebrow: 'Không gian của bạn', title: 'Cài đặt & dữ liệu', subtitle: 'Quản lý dữ liệu tập luyện của bạn.' }
            };
            const meta = pageMeta[pageName] || { eyebrow: '', title: 'Gym Tracker', subtitle: '' };
            pageTitle.textContent = meta.title;
            document.querySelector('.page-subtitle').textContent = meta.subtitle;
            document.getElementById('headerEyebrow').textContent = meta.eyebrow;
            
            // If stats page, update statistics
            if (pageName === 'stats') {
                updateStatisticsPage();
            }
            
            // Close mobile menu if open
            closeMobileMenu();
        });
    });
}

function updateStatisticsPage() {
    // Calculate all statistics
    const stats = calculateAllStats();
    
    // Update main stats cards
    document.getElementById('statsStreak').textContent = stats.currentStreak;
    document.getElementById('statsTotalWorkouts').textContent = stats.totalWorkouts;
    document.getElementById('statsThisWeek').textContent = stats.thisWeekWorkouts;
    document.getElementById('statsTotalExercises').textContent = stats.totalExercises;
    
    // Update week progress
    const weekPercent = Math.round((stats.thisWeekWorkouts / 7) * 100);
    document.getElementById('statsWeekProgress').style.width = weekPercent + '%';
    document.getElementById('statsWeekPercent').textContent = weekPercent + '%';
    
    // Update weekly chart
    stats.weeklyData.forEach((completed, index) => {
        const barFill = document.getElementById(`barDay${index}`);
        if (barFill) {
            const height = completed ? '100%' : '20%';
            barFill.style.height = height;
        if (completed) {
            barFill.classList.add('completed');
        } else {
            barFill.classList.remove('completed');
        }
        barFill.title = completed ? 'Đã hoàn thành buổi tập' : 'Chưa hoàn thành buổi tập';
        }
    });
    
    // Update muscle groups
    const muscleGroups = stats.muscleGroups;
    Object.keys(muscleGroups).forEach(muscle => {
        const percent = muscleGroups[muscle];
        const percentEl = document.getElementById(`muscle${muscle}`);
        const barEl = document.getElementById(`muscleBar${muscle}`);
        if (percentEl) percentEl.textContent = percent + '%';
        if (barEl) barEl.style.width = percent + '%';
    });
    
    // Update secondary stats
    document.getElementById('statsCompletionRate').textContent = stats.completionRate + '%';
    document.getElementById('statsActiveDays').textContent = stats.activeDays;
    document.getElementById('statsAvgPerWeek').textContent = stats.avgPerWeek.toFixed(1);
    document.getElementById('statsBestStreak').textContent = stats.bestStreak;
}

function calculateAllStats() {
    const allDates = Object.keys(workoutProgress);
    
    // Total workouts
    const totalWorkouts = allDates.filter(date => workoutProgress[date].completed).length;
    
    // This week workouts
    const weekDates = getWeekDates();
    const thisWeekWorkouts = weekDates.filter(date => {
        const dateStr = formatDate(date);
        return workoutProgress[dateStr]?.completed;
    }).length;
    
    // Weekly data (last 7 days)
    const weeklyData = weekDates.map(date => {
        const dateStr = formatDate(date);
        return workoutProgress[dateStr]?.completed || false;
    });
    
    // Current streak
    const currentStreak = calculateStreak();
    
    // Best streak
    let bestStreak = 0;
    let tempStreak = 0;
    const sortedDates = allDates.sort((a, b) => new Date(a) - new Date(b));
    
    sortedDates.forEach((date, index) => {
        if (workoutProgress[date].completed) {
            tempStreak++;
            bestStreak = Math.max(bestStreak, tempStreak);
        } else {
            tempStreak = 0;
        }
    });
    
    // Total exercises completed
    let totalExercises = 0;
    allDates.forEach(date => {
        const exercises = workoutProgress[date].exercises || {};
        totalExercises += Object.values(exercises).filter(Boolean).length;
    });
    
    // Muscle groups progress (based on completed exercises by muscle group)
    const muscleGroupExercises = {
        Shoulders: 0, // Vai
        Back: 0,      // Lưng
        Chest: 0,     // Ngực
        Arms: 0,      // Tay
        Legs: 0,      // Chân
        Abs: 0        // Bụng
    };
    
    const muscleGroupTotal = {
        Shoulders: 18, // Total exercises for shoulders per week
        Back: 18,
        Chest: 13,
        Arms: 22,
        Legs: 7,
        Abs: 4
    };
    
    // Count exercises by muscle group from this week
    weekDates.forEach(date => {
        const dateStr = formatDate(date);
        const dayKey = date.getDay();
        const workout = workoutData[dayKey];
        
        if (workoutProgress[dateStr]?.exercises) {
            const completedExercises = workoutProgress[dateStr].exercises;
            
            // Map exercises to muscle groups based on day
            if (dayKey === 1) { // T2: Chest, Shoulders, Triceps
                Object.keys(completedExercises).forEach(idx => {
                    if (completedExercises[idx]) {
                        if (idx <= 2) muscleGroupExercises.Chest++;
                        if (idx === 3) muscleGroupExercises.Shoulders++;
                        if (idx >= 4) muscleGroupExercises.Arms++;
                    }
                });
            } else if (dayKey === 2) { // T3: Back, Biceps
                Object.keys(completedExercises).forEach(idx => {
                    if (completedExercises[idx]) {
                        if (idx <= 3) muscleGroupExercises.Back++;
                        else muscleGroupExercises.Arms++;
                    }
                });
            } else if (dayKey === 3) { // T4: Legs, Abs
                Object.keys(completedExercises).forEach(idx => {
                    if (completedExercises[idx]) {
                        if (idx <= 4) muscleGroupExercises.Legs++;
                        else muscleGroupExercises.Abs++;
                    }
                });
            } else if (dayKey === 5) { // T6: Shoulders, Chest, Triceps
                Object.keys(completedExercises).forEach(idx => {
                    if (completedExercises[idx]) {
                        if (idx <= 1) muscleGroupExercises.Shoulders++;
                        if (idx >= 2 && idx <= 4) muscleGroupExercises.Chest++;
                        if (idx >= 5) muscleGroupExercises.Arms++;
                    }
                });
            } else if (dayKey === 6) { // T7: Back, Arms, Abs
                Object.keys(completedExercises).forEach(idx => {
                    if (completedExercises[idx]) {
                        if (idx <= 2) muscleGroupExercises.Back++;
                        else if (idx >= 3 && idx <= 6) muscleGroupExercises.Arms++;
                        else muscleGroupExercises.Abs++;
                    }
                });
            }
        }
    });
    
    // Calculate percentages
    const muscleGroups = {};
    Object.keys(muscleGroupExercises).forEach(muscle => {
        muscleGroups[muscle] = Math.round((muscleGroupExercises[muscle] / muscleGroupTotal[muscle]) * 100);
    });
    
    // Completion rate
    const totalPossible = allDates.length;
    const completionRate = totalPossible > 0 ? Math.round((totalWorkouts / totalPossible) * 100) : 0;
    
    // Active days
    const activeDays = allDates.length;
    
    // Average per week
    const weeks = activeDays > 0 ? Math.ceil(activeDays / 7) : 1;
    const avgPerWeek = totalWorkouts / weeks;
    
    return {
        totalWorkouts,
        thisWeekWorkouts,
        weeklyData,
        currentStreak,
        bestStreak,
        totalExercises,
        muscleGroups,
        completionRate,
        activeDays,
        avgPerWeek
    };
}

function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    });
    
    sidebarClose.addEventListener('click', closeMobileMenu);
    
    overlay.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.remove('active');
    if (overlay) {
        overlay.remove();
    }
    document.body.style.overflow = '';
}

function setupEventListeners() {
    document.getElementById('prevWeek').addEventListener('click', () => {
        currentWeekOffset--;
        renderWorkouts();
    });

    document.getElementById('nextWeek').addEventListener('click', () => {
        currentWeekOffset++;
        renderWorkouts();
    });

    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    document.getElementById('exerciseModal').addEventListener('click', (e) => {
        if (e.target.id === 'exerciseModal') {
            closeModal();
        }
    });
}

function getWeekDates() {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay() + (currentWeekOffset * 7));
    
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        dates.push(date);
    }
    
    return dates;
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function renderWorkouts() {
    const container = document.getElementById('workoutContainer');
    const dates = getWeekDates();
    const weekDisplay = document.getElementById('weekDisplay');
    
    if (currentWeekOffset === 0) {
        weekDisplay.textContent = 'Tuần này';
    } else if (currentWeekOffset === 1) {
        weekDisplay.textContent = 'Tuần sau';
    } else if (currentWeekOffset === -1) {
        weekDisplay.textContent = 'Tuần trước';
    } else {
        const firstDate = dates[0];
        weekDisplay.textContent = `Tuần ${firstDate.getDate()}/${firstDate.getMonth() + 1}`;
    }
    
    container.innerHTML = '';
    
    dates.forEach((date, index) => {
        const dayKey = index; // 0 = Sunday, 1 = Monday, etc.
        const workout = workoutData[dayKey];
        const dateStr = formatDate(date);
        const isCompleted = workoutProgress[dateStr]?.completed || false;
        
        const card = createWorkoutCard(workout, date, dateStr, isCompleted);
        container.appendChild(card);
    });
    
    updateStats();
}

function createWorkoutCard(workout, date, dateStr, isCompleted) {
    const card = document.createElement('div');
    card.className = `workout-card ${isCompleted ? 'completed' : ''} ${workout.isRest ? 'rest' : ''}`;
    
    const dateDisplay = `${date.getDate()}/${date.getMonth() + 1}`;
    
    if (workout.isRest) {
        card.innerHTML = `
            <div class="workout-header">
                <div class="day-info">
                    <h3>${workout.name}</h3>
                    <div class="day-name">${dateDisplay}</div>
                    <div class="focus">${workout.focus}</div>
                    ${workout.subtitle ? `<div class="subtitle">${workout.subtitle}</div>` : ''}
                </div>
                <input type="checkbox" class="complete-checkbox" ${isCompleted ? 'checked' : ''} 
                       onchange="toggleDayComplete('${dateStr}')">
            </div>
            <div class="rest-day">
                <p>🧘‍♂️ ${workout.exercises[0].name}</p>
                ${workout.exercises[1] ? `<p>${workout.exercises[1].name}</p>` : ''}
            </div>
        `;
    } else {
        // Check if all exercises are completed
        const totalExercises = workout.exercises.length;
        const completedExercises = Object.values(workoutProgress[dateStr]?.exercises || {}).filter(Boolean).length;
        const allExercisesCompleted = completedExercises === totalExercises && totalExercises > 0;
        
        const exerciseList = workout.exercises.map((ex, idx) => {
            const exCompleted = workoutProgress[dateStr]?.exercises?.[idx] || false;
            return `
                <li class="exercise-item ${exCompleted ? 'completed' : ''}" 
                    onclick="openExerciseDetail('${dateStr}', ${idx})">
                    <span class="exercise-name">${ex.name}</span>
                    <span class="exercise-sets">${ex.sets}</span>
                    <input type="checkbox" class="exercise-checkbox" ${exCompleted ? 'checked' : ''}
                           onclick="event.stopPropagation(); toggleExerciseComplete('${dateStr}', ${idx})">
                </li>
            `;
        }).join('');
        
        card.innerHTML = `
            <div class="workout-header">
                <div class="day-info">
                    <h3>${workout.name}</h3>
                    <div class="day-name">${dateDisplay}</div>
                    <div class="focus">${workout.focus}</div>
                    ${workout.subtitle ? `<div class="subtitle">${workout.subtitle}</div>` : ''}
                </div>
                <div class="header-actions-card">
                    <button class="quick-action-btn" onclick="event.stopPropagation(); toggleAllExercises('${dateStr}', ${!allExercisesCompleted})"
                            title="${allExercisesCompleted ? 'Bỏ tick tất cả' : 'Tick tất cả'}">
                        <span class="btn-icon">${allExercisesCompleted ? '↩️' : '✅'}</span>
                        <span class="btn-label">${allExercisesCompleted ? 'Bỏ Hết' : 'Tick Hết'}</span>
                    </button>
                    <input type="checkbox" class="complete-checkbox" ${isCompleted ? 'checked' : ''}
                           onchange="toggleDayComplete('${dateStr}')" title="Hoàn thành ngày">
                </div>
            </div>
            <ul class="exercise-list">
                ${exerciseList}
            </ul>
        `;
    }
    
    return card;
}

function toggleDayComplete(dateStr) {
    if (!workoutProgress[dateStr]) {
        workoutProgress[dateStr] = { completed: false, exercises: {} };
    }
    workoutProgress[dateStr].completed = !workoutProgress[dateStr].completed;
    saveProgress();
    renderWorkouts();
}

function toggleExerciseComplete(dateStr, exerciseIdx) {
    if (!workoutProgress[dateStr]) {
        workoutProgress[dateStr] = { completed: false, exercises: {} };
    }
    if (!workoutProgress[dateStr].exercises) {
        workoutProgress[dateStr].exercises = {};
    }
    workoutProgress[dateStr].exercises[exerciseIdx] = !workoutProgress[dateStr].exercises[exerciseIdx];
    saveProgress();
    renderWorkouts();
}

function toggleAllExercises(dateStr, checkAll) {
    const date = new Date(dateStr);
    const dayKey = date.getDay();
    const workout = workoutData[dayKey];
    
    if (!workout || workout.isRest) return;
    
    if (!workoutProgress[dateStr]) {
        workoutProgress[dateStr] = { completed: false, exercises: {} };
    }
    if (!workoutProgress[dateStr].exercises) {
        workoutProgress[dateStr].exercises = {};
    }
    
    // Toggle all exercises
    workout.exercises.forEach((ex, idx) => {
        workoutProgress[dateStr].exercises[idx] = checkAll;
    });
    
    saveProgress();
    renderWorkouts();
}

function openExerciseDetail(dateStr, exerciseIdx) {
    const date = new Date(dateStr);
    const dayKey = date.getDay();
    const workout = workoutData[dayKey];
    const exercise = workout.exercises[exerciseIdx];
    
    const modal = document.getElementById('exerciseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = exercise.name;
    
    const notes = workoutProgress[dateStr]?.notes?.[exerciseIdx] || '';
    
    // Image section
    const imageHTML = exercise.image ? `
        <div class="exercise-image">
            <img src="images/${exercise.image}" alt="${exercise.name}" onerror="this.style.display='none'">
        </div>
    ` : '';
    
    modalBody.innerHTML = `
        ${imageHTML}
        
        <div class="exercise-detail">
            <h3>📋 Chi tiết bài tập</h3>
            <p><strong>Hiệp × Số lần:</strong> ${exercise.sets}</p>
            ${exercise.notes ? `<p><strong>💪 Tác động:</strong> ${exercise.notes}</p>` : ''}
        </div>
        
        ${exercise.technique ? `
            <div class="technique-section">
                <h4>🎯 Kỹ thuật thực hiện</h4>
                <p>${exercise.technique}</p>
            </div>
        ` : ''}
        
        <div class="notes-section">
            <h4>📝 Ghi chú cá nhân</h4>
            <textarea id="exerciseNotes" placeholder="Cảm nhận, điều chỉnh...">${notes}</textarea>
            <button class="save-log-btn" onclick="saveExerciseNotes('${dateStr}', ${exerciseIdx})" 
                    style="margin-top: 0.5rem;">
                Lưu ghi chú
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('exerciseModal').classList.remove('active');
}

function saveExerciseNotes(dateStr, exerciseIdx) {
    const notes = document.getElementById('exerciseNotes').value;
    
    if (!workoutProgress[dateStr]) {
        workoutProgress[dateStr] = { completed: false, exercises: {}, notes: {} };
    }
    if (!workoutProgress[dateStr].notes) {
        workoutProgress[dateStr].notes = {};
    }
    
    workoutProgress[dateStr].notes[exerciseIdx] = notes;
    saveProgress();
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Đã lưu';
    setTimeout(() => {
        btn.textContent = originalText;
    }, 1500);
}

function updateStats() {
    const dates = getWeekDates();
    let completedDays = 0;
    
    dates.forEach(date => {
        const dateStr = formatDate(date);
        if (workoutProgress[dateStr]?.completed) {
            completedDays++;
        }
    });
    
    const progressText = `${completedDays}/7`;
    document.getElementById('weekProgress').textContent = progressText;
    document.getElementById('sidebarWeekProgress').textContent = progressText;
    const progressFill = document.getElementById('sidebarProgressFill');
    if (progressFill) progressFill.style.width = `${(completedDays / 7) * 100}%`;
    
    // Calculate streak
    const streak = calculateStreak();
    const streakText = `${streak}`;
    document.getElementById('streak').textContent = streakText;
    document.getElementById('sidebarStreak').textContent = `${streak} 🔥`;
}

function calculateStreak() {
    const today = new Date();
    let streak = 0;
    
    for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateStr = formatDate(date);
        
        if (workoutProgress[dateStr]?.completed) {
            streak++;
        } else if (i > 0) {
            break;
        }
    }
    
    return streak;
}

function saveProgress() {
    localStorage.setItem('gymTrackerProgress', JSON.stringify(workoutProgress));
}

function loadProgress() {
    const saved = localStorage.getItem('gymTrackerProgress');
    return saved ? JSON.parse(saved) : {};
}

// Export and Import functions
function exportData() {
    const dataStr = JSON.stringify(workoutProgress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gym-tracker-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                workoutProgress = imported;
                saveProgress();
                renderWorkouts();
                alert('✓ Import thành công!');
            } catch (error) {
                alert('✗ File không hợp lệ!');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function clearAllData() {
    if (confirm('⚠️ Xóa toàn bộ dữ liệu? Hành động này không thể hoàn tác!')) {
        workoutProgress = {};
        saveProgress();
        renderWorkouts();
        alert('✓ Đã xóa toàn bộ dữ liệu');
    }
}

// ==================== LIVE CLOCK ====================
function startLiveClock() {
    function updateClock() {
        const now = new Date();
        
        // Time
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeStr = `${hours}:${minutes}:${seconds}`;
        
        // Date
        const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
        const day = days[now.getDay()];
        const date = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const dateStr = `${day}, ${date}/${month}/${year}`;
        
        const timeEl = document.getElementById('liveTime');
        const dateEl = document.getElementById('liveDate');
        
        if (timeEl) timeEl.textContent = timeStr;
        if (dateEl) dateEl.textContent = dateStr;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// ==================== STOPWATCH ====================
function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        const startTime = Date.now() - stopwatchTime;
        
        stopwatchInterval = setInterval(() => {
            stopwatchTime = Date.now() - startTime;
            updateStopwatchDisplay();
        }, 10);
        
        document.getElementById('startBtn').disabled = true;
        document.getElementById('pauseBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
        document.getElementById('sessionStatus').textContent = 'Đang tập...';
    }
}

function pauseStopwatch() {
    if (stopwatchRunning) {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
        
        document.getElementById('startBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = true;
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('sessionStatus').textContent = 'Đã tạm dừng';
    }
}

function resetStopwatch() {
    stopwatchRunning = false;
    stopwatchTime = 0;
    clearInterval(stopwatchInterval);
    updateStopwatchDisplay();
    
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    document.getElementById('saveBtn').disabled = true;
    document.getElementById('sessionStatus').textContent = 'Chưa bắt đầu';
}

function updateStopwatchDisplay() {
    const totalSeconds = Math.floor(stopwatchTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((stopwatchTime % 1000) / 10);
    
    const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const msStr = String(milliseconds).padStart(2, '0');
    
    document.getElementById('stopwatchDisplay').textContent = timeStr;
    document.getElementById('millisecondsDisplay').textContent = msStr;
}

function saveWorkoutTime() {
    if (stopwatchTime === 0) {
        alert('⚠️ Thời gian phải lớn hơn 0!');
        return;
    }
    
    const now = new Date();
    const session = {
        id: Date.now(),
        duration: stopwatchTime,
        date: now.toISOString(),
        dateDisplay: now.toLocaleString('vi-VN')
    };
    
    stopwatchHistory.unshift(session);
    saveStopwatchHistory();
    updateStopwatchHistory();
    
    resetStopwatch();
    
    alert('✓ Đã lưu phiên tập!');
}

function loadStopwatchHistory() {
    const saved = localStorage.getItem('stopwatchHistory');
    return saved ? JSON.parse(saved) : [];
}

function saveStopwatchHistory() {
    localStorage.setItem('stopwatchHistory', JSON.stringify(stopwatchHistory));
}

function updateStopwatchHistory() {
    const totalTime = stopwatchHistory.reduce((sum, session) => sum + session.duration, 0);
    const totalMinutes = Math.floor(totalTime / 60000);
    const totalSessions = stopwatchHistory.length;
    const avgTime = totalSessions > 0 ? Math.floor(totalMinutes / totalSessions) : 0;
    
    document.getElementById('totalWorkoutTime').textContent = `${totalMinutes} phút`;
    document.getElementById('totalSessions').textContent = totalSessions;
    document.getElementById('avgSessionTime').textContent = `${avgTime} phút`;
    
    renderHistoryList();
}

function renderHistoryList(filter = 'all') {
    const historyList = document.getElementById('historyList');
    let filteredHistory = stopwatchHistory;
    
    if (filter === 'today') {
        const today = new Date().toDateString();
        filteredHistory = stopwatchHistory.filter(s => new Date(s.date).toDateString() === today);
    } else if (filter === 'week') {
        const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        filteredHistory = stopwatchHistory.filter(s => new Date(s.date).getTime() > weekAgo);
    } else if (filter === 'month') {
        const monthAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
        filteredHistory = stopwatchHistory.filter(s => new Date(s.date).getTime() > monthAgo);
    }
    
    if (filteredHistory.length === 0) {
        historyList.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">⏱️</span>
                <p>Không có phiên tập nào</p>
            </div>
        `;
        return;
    }
    
    historyList.innerHTML = filteredHistory.map(session => {
        const totalSeconds = Math.floor(session.duration / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const timeStr = hours > 0 
            ? `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            : `${minutes}:${String(seconds).padStart(2, '0')}`;
        
        const durationText = hours > 0 
            ? `${hours}h ${minutes}m`
            : `${minutes} phút`;
        
        return `
            <div class="history-item">
                <div class="history-item-left">
                    <div class="history-time">${timeStr}</div>
                    <div class="history-date">${session.dateDisplay}</div>
                </div>
                <div class="history-item-right">
                    <span class="history-duration">${durationText}</span>
                    <button class="delete-history-btn" onclick="deleteHistoryItem(${session.id})" title="Xóa">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function filterHistory(filter) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderHistoryList(filter);
}

function deleteHistoryItem(id) {
    if (confirm('⚠️ Xóa phiên tập này?')) {
        stopwatchHistory = stopwatchHistory.filter(s => s.id !== id);
        saveStopwatchHistory();
        updateStopwatchHistory();
    }
}

// Make functions globally accessible
window.toggleDayComplete = toggleDayComplete;
window.toggleExerciseComplete = toggleExerciseComplete;
window.toggleAllExercises = toggleAllExercises;
window.openExerciseDetail = openExerciseDetail;
window.saveExerciseNotes = saveExerciseNotes;
window.exportData = exportData;
window.importData = importData;
window.clearAllData = clearAllData;
window.startStopwatch = startStopwatch;
window.pauseStopwatch = pauseStopwatch;
window.resetStopwatch = resetStopwatch;
window.saveWorkoutTime = saveWorkoutTime;
window.filterHistory = filterHistory;
window.deleteHistoryItem = deleteHistoryItem;
