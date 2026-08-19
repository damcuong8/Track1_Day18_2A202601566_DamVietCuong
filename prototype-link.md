# Prototype Link & Hướng Dẫn Trải Nghiệm — Day 18

**Học viên:** Đàm Việt Cường — **MHV:** 2A202601566  
**Nhóm:** cuong  
**Case B:** AI Notes — Personal Learning Notes  
**Phương án chịu trách nhiệm:** **Option B — Interactive AI Co-Pilot (proB.html & proB.js)**  

---

## 1. Cách Khởi Chạy Prototype trên Máy Tính

Nhóm đã xây dựng hệ thống prototype hoàn chỉnh gồm 3 phương án độc lập sử dụng HTML/CSS/JavaScript thuần kết hợp backend Python nội bộ (`serve.py`) để bảo mật API key và xử lý streaming:

### Các bước khởi chạy:
1. **Mở Terminal / PowerShell** tại thư mục dự án này:
   ```bash
   cd d:\AI_thuc_chien\Track1_day17_2A202601566_DamVietCuong\Track1_Day18_2A202601566_DamVietCuong
   ```
2. **Khởi động server nội bộ:**
   ```bash
   python serve.py
   ```
   *(Server sẽ chạy tại địa chỉ `http://localhost:8000`).*
3. **Mở trình duyệt và truy cập các phương án:**
   - 🅰️ **Option A (Lê Quang Huy):** [http://localhost:8000/proA.html](http://localhost:8000/proA.html)
   - 🅱️ **Option B (Đàm Việt Cường):** [http://localhost:8000/proB.html](http://localhost:8000/proB.html)
   - 🅲 **Option C (Trần Đức Bảo):** [http://localhost:8000/proC.html](http://localhost:8000/proC.html)

*(Ngoài ra bạn có thể mở trực tiếp file độc lập [`prototype-option-b.html`](prototype-option-b.html) trên bất kỳ trình duyệt nào mà không cần server).*

---

## 2. Cấu Trúc Mã Nguồn Prototype trong Thư Mục `assets/`

```text
Track1_Day18_2A202601566_DamVietCuong/
├── serve.py                  # Server Python nội bộ điều phối API & giữ bảo mật Key
├── proA.html                 # Trang trải nghiệm Option A (User-Led / Zero-AI)
├── proB.html                 # Trang trải nghiệm Option B (Đàm Việt Cường phụ trách)
├── proC.html                 # Trang trải nghiệm Option C (AI-Led / Autonomous)
├── prototype-option-b.html   # Standalone UI demo cho Option B
└── assets/
    ├── app.css               # Hệ thống CSS Design System chuẩn Manrope/DM Mono
    ├── core.js               # Shell điều khiển slide, sidebar, layout chung
    ├── notes.js              # Quản lý dữ liệu ghi chú của người học
    ├── notesview.js          # Giao diện hiển thị và tổng hợp ghi chú
    ├── notepad.js            # Khay ghi chú Notepad đính kèm
    ├── chat.js               # Module trò chuyện thời gian thực với AI
    ├── ai.js                 # Kết nối API OpenAI / Mock fallback
    ├── proA.js               # Logic điều khiển Option A (Khay kéo thả)
    ├── proB.js               # Logic điều khiển Option B (Đàm Việt Cường — Smart Dwell Trigger & Card Review)
    └── proC.js               # Logic điều khiển Option C (1-Click Auto Study Pack)
```

---

## 3. Cơ Chế Hoạt Động của Option B (Đàm Việt Cường Phụ Trách)

- **Cơ chế Kích hoạt Thông minh (Smart Dwell Trigger):**  
  AI không tự tiện can thiệp ngay khi mở trang mà im lặng quan sát. Chỉ khi người học **ở lại slide 10 giây (dwell time)** hoặc **vừa ghi thêm một mẩu ghi chú mới**, AI mới chủ động hiển thị thẻ hỏi: *"Bạn có cần trợ giúp với slide này không?"*.
- **Cơ chế Đồng kiến tạo (Ask & Propose):**  
  - Bấm `[✓ Có, giúp mình với]` $\rightarrow$ AI đọc slide và tạo 4 tab: *Tóm tắt & Quiz ôn tập*, *Trò chuyện thời gian thực*, *Xem ghi chú gốc*, *Tổng hợp ghi chú*.
  - Bấm `[✕ Chưa cần, cảm ơn]` $\rightarrow$ AI tiếp tục im lặng, không làm phiền.
  - Bấm `[Thu hồi — về lại im lặng]` $\rightarrow$ Xóa toàn bộ nội dung AI vừa tạo và quay về trạng thái ban đầu (Recovery Path).
