# 💪 Gym Tracker - Ứng Dụng Quản Lý Lộ Trình Tập Gym

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-blue)](https://yourusername.github.io/gym-tracker/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Ứng dụng web đơn giản để theo dõi lộ trình tập gym tại nhà, tập trung vào vai – lưng – ngực – tay.

> **🚀 [Xem Demo](https://yourusername.github.io/gym-tracker/)** | **📖 [Bắt đầu ngay](START-HERE.md)** | **🇻🇳 [Hướng dẫn tiếng Việt](HUONG-DAN.md)**

## 📸 Screenshots

> **Lưu ý**: Thêm screenshots thực tế vào đây sau khi deploy

```
[Desktop View]  [Mobile View]  [Exercise Detail]
```

## ✨ Tính năng

- 📅 **Lịch tập 7 ngày**: Hiển thị đầy đủ lộ trình tập từng ngày trong tuần
- ✅ **Đánh dấu hoàn thành**: Tick hoàn thành từng bài tập và ngày tập
- 💪 **Ghi nhận kết quả**: Lưu trọng lượng và số lần thực hiện từng bài
- 📝 **Ghi chú cá nhân**: Thêm ghi chú cho từng bài tập
- 📊 **Theo dõi tiến độ**: Xem số ngày đã hoàn thành trong tuần và streak
- 🔄 **Xem nhiều tuần**: Điều hướng qua các tuần trước và tuần sau
- 📱 **Responsive**: Hoạt động tốt trên cả desktop và mobile
- 💾 **Lưu trữ local**: Dữ liệu được lưu trên trình duyệt, không cần server

## 🚀 Cách sử dụng

### Truy cập trực tuyến

Ứng dụng có thể được deploy lên:
- **GitHub Pages**: `https://<username>.github.io/gym-tracker/`
- **Cloudflare Pages**: `https://gym-tracker.pages.dev`

### Chạy local

1. Clone repo này
2. Mở file `index.html` bằng trình duyệt
3. Hoặc dùng web server:
   ```bash
   # Nếu có Python
   python -m http.server 8000
   
   # Nếu có Node.js
   npx serve
   ```

## 📦 Deploy lên GitHub Pages

1. Tạo repo mới trên GitHub
2. Push code lên:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/gym-tracker.git
   git push -u origin main
   ```
3. Vào Settings → Pages
4. Chọn source: Deploy from a branch
5. Chọn branch: main, folder: / (root)
6. Save và đợi vài phút

## ☁️ Deploy lên Cloudflare Pages

### Cách 1: Qua Dashboard

1. Đăng nhập [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Chọn Pages → Create a project
3. Kết nối GitHub repo
4. Build settings:
   - Build command: (để trống)
   - Build output directory: `/`
5. Deploy

### Cách 2: Qua Wrangler CLI

```bash
# Cài Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy . --project-name=gym-tracker
```

## 🎯 Lộ trình tập

- **Thứ 2**: Ngực chính, vai giữa, tay sau
- **Thứ 3**: Lưng, vai sau, tay trước
- **Thứ 4**: Chân và bụng
- **Thứ 5**: Hồi phục (cardio nhẹ)
- **Thứ 6**: Vai chính, ngực phụ, tay sau
- **Thứ 7**: Lưng, tay trước, cẳng tay, bụng
- **Chủ nhật**: Nghỉ hoàn toàn

## 🛠️ Công nghệ

- HTML5
- CSS3 (Responsive design)
- Vanilla JavaScript (không cần framework)
- LocalStorage API

## 📝 Lưu ý

- Dữ liệu lưu trên trình duyệt (LocalStorage), xóa cache sẽ mất dữ liệu
- Không sync giữa các thiết bị
- Khuyến nghị backup định kỳ bằng cách export LocalStorage

## 🌟 Star History

Nếu project hữu ích, hãy cho một ⭐ trên GitHub!

## 📊 Stats

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/gym-tracker)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/gym-tracker)
![GitHub issues](https://img.shields.io/github/issues/yourusername/gym-tracker)

## 🤝 Đóng góp

Contributions, issues và feature requests đều được chào đón!
Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm chi tiết.

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa. Xem [LICENSE](LICENSE) để biết thêm chi tiết.

## 💖 Credits

- Lộ trình tập được thiết kế dựa trên nguyên tắc progressive overload
- Icon và design inspiration từ modern fitness apps
- Built with ❤️ và 💪 cho fitness community

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/yourusername">Your Name</a>
</p>

<p align="center">
  <a href="#-gym-tracker---ứng-dụng-quản-lý-lộ-trình-tập-gym">⬆ Về đầu trang</a>
</p>
