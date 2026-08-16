# 🤝 Contributing to Gym Tracker

Cảm ơn bạn đã quan tâm đến việc đóng góp cho Gym Tracker! 🎉

## 📋 Cách đóng góp

### 🐛 Báo cáo Bug

1. Kiểm tra xem bug đã được báo cáo chưa tại [Issues](../../issues)
2. Nếu chưa, tạo Issue mới với:
   - **Tiêu đề rõ ràng**: "Bug: Không lưu được dữ liệu khi..."
   - **Mô tả chi tiết**: Các bước tái hiện bug
   - **Screenshot**: Nếu có
   - **Browser/Device**: Chrome 120, iPhone 14, etc.
   - **Expected vs Actual**: Kỳ vọng gì và thực tế nhận được gì

### 💡 Đề xuất Feature

1. Tạo Issue với label `enhancement`
2. Mô tả:
   - **Feature muốn có**: Tính năng gì?
   - **Tại sao cần**: Giải quyết vấn đề gì?
   - **Cách dùng**: User sẽ sử dụng như thế nào?

### 🔧 Submit Code

#### 1. Fork & Clone

```bash
# Fork repo trên GitHub, rồi:
git clone https://github.com/YOUR_USERNAME/gym-tracker.git
cd gym-tracker
```

#### 2. Tạo Branch mới

```bash
git checkout -b feature/amazing-feature
# hoặc
git checkout -b fix/bug-description
```

**Quy ước tên branch:**
- `feature/` - Tính năng mới
- `fix/` - Sửa bug
- `docs/` - Cập nhật documentation
- `style/` - Thay đổi CSS/UI
- `refactor/` - Refactor code

#### 3. Code

**Style guide:**
- Dùng 4 spaces cho indent (JavaScript, CSS)
- Dùng camelCase cho biến: `myVariable`
- Dùng PascalCase cho class: `MyClass`
- Comment cho logic phức tạp
- Giữ functions nhỏ gọn, dễ đọc

**Ví dụ:**

```javascript
// ✅ Good
function calculateStreak() {
    const today = new Date();
    let streak = 0;
    // Logic here...
    return streak;
}

// ❌ Bad
function calc(){const x=new Date();let s=0;return s;}
```

#### 4. Test

- Test trên Chrome, Firefox, Safari
- Test trên mobile (responsive)
- Test các tính năng:
  - ✅ Đánh dấu hoàn thành
  - ✅ Ghi kết quả
  - ✅ Export/Import
  - ✅ Điều hướng tuần

#### 5. Commit

```bash
git add .
git commit -m "feat: thêm tính năng timer cho bài tập"
```

**Commit message format:**
- `feat:` - Tính năng mới
- `fix:` - Sửa bug
- `docs:` - Cập nhật docs
- `style:` - CSS/UI changes
- `refactor:` - Refactor code
- `test:` - Thêm tests
- `chore:` - Maintenance tasks

#### 6. Push & Pull Request

```bash
git push origin feature/amazing-feature
```

Trên GitHub:
1. Click **Compare & pull request**
2. **Tiêu đề rõ ràng**: "Add timer feature for exercises"
3. **Mô tả chi tiết**:
   ```markdown
   ## What
   Thêm timer cho mỗi bài tập
   
   ## Why
   User cần timer để theo dõi thời gian nghỉ
   
   ## How
   - Thêm Timer component
   - Tích hợp vào exercise modal
   - Lưu timer settings vào localStorage
   
   ## Screenshots
   [Thêm ảnh nếu có]
   
   ## Testing
   - ✅ Test trên Chrome
   - ✅ Test trên mobile
   - ✅ Test timer start/pause/reset
   ```
4. Click **Create pull request**

## 📁 Cấu trúc Project

```
gym-tracker/
├── index.html          # Main HTML
├── app.js             # JavaScript logic
├── styles.css         # All styles
├── sw.js              # Service Worker
├── manifest.json      # PWA manifest
├── _headers           # Cloudflare headers
├── wrangler.toml      # Cloudflare config
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Actions
└── docs/
    ├── README.md
    ├── HUONG-DAN.md
    └── DEPLOY.md
```

## 🎨 Code Style

### JavaScript

```javascript
// Variables: camelCase
const workoutData = {};
let currentWeek = 0;

// Functions: camelCase, descriptive
function calculateWeekProgress(weekData) {
    // Logic here
}

// Event handlers: handle prefix
function handleExerciseClick(event) {
    // Logic here
}
```

### CSS

```css
/* Class names: kebab-case */
.workout-card {
    /* styles */
}

.exercise-item {
    /* styles */
}

/* Use CSS variables */
:root {
    --primary: #4f46e5;
}

.button {
    background: var(--primary);
}
```

### HTML

```html
<!-- Semantic HTML -->
<header>
    <h1>Title</h1>
</header>

<main>
    <section class="workout-container">
        <!-- content -->
    </section>
</main>

<!-- Meaningful IDs and classes -->
<button id="saveWorkout" class="save-btn">
    Save
</button>
```

## ✅ Checklist trước khi submit PR

- [ ] Code chạy được không lỗi
- [ ] Test trên ít nhất 2 browsers
- [ ] Test responsive trên mobile
- [ ] Code format đúng style guide
- [ ] Không có console.log() debug
- [ ] Update CHANGELOG.md nếu cần
- [ ] Update docs nếu thay đổi features

## 🚫 Không nên làm

- ❌ Submit PR chưa test
- ❌ Mix nhiều features trong 1 PR
- ❌ Thay đổi quá nhiều files không liên quan
- ❌ Code không có comment
- ❌ Breaking changes không thông báo

## 💬 Cần trợ giúp?

- Tạo Issue với tag `question`
- Hoặc comment vào PR của bạn
- Mô tả rõ vấn đề đang gặp

## 📜 Code of Conduct

- Tôn trọng mọi người
- Feedback mang tính xây dựng
- Không spam, troll, hoặc quấy rối

## 🎉 Contributors

Cảm ơn tất cả những người đã đóng góp!

<!-- Contributors sẽ được tự động add vào đây -->

---

**Happy coding! 💪🔥**
