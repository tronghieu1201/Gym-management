# 📖 Hướng Dẫn Sử Dụng Gym Tracker

## 🎯 Tổng quan

Gym Tracker giúp bạn theo dõi lộ trình tập gym tại nhà với lịch tập 7 ngày/tuần, tập trung vào:
- **Vai – Lưng – Ngực – Tay** (ưu tiên)
- Chân và bụng
- Ngày hồi phục

## 📱 Các tính năng chính

### 1. Xem lịch tập tuần

- **Tuần hiện tại**: Mặc định hiển thị tuần này
- **Điều hướng**: Dùng nút ← → để xem các tuần trước/sau
- Mỗi thẻ ngày hiển thị:
  - 📅 Ngày trong tuần
  - 💪 Nhóm cơ được tập
  - ✅ Checkbox để đánh dấu hoàn thành cả ngày

### 2. Theo dõi tiến độ

**Ở header bạn thấy:**
- **Tuần này**: X/7 ngày đã hoàn thành
- **Streak**: Số ngày tập liên tiếp

### 3. Chi tiết từng bài tập

**Click vào bất kỳ bài tập nào để xem chi tiết:**

#### 📋 Thông tin bài tập
- Số hiệp × số lần
- Ghi chú kỹ thuật (thời gian nghỉ, biến thể...)

#### 💪 Ghi nhận kết quả
- Nhập **Trọng lượng** (kg)
- Nhập **Số lần** thực hiện
- Click **Lưu kết quả**
- Xem lịch sử các lần tập trước

#### 📝 Ghi chú cá nhân
- Viết cảm nhận về bài tập
- Ghi điều chỉnh kỹ thuật
- Lưu lại để tham khảo lần sau

#### ✅ Hoàn thành bài tập
- Tick checkbox bên phải mỗi bài
- Bài đã hoàn thành sẽ có gạch ngang

### 4. Sao lưu & Phục hồi

**📤 Export (Sao lưu)**
- Click nút **📤 Export** ở header
- File JSON sẽ được tải về
- Tên file: `gym-tracker-backup-YYYY-MM-DD.json`
- **Khuyến nghị**: Export hàng tuần để phòng mất dữ liệu

**📥 Import (Phục hồi)**
- Click nút **📥 Import**
- Chọn file JSON đã export trước đó
- Dữ liệu sẽ được khôi phục

**🗑️ Xóa toàn bộ**
- Click nút **🗑️ Xóa**
- Xác nhận để xóa toàn bộ dữ liệu
- ⚠️ **Cảnh báo**: Không thể hoàn tác!

## 🗓️ Lịch tập chi tiết

### Thứ 2 – Ngực chính, vai giữa, tay sau
- Dumbbell floor press
- Hít đất cơ bản
- Band chest fly
- Dumbbell lateral raise
- Dumbbell overhead triceps extension
- Band triceps pushdown

### Thứ 3 – Lưng, vai sau, tay trước
- Pull-up tay sấp
- One-arm dumbbell row
- Band straight-arm pulldown
- Bent-over dumbbell rear-delt fly
- Alternating dumbbell curl
- Hammer curl

### Thứ 4 – Chân và bụng
- Goblet squat
- Dumbbell Romanian deadlift
- Bulgarian split squat
- Band lying leg curl
- Single-leg calf raise
- Reverse crunch
- Plank

### Thứ 5 – Hồi phục
- Nghỉ hoàn toàn hoặc cardio Zone 2 (25-40 phút)
- Vận động nhẹ khớp (10 phút)
- **KHÔNG tập tạ nặng**

### Thứ 6 – Vai chính, ngực phụ, tay sau
- Standing dumbbell shoulder press
- Dumbbell lateral raise
- Band face pull
- Hít đất kê chân cao
- Dumbbell squeeze floor press
- Overhead triceps extension
- Diamond push-up

### Thứ 7 – Lưng, tay trước, cẳng tay, bụng
- Chin-up tay ngửa
- One-arm dumbbell row
- Dumbbell pullover
- Concentration curl
- Band curl
- Dumbbell reverse curl
- Farmer hold
- Hanging knee raise

### Chủ nhật – Nghỉ hoàn toàn
- Nghỉ ngơi toàn diện
- Có thể đi bộ nhẹ
- Ăn đủ protein, ngủ đủ giấc

## 💡 Nguyên tắc tập

### Khởi động
- 5-10 phút cardio nhẹ
- 1-2 hiệp khởi động với trọng lượng nhẹ

### Thực hiện
- **Bài chính** (pull-up, row, press, squat, RDL):
  - Dừng còn 1-2 lần dự trữ
  - Nghỉ 2-3 phút giữa các hiệp
  
- **Bài cô lập** (vai, tay, bụng):
  - Có thể tập tới failure (0 lần dự trữ)
  - Nghỉ 60-90 giây

### Tăng cường độ
Khi đạt mức rep cao nhất ở TẤT CẢ hiệp:
1. Tăng trọng lượng tạ
2. Hoặc dùng dây nặng hơn

Nếu không thể tăng tạ:
- Tăng số rep
- Hạ chậm 3 giây (eccentric)
- Dừng ở vị trí căng (pause)
- Chuyển sang biến thể khó hơn

## 📱 Cài đặt như App

### iPhone/iPad
1. Mở Safari → truy cập link app
2. Tap nút **Share** (mũi tên ↑)
3. Chọn **Add to Home Screen**
4. Đặt tên → **Add**

### Android
1. Mở Chrome → truy cập link app
2. Tap menu **⋮** (3 chấm)
3. Chọn **Add to Home screen**
4. Đặt tên → **Add**

## 🔐 Về dữ liệu

### Lưu trữ
- Dữ liệu lưu trên **LocalStorage** của trình duyệt
- Không gửi lên server nào
- **Riêng tư 100%**

### Lưu ý
- ⚠️ Xóa cache/dữ liệu trình duyệt = mất toàn bộ
- 💾 Export định kỳ để backup
- 📱 Mỗi thiết bị có dữ liệu riêng (không sync)

## ❓ FAQ

**Q: Làm sao để sync giữa điện thoại và máy tính?**
A: Hiện tại chưa hỗ trợ sync tự động. Bạn có thể Export từ thiết bị này và Import vào thiết bị khác.

**Q: Tôi có thể tùy chỉnh lịch tập không?**
A: Hiện tại lịch cố định. Nếu muốn tùy chỉnh, bạn cần sửa code trong file `app.js`.

**Q: App có hoạt động offline không?**
A: Có! Sau lần đầu load, app hoạt động hoàn toàn offline nhờ Service Worker.

**Q: Tôi muốn thêm bài tập mới thì sao?**
A: Sửa object `workoutData` trong file `app.js`, thêm bài tập theo cấu trúc có sẵn.

**Q: Dữ liệu bị mất, làm sao khôi phục?**
A: Nếu đã Export trước đó, dùng chức năng Import để khôi phục. Nếu chưa Export thì không thể khôi phục.

## 🎨 Tùy chỉnh

Muốn đổi màu sắc? Sửa file `styles.css`:

```css
:root {
    --primary: #4f46e5;      /* Màu chủ đạo */
    --success: #10b981;      /* Màu hoàn thành */
    --bg: #0f172a;           /* Màu nền */
    /* ... */
}
```

## 💪 Tips để tập hiệu quả

1. **Consistency > Intensity**: Tập đều đặn quan trọng hơn tập nặng
2. **Form first**: Kỹ thuật đúng trước, tăng tạ sau
3. **Progressive overload**: Tăng dần cường độ mỗi tuần
4. **Recovery matters**: Ngủ đủ 7-8 tiếng, ăn đủ protein
5. **Track progress**: Ghi chép kết quả để thấy được tiến bộ
6. **Listen to your body**: Đau khớp → nghỉ, đau cơ → ok

## 🆘 Gặp vấn đề?

- Kiểm tra Console (F12) để xem lỗi
- Clear cache và thử lại
- Export dữ liệu trước khi troubleshoot
- Tạo Issue trên GitHub repo

---

**Chúc bạn tập luyện hiệu quả! 💪🔥**
