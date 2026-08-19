# AI Support Log — Nhật Ký Sử Dụng AI (Day 18)

**Học viên:** Đàm Việt Cường  
**Mã học viên (MHV):** 2A202601566  
**Nhóm:** cuong  
**Case nghiên cứu:** Case B — AI Notes: Personal Learning Notes  

---

## 1. AI đã giúp tôi ở đâu?
- **Phân tích và cấu trúc hóa dữ liệu:** AI hỗ trợ phân loại các trích dẫn phỏng vấn từ bạn Mai (01317) và bạn Hoàn thành 3 pattern lặp lại chính xác trong bảng *Evidence Huddle*.
- **Xây dựng mã nguồn Prototype Option B:** Hỗ trợ viết và tinh chỉnh các module JavaScript trong `assets/proB.js`, `assets/chat.js` và `assets/notepad.js` để hiện thực hóa cơ chế nhận diện thời gian dừng trên slide (Dwell timer 10s) và các luồng thẻ duyệt Human-in-the-loop.
- **Rà soát tính khác biệt giữa 3 Options (Distance Check):** Giúp nhóm kiểm tra xem 3 options có thực sự khác nhau về cơ chế can thiệp (*Don't Act vs. Ask & Propose vs. Act with Guardrails*) hay chỉ khác nhau về màu sắc/giao diện.
- **Biên tập và chuẩn hóa tài liệu markdown:** Tự động định dạng các bảng biểu, markdown links và checklist theo đúng tiêu chuẩn 5 Gate của Day 18.

---

## 2. AI sai, hời hợt hoặc làm các options giống nhau ở đâu?
- **Khởi đầu các options bị trùng lặp:** Ban đầu AI gợi ý 3 options nhưng thực chất chỉ thay đổi giao diện (Option A dạng danh sách, Option B dạng thẻ, Option C dạng bảng) mà không có sự phân định rõ ràng về **vai trò và quyền tự chủ giữa Con người và AI**.
- **Thiên vị giải pháp tự động hóa:** AI có xu hướng mặc định rằng Option C (tự làm sẵn 100%) là phương án tối ưu nhất và người dùng sẽ luôn thích nhất, bỏ qua rủi ro làm người học bị động và cảm giác bị áp đặt nội dung.
- **Câu hỏi test có tính định hướng (Leading Questions):** Ban đầu AI gợi ý các câu hỏi phỏng vấn như *"Bạn có thấy tính năng này thông minh và tiết kiệm thời gian không?"*, dễ làm sai lệch dữ liệu quan sát.

---

## 3. Tôi đã tự sửa hoặc quyết định lại điều gì?
- **Định nghĩa lại cơ chế kích hoạt thông minh cho Option B:** Thay vì để AI xin quyền ngay khi vừa mở trang (gây khó chịu), tôi đã cùng nhóm quyết định thiết kế cơ chế **Dwell Trigger** (chỉ hỏi khi người học dừng lại 10s hoặc vừa ghi chú mới), tạo cảm giác trợ giúp đúng lúc.
- **Chuẩn hóa kịch bản quan sát khách quan:** Chuyển toàn bộ câu hỏi gợi mở thành câu hỏi trung tính: *"Trong tình huống này, bạn sẽ làm gì tiếp theo?"* và *"Điều gì ở phương án vừa chọn khiến bạn chưa thoải mái?"*.
- **Quyết định Next Change dựa trên dữ liệu thật:** Dù AI đề xuất tập trung vào việc tự động sinh tóm tắt dài hơn, tôi và nhóm đã chốt phát triển tính năng **"Point & Ask trực tiếp trên slide"** dựa trên chính phản hồi đau đáu của tester trong buổi thử nghiệm.
