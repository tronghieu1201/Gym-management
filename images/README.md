# 📸 Thư Mục Hình Ảnh Bài Tập

Đây là nơi chứa hình ảnh minh họa cho từng bài tập.

## 📋 Danh sách ảnh cần thiết

### Thứ 2 - Chest, Side Delts & Triceps (6 ảnh)
- [ ] `dumbbell-floor-press.jpg`
- [ ] `push-up.jpg`
- [ ] `band-chest-fly.jpg`
- [ ] `dumbbell-lateral-raise.jpg`
- [ ] `overhead-triceps-extension.jpg`
- [ ] `band-triceps-pushdown.jpg`

### Thứ 3 - Back, Rear Delts & Biceps (6 ảnh)
- [ ] `pull-up.jpg`
- [ ] `one-arm-dumbbell-row.jpg`
- [ ] `band-straight-arm-pulldown.jpg`
- [ ] `bent-over-rear-delt-fly.jpg`
- [ ] `alternating-dumbbell-curl.jpg`
- [ ] `hammer-curl.jpg`

### Thứ 4 - Legs, Calves & Abs (7 ảnh)
- [ ] `goblet-squat.jpg`
- [ ] `dumbbell-romanian-deadlift.jpg`
- [ ] `bulgarian-split-squat.jpg`
- [ ] `band-lying-leg-curl.jpg`
- [ ] `single-leg-calf-raise.jpg`
- [ ] `reverse-crunch.jpg`
- [ ] `plank.jpg`

### Thứ 5 - Recovery (2 ảnh)
- [ ] `recovery-cardio.jpg`
- [ ] `mobility-work.jpg`

### Thứ 6 - Shoulders, Chest & Triceps (7 ảnh)
- [ ] `standing-dumbbell-shoulder-press.jpg`
- [ ] `dumbbell-lateral-raise.jpg` (đã có ở T2)
- [ ] `band-face-pull.jpg`
- [ ] `feet-elevated-push-up.jpg`
- [ ] `dumbbell-squeeze-floor-press.jpg`
- [ ] `overhead-triceps-extension.jpg` (đã có ở T2)
- [ ] `diamond-push-up.jpg`

### Thứ 7 - Back, Biceps, Forearms & Abs (8 ảnh)
- [ ] `chin-up.jpg`
- [ ] `one-arm-dumbbell-row.jpg` (đã có ở T3)
- [ ] `dumbbell-pullover.jpg`
- [ ] `concentration-curl.jpg`
- [ ] `band-curl.jpg`
- [ ] `dumbbell-reverse-curl.jpg`
- [ ] `farmer-hold.jpg`
- [ ] `hanging-knee-raise.jpg`

### Chủ nhật - Rest (1 ảnh)
- [ ] `rest-day.jpg`

---

## 📐 Yêu cầu kỹ thuật

### Kích thước khuyến nghị
- **Width**: 800-1200px
- **Height**: 600-800px
- **Tỷ lệ**: 4:3 hoặc 3:2
- **Format**: JPG (ưu tiên) hoặc PNG
- **File size**: < 500KB mỗi ảnh

### Chất lượng
- Hình ảnh rõ nét, sáng đủ
- Nền đơn giản, không lộn xộn
- Focus vào động tác chính
- Thể hiện rõ starting và ending position (nếu có thể)

---

## 🎨 Nguồn lấy ảnh

### 1. Tự chụp (Tốt nhất)
- Chụp chính bạn thực hiện động tác
- Authentic và phù hợp với setup của bạn
- Dùng smartphone với camera tốt là đủ

### 2. Free Stock Photos
- **Unsplash**: https://unsplash.com/s/photos/workout
- **Pexels**: https://www.pexels.com/search/gym/
- **Pixabay**: https://pixabay.com/images/search/fitness/

### 3. AI Generated
- **DALL-E**: https://openai.com/dall-e/
- **Midjourney**: https://www.midjourney.com/
- **Stable Diffusion**: Free & open-source

### 4. YouTube Screenshots
- Tìm video hướng dẫn chính xác
- Screenshot động tác (chọn frame đẹp)
- **Lưu ý**: Đảm bảo tuân thủ bản quyền

---

## 🔧 Cách thêm ảnh

### Bước 1: Chuẩn bị ảnh
1. Đổi tên file chính xác theo danh sách trên
2. Resize về kích thước phù hợp (nếu quá lớn)
3. Optimize file size (dùng TinyPNG, ImageOptim, etc.)

### Bước 2: Copy vào thư mục
```bash
# Copy tất cả ảnh vào thư mục images/
cp path/to/your/photos/*.jpg images/
```

### Bước 3: Commit & Push
```bash
git add images/
git commit -m "Add exercise images"
git push
```

### Bước 4: Test
- Mở app trong browser
- Click vào bài tập
- Kiểm tra ảnh hiển thị đúng

---

## 🎯 Placeholder hiện tại

Nếu chưa có ảnh:
- App vẫn hoạt động bình thường
- Hiển thị text "📷 Chưa có ảnh minh họa"
- Tất cả tính năng khác vẫn dùng được

---

## 💡 Tips

### Tối ưu ảnh trước khi upload
```bash
# Dùng ImageMagick (nếu đã cài)
mogrify -resize 1000x750 -quality 85 *.jpg
```

### Hoặc dùng online tool
- **TinyPNG**: https://tinypng.com/ (giảm 70% dung lượng)
- **Squoosh**: https://squoosh.app/ (Google tool)

### Batch rename (Windows)
```powershell
# Ví dụ: đổi tên hàng loạt
Rename-Item "IMG_001.jpg" "push-up.jpg"
```

---

## 🚨 Lưu ý bản quyền

- **Tự chụp**: Bạn sở hữu 100% bản quyền ✅
- **Free stock**: Kiểm tra license (thường CC0 hoặc free for personal use) ✅
- **Google Images**: Không nên dùng trực tiếp ❌
- **YouTube screenshots**: Cần xin phép hoặc dùng cho personal use only ⚠️

---

## 📞 Cần trợ giúp?

Nếu không biết chụp ảnh nào hoặc cần gợi ý:
- Tìm video hướng dẫn trên YouTube
- Search "[Tên bài tập] form" trên Google Images
- Hỏi AI: "Show me proper form for [exercise name]"

---

**Sau khi thêm đủ ảnh, app sẽ trông professional hơn rất nhiều! 🚀**
