# 🔧 Git Setup & Push to GitHub

## ✅ Checklist trước khi push

- [ ] Đã tạo tài khoản GitHub
- [ ] Đã cài Git trên máy
- [ ] Đã test app chạy được local
- [ ] Đã tạo icons (hoặc tạm bỏ qua)

## 🚀 Các bước thực hiện

### Bước 1: Kiểm tra Git

```bash
# Kiểm tra Git đã cài chưa
git --version

# Nếu chưa có, download tại: https://git-scm.com/downloads
```

### Bước 2: Config Git (lần đầu)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Bước 3: Tạo Repository trên GitHub

1. Đăng nhập GitHub: https://github.com
2. Click nút **+** → **New repository**
3. **Repository name**: `gym-tracker`
4. **Description**: `Ứng dụng quản lý lộ trình tập gym tại nhà`
5. **Public** (để deploy GitHub Pages miễn phí)
6. **KHÔNG** tick các checkbox:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
7. Click **Create repository**

### Bước 4: Init Git local

Mở Terminal/CMD trong thư mục project:

```bash
# Khởi tạo Git
git init

# Thêm tất cả files
git add .

# Kiểm tra files sẽ được commit
git status

# Commit
git commit -m "Initial commit: Gym Tracker app v1.0.0"
```

### Bước 5: Kết nối với GitHub

**Thay `<username>` bằng username GitHub của bạn:**

```bash
# Đổi branch mặc định sang main
git branch -M main

# Thêm remote
git remote add origin https://github.com/<username>/gym-tracker.git

# Kiểm tra remote
git remote -v
```

### Bước 6: Push lên GitHub

```bash
# Push lần đầu
git push -u origin main
```

**Nếu hỏi username/password:**
- Username: GitHub username của bạn
- Password: **KHÔNG phải mật khẩu thông thường**
  - Phải dùng **Personal Access Token**
  - Tạo tại: https://github.com/settings/tokens
  - Chọn: **Generate new token (classic)**
  - Scopes: tick **repo**
  - Copy token và dùng làm password

### Bước 7: Bật GitHub Pages

1. Vào repo trên GitHub
2. Click **Settings** (tab trên cùng)
3. Scroll xuống → Click **Pages** (menu trái)
4. **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Đợi 1-2 phút
7. Refresh trang → sẽ thấy link app

**Link app sẽ có dạng:**
```
https://<username>.github.io/gym-tracker/
```

### Bước 8: Test app trên link GitHub Pages

Mở link vừa có → Test các tính năng:
- ✅ Các ngày hiển thị đúng
- ✅ Tick bài tập được
- ✅ Mở modal chi tiết được
- ✅ Export/Import hoạt động

## 🔄 Cập nhật sau này

Sau khi sửa code:

```bash
# Xem files đã thay đổi
git status

# Add files đã sửa
git add .

# Hoặc add từng file
git add app.js
git add styles.css

# Commit với message mô tả
git commit -m "feat: thêm tính năng timer"

# Push lên GitHub
git push

# Đợi 1-2 phút để GitHub Pages rebuild
```

## 📱 Cài App lên điện thoại

### iPhone
1. Mở link app trên **Safari**
2. Tap nút **Share** (mũi tên ↑)
3. Chọn **Add to Home Screen**
4. Đặt tên: **Gym Tracker**
5. Tap **Add**

### Android
1. Mở link app trên **Chrome**
2. Tap menu **⋮** (3 chấm)
3. Chọn **Add to Home screen**
4. Đặt tên: **Gym Tracker**
5. Tap **Add**

## 🐛 Xử lý lỗi

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/<username>/gym-tracker.git
```

### Error: "Permission denied"
```bash
# Dùng Personal Access Token thay vì password
# Hoặc dùng SSH (cần setup SSH key trước)
```

### Error: "Updates were rejected"
```bash
# Pull trước rồi push lại
git pull origin main --allow-unrelated-histories
git push
```

### GitHub Pages không cập nhật
- Đợi 5-10 phút
- Clear cache: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
- Kiểm tra tab **Actions** trên GitHub xem có lỗi không

## 🎉 Xong!

Giờ bạn đã có:
- ✅ App online tại `https://<username>.github.io/gym-tracker/`
- ✅ Code được quản lý bằng Git
- ✅ Tự động deploy khi push code mới
- ✅ Có thể cài như app native trên điện thoại

## 📚 Tài liệu thêm

- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

**Need help?** Tạo Issue trên GitHub repo hoặc xem [CONTRIBUTING.md](CONTRIBUTING.md)
