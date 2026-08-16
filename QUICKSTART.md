# ⚡ Quick Start - Bắt đầu ngay trong 5 phút

## 🚀 Bước 1: Chạy thử local (30 giây)

```bash
# Mở file index.html bằng trình duyệt
# Hoặc nếu có Python:
python -m http.server 8000
# Rồi mở: http://localhost:8000
```

✅ Xong! App đã chạy.

## 📤 Bước 2: Deploy lên GitHub Pages (3 phút)

### 1. Tạo repo trên GitHub
- Vào https://github.com/new
- Tên repo: `gym-tracker`
- Public → Create

### 2. Push code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/gym-tracker.git
git push -u origin main
```

### 3. Bật GitHub Pages
- Repo → Settings → Pages
- Source: **main** branch, **/** folder
- Save

**🎉 Xong!** Link: `https://USERNAME.github.io/gym-tracker/`

## ☁️ Bước 3: Deploy lên Cloudflare (2 phút)

1. Vào https://dash.cloudflare.com
2. Pages → Create → Connect to Git
3. Chọn repo `gym-tracker`
4. Build command: **(trống)**
5. Output: **/**
6. Deploy

**🎉 Xong!** Link: `https://gym-tracker-xxx.pages.dev`

## 📱 Bước 4: Cài như app trên điện thoại

**iPhone**: Safari → Share → Add to Home Screen

**Android**: Chrome → Menu → Add to Home screen

---

## 🎯 Sử dụng cơ bản

1. **Tick bài tập** khi hoàn thành
2. **Click vào bài** để ghi kết quả (trọng lượng, số lần)
3. **Tick ngày** khi hoàn thành cả buổi tập
4. **Export thường xuyên** để backup dữ liệu

## 📚 Đọc thêm

- [Hướng dẫn chi tiết](HUONG-DAN.md)
- [Hướng dẫn deploy](DEPLOY.md)

---

**Có vấn đề?** Mở file `HUONG-DAN.md` để xem hướng dẫn đầy đủ.
