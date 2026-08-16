# 🚀 BẮT ĐẦU NGAY - Gym Tracker

Chào bạn! Đây là hướng dẫn cực kỳ đơn giản để đưa app lên mạng trong **10 phút**.

## 🎯 Mục tiêu

Sau 10 phút, bạn sẽ có:
- ✅ App online tại `https://USERNAME.github.io/gym-tracker/`
- ✅ Có thể cài lên điện thoại như app thật
- ✅ Bắt đầu tracking lộ trình tập gym

## 📝 Các bước

### Bước 1: Test Local (1 phút)

Double-click vào file `index.html` → App mở trên trình duyệt

**✅ Check**: App hiển thị lịch tập 7 ngày

### Bước 2: Tạo Icons (3 phút) - TÙY CHỌN

Nếu muốn có icon đẹp:

1. Vào: https://emojitopng.com/
2. Chọn emoji 💪
3. Download size 512px → đổi tên thành `icon-512.png`
4. Download size 192px → đổi tên thành `icon-192.png`
5. Đặt 2 file vào thư mục gốc (cùng folder với index.html)

**Hoặc bỏ qua** - app vẫn chạy bình thường.

### Bước 3: Push lên GitHub (5 phút)

#### A. Tạo repo trên GitHub
1. Vào: https://github.com/new
2. Repository name: `gym-tracker`
3. Chọn **Public**
4. **KHÔNG** tick gì cả
5. **Create repository**

#### B. Chạy lệnh trong Terminal/CMD

Mở Terminal/CMD trong thư mục project, paste từng dòng:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit"
```

```bash
git branch -M main
```

**Thay `USERNAME` bằng username GitHub của bạn:**

```bash
git remote add origin https://github.com/USERNAME/gym-tracker.git
```

```bash
git push -u origin main
```

**Lưu ý**: Nếu hỏi password, dùng **Personal Access Token**, không phải password thường:
- Tạo token: https://github.com/settings/tokens
- Chọn "Generate new token (classic)"
- Scopes: tick **repo**
- Copy token và paste làm password

### Bước 4: Bật GitHub Pages (1 phút)

1. Vào repo trên GitHub: `https://github.com/USERNAME/gym-tracker`
2. Click **Settings** (tab trên cùng)
3. Click **Pages** (menu trái)
4. **Source**: 
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Đợi 1-2 phút
7. Refresh → Thấy link xanh: `https://USERNAME.github.io/gym-tracker/`

### Bước 5: Thưởng thức! 🎉

Click vào link → App đã online!

---

## 📱 Cài lên điện thoại

### iPhone
1. Mở Safari → vào link app
2. Tap **Share** → **Add to Home Screen**

### Android
1. Mở Chrome → vào link app
2. Tap **⋮** → **Add to Home screen**

---

## 🎯 Sử dụng app

1. **Tick ✅** bài tập khi hoàn thành
2. **Click vào bài** để ghi trọng lượng + số lần
3. **Tick ngày** khi hoàn thành cả buổi
4. **Mũi tên ← →** để xem tuần khác

---

## 💾 Backup dữ liệu

**QUAN TRỌNG**: Dữ liệu lưu trên trình duyệt, xóa cache = mất dữ liệu!

**Cách backup**:
1. Click nút **📤 Export** (góc trên)
2. File JSON sẽ tải về
3. Lưu file này ở nơi an toàn

**Khôi phục**:
1. Click nút **📥 Import**
2. Chọn file JSON đã export
3. Xong!

---

## ❓ Gặp vấn đề?

### Git không nhận
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Push bị từ chối
Có thể cần dùng Personal Access Token thay password.
Xem: [GIT-SETUP.md](GIT-SETUP.md)

### GitHub Pages không hiển thị
- Đợi 5-10 phút
- Refresh trang (Ctrl+Shift+R)
- Check tab **Actions** xem có lỗi không

---

## 📚 Đọc thêm

Muốn biết thêm chi tiết:

- **Sử dụng app**: [HUONG-DAN.md](HUONG-DAN.md)
- **Deploy chi tiết**: [DEPLOY.md](DEPLOY.md)
- **Tất cả hướng dẫn**: [START-HERE.md](START-HERE.md)

---

## 🎉 Xong!

Giờ bạn đã có:
- ✅ App online miễn phí
- ✅ Cài được lên điện thoại
- ✅ Hoạt động offline
- ✅ Bắt đầu tracking tập luyện

**Chúc bạn tập luyện hiệu quả! 💪🔥**

---

<p align="center">
  <strong>Cần trợ giúp?</strong><br>
  Đọc <a href="START-HERE.md">START-HERE.md</a> hoặc tạo Issue trên GitHub
</p>
