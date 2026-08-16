# 🚀 Hướng Dẫn Deploy Chi Tiết

## 📋 Chuẩn bị

1. Tạo tài khoản GitHub (nếu chưa có): https://github.com
2. Cài Git trên máy: https://git-scm.com/downloads

## 🌐 Deploy lên GitHub Pages

### Bước 1: Tạo Repository

1. Vào GitHub → Click **New repository**
2. Đặt tên repo: `gym-tracker` (hoặc tên bạn thích)
3. Chọn **Public**
4. **KHÔNG** chọn "Add a README file"
5. Click **Create repository**

### Bước 2: Push Code

Mở Terminal/CMD trong thư mục dự án và chạy:

```bash
# Khởi tạo Git
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit: Gym Tracker app"

# Đổi branch sang main
git branch -M main

# Thêm remote (thay <username> bằng username GitHub của bạn)
git remote add origin https://github.com/<username>/gym-tracker.git

# Push lên GitHub
git push -u origin main
```

### Bước 3: Bật GitHub Pages

1. Vào repo trên GitHub
2. Click **Settings** (tab trên cùng)
3. Click **Pages** (menu bên trái)
4. Trong phần **Source**:
   - Chọn branch: **main**
   - Chọn folder: **/ (root)**
5. Click **Save**
6. Đợi 1-2 phút, refresh trang
7. Bạn sẽ thấy link: `https://<username>.github.io/gym-tracker/`

✅ **Xong!** App của bạn đã online.

### Cập nhật sau này

```bash
# Sau khi sửa code
git add .
git commit -m "Update: mô tả thay đổi"
git push
```

Đợi 1-2 phút là thay đổi sẽ hiển thị trên web.

---

## ☁️ Deploy lên Cloudflare Pages

### Phương pháp 1: Kết nối GitHub (Khuyến nghị)

1. Truy cập https://dash.cloudflare.com
2. Đăng ký/Đăng nhập tài khoản Cloudflare (miễn phí)
3. Click **Pages** (menu bên trái)
4. Click **Create a project**
5. Click **Connect to Git**
6. Authorize Cloudflare truy cập GitHub
7. Chọn repository **gym-tracker**
8. **Build settings**:
   - Framework preset: **None**
   - Build command: **(để trống)**
   - Build output directory: **/**
9. Click **Save and Deploy**
10. Đợi vài phút, bạn sẽ có link: `https://gym-tracker-xxx.pages.dev`

**Lợi ích**: Mỗi lần push lên GitHub, Cloudflare tự động deploy.

### Phương pháp 2: Direct Upload

1. Vào https://dash.cloudflare.com
2. Pages → **Create a project** → **Direct Upload**
3. Kéo thả tất cả files trong thư mục vào
4. Click **Deploy**

**Nhược điểm**: Phải upload lại mỗi lần cập nhật.

### Phương pháp 3: Wrangler CLI (Dành cho dev)

```bash
# Cài Node.js nếu chưa có: https://nodejs.org

# Cài Wrangler
npm install -g wrangler

# Login Cloudflare
wrangler login

# Deploy (trong thư mục dự án)
wrangler pages deploy . --project-name=gym-tracker

# Lần sau chỉ cần
wrangler pages deploy .
```

---

## 🔧 Tùy chỉnh Domain

### GitHub Pages

1. Mua domain (ví dụ: namecheap.com, cloudflare.com)
2. Vào Settings → Pages
3. Nhập custom domain
4. Cấu hình DNS theo hướng dẫn

### Cloudflare Pages

1. Vào project → **Custom domains**
2. Click **Set up a custom domain**
3. Nhập domain của bạn
4. Cloudflare sẽ tự động cấu hình DNS

---

## 🐛 Xử lý lỗi thường gặp

### "Permission denied" khi push

```bash
# Sử dụng HTTPS với token
git remote set-url origin https://<token>@github.com/<username>/gym-tracker.git

# Hoặc dùng SSH (setup SSH key trước)
git remote set-url origin git@github.com:<username>/gym-tracker.git
```

### GitHub Pages không cập nhật

- Đợi 5-10 phút
- Xóa cache trình duyệt (Ctrl+Shift+R)
- Check tab Actions trên GitHub xem có lỗi không

### Cloudflare Pages build fail

- Kiểm tra lại Build settings
- Build command để **trống**
- Build output directory: **/**

---

## 📱 Cài App lên điện thoại

### iPhone/iPad (Safari)

1. Mở link app trên Safari
2. Click nút **Share** (biểu tượng mũi tên lên)
3. Chọn **Add to Home Screen**
4. Đặt tên và **Add**

### Android (Chrome)

1. Mở link app trên Chrome
2. Click menu **⋮** (3 chấm)
3. Chọn **Add to Home screen**
4. Đặt tên và **Add**

App sẽ hoạt động như app native!

---

## 💡 Tips

- **Backup dữ liệu**: LocalStorage có thể bị xóa, nên export ra file định kỳ
- **Nhiều thiết bị**: Dữ liệu không sync, mỗi thiết bị có dữ liệu riêng
- **Performance**: App chạy hoàn toàn offline sau lần đầu load
- **Updates**: Làm mới trang (pull to refresh) để cập nhật phiên bản mới

---

## 🆘 Cần trợ giúp?

- GitHub Issues: Tạo issue trên repo
- GitHub Discussions: Hỏi đáp cộng đồng
