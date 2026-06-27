# Prompt: Landing Page giới thiệu giảng viên TOEIC (Next.js)

Dán nguyên prompt dưới đây cho Claude Code / Cursor / Copilot Chat... để triển khai.

---

## BỐI CẢNH

Xây dựng một **landing page giới thiệu cá nhân** cho một giảng viên TOEIC, dùng để chia sẻ link cho học viên (qua Zalo/Facebook). Trang đơn (single page), tối ưu cho **mobile** vì người dùng sẽ mở chủ yếu trên điện thoại.

## YÊU CẦU KỸ THUẬT

- **Framework:** Next.js 14+ (App Router), TypeScript.
- **Styling:** Tailwind CSS.
- **Deploy:** phải chạy được ngay trên **Vercel** (không dùng server-side phức tạp, không cần database, không cần biến môi trường bắt buộc — nếu cần thì có giá trị default).
- **Ảnh:** dùng `next/image`, đặt ảnh placeholder trong thư mục `/public` (ví dụ `/public/avatar.jpg`, `/public/certificate.jpg`, `/public/app-icon.png`) để sau này tôi tự thay file là xong, không cần sửa code.
- **Cấu hình dễ chỉnh sửa:** Tạo một file cấu hình duy nhất `lib/config.ts` (hoặc `data/site-config.ts`) chứa toàn bộ nội dung và link có thể thay đổi (xem mục DỮ LIỆU CẤU HÌNH bên dưới), để tôi chỉ cần sửa 1 file là cập nhật toàn trang.

## CẤU TRÚC TRANG (theo đúng thứ tự)

1. **Header giới thiệu**
   - Ảnh đại diện (avatar) hình tròn, có viền, bên trái.
   - Bên phải: nhãn nhỏ "Giới thiệu" + Họ tên giảng viên (in đậm, lớn hơn).

2. **Phần tiểu sử / kinh nghiệm** (văn bản, chia thành các đoạn rõ ràng, giãn dòng thoải mái, dễ đọc trên mobile):
   - Đoạn 1: lời chào + giới thiệu bản thân.
   - Đoạn 2: số năm kinh nghiệm giảng dạy, quá trình (trợ giảng → giảng dạy TOEIC online), mốc chứng chỉ đầu tiên.
   - Đoạn 3: chứng chỉ gần nhất, cam kết hỗ trợ học viên.
   - Đoạn 4: thông tin liên hệ — số Zalo và link Facebook (hiển thị dạng text có icon, bấm vào mở app tương ứng: Zalo dùng link `https://zalo.me/<số điện thoại>`, Facebook mở link trực tiếp).

3. **Khối "Ảnh chứng chỉ"**
   - Một khung bo góc, viền rõ ràng, chứa ảnh chứng chỉ TOEIC (placeholder).
   - Có thể bấm/chạm để xem ảnh phóng to (lightbox đơn giản, không cần thư viện nặng — tự viết bằng state + overlay).

4. **Danh sách nút CTA (call-to-action)** — xếp theo chiều dọc, full-width trong khung container, mỗi nút là 1 pill button (bo tròn hoàn toàn, nền xanh navy đậm, chữ trắng, căn giữa):
   - "Đăng ký học TOEIC Listening & Reading" → link ra ngoài (Google Form / Messenger, tôi sẽ cung cấp).
   - "Ứng dụng học tiếng Anh của [Tên]" → có icon nhỏ riêng bên trái text (icon app, không phải icon chung), link tải app hoặc link store.
   - "Tổng hợp ngữ pháp" → link tài liệu.
   - "ETS 2026" → link tài liệu/đề thi.
   - Mỗi nút phải hỗ trợ thêm/xóa dễ dàng từ file cấu hình (dạng array, mỗi item có `label`, `href`, `icon?`).
   - Hiệu ứng hover/press nhẹ (scale hoặc đổi độ sáng), không lạm dụng animation.

5. **Footer — icon mạng xã hội**
   - 3 icon: TikTok, Instagram, Facebook — hình vuông bo góc, nền xanh navy, icon trắng, căn giữa theo hàng ngang.
   - Mỗi icon link ra ngoài, mở tab mới (`target="_blank" rel="noopener noreferrer"`), lấy từ `lucide-react` hoặc `react-icons` (chọn thư viện có sẵn icon TikTok).

## ĐỊNH HƯỚNG THIẾT KẾ (visual identity)

- **Tinh thần:** gọn gàng, đáng tin cậy, "giáo viên uy tín" — không sến, không màu mè kiểu landing page bán hàng rẻ.
- **Bảng màu:** nền trắng/kem nhạt; xanh navy đậm làm màu chủ đạo cho nút và icon (gợi ý `#0F2A4A` hoặc gần tương đương — bạn tự chọn 1 mã hex navy nhất quán, dùng làm CSS variable, không hardcode rải rác); chữ đen/xám đậm cho nội dung.
- **Typography:** một font sans-serif rõ ràng, dễ đọc tiếng Việt có dấu (ví dụ Inter, Be Vietnam Pro, hoặc Plus Jakarta Sans qua `next/font/google`). Phân cấp rõ: tên giảng viên nổi bật, đoạn văn dễ đọc, nút CTA chữ in hoa đầu hoặc semi-bold.
- **Bố cục:** container căn giữa, max-width hợp lý cho mobile-first (~480–600px trên desktop để vẫn giữ cảm giác "thẻ giới thiệu" dọc, không kéo dàn ngang).
- **Khoảng cách:** giãn cách giữa các block vừa đủ thoáng, không quá sát, không quá rời rạc.
- **Responsive:** phải đẹp từ màn hình 360px trở lên, kiểm tra layout không vỡ trên các pill button dài.
- **Accessibility:** alt text cho ảnh, focus state rõ cho các link/button khi dùng bàn phím, contrast đủ giữa chữ trắng và nền navy.

## DỮ LIỆU CẤU HÌNH (đặt sẵn placeholder, tôi sẽ thay sau)

Tạo `lib/config.ts` với cấu trúc tương tự (đặt giá trị placeholder rõ ràng, có comment để tôi biết chỗ nào cần thay):

```ts
export const siteConfig = {
  teacherName: "Đinh Công Nhất", // TODO: thay tên thật nếu cần
  avatarSrc: "/avatar.jpg", // TODO: thay ảnh đại diện
  certificateSrc: "/certificate.jpg", // TODO: thay ảnh chứng chỉ
  bio: {
    paragraph1: "...", // TODO
    paragraph2: "...", // TODO
    paragraph3: "...", // TODO
  },
  contact: {
    zaloPhone: "0383576308", // TODO
    facebookUrl: "https://www.facebook.com/...", // TODO
  },
  ctaButtons: [
    {
      label: "Đăng ký học TOEIC Listening & Reading",
      href: "#", // TODO: link đăng ký thật
    },
    {
      label: "Ứng dụng học tiếng anh của Nhất",
      href: "#", // TODO
      iconSrc: "/app-icon.png", // TODO
    },
    {
      label: "Tổng hợp ngữ pháp",
      href: "#", // TODO
    },
    {
      label: "ETS 2026",
      href: "#", // TODO
    },
  ],
  socials: {
    tiktok: "#", // TODO
    instagram: "#", // TODO
    facebook: "#", // TODO
  },
};
```

## VIỆC CẦN LÀM (checklist cho AI khi triển khai)

1. Khởi tạo project Next.js (App Router, TS, Tailwind) — hoặc nếu đã có project, tích hợp vào đúng cấu trúc hiện có.
2. Tạo `lib/config.ts` như trên.
3. Build component theo từng khối ở mục CẤU TRÚC TRANG, đọc dữ liệu từ config — không hardcode text/link trong component.
4. Thêm ảnh placeholder (có thể dùng ảnh xám/giữ chỗ đơn giản) vào `/public` đúng tên file đã khai trong config.
5. Cấu hình `next.config.js` nếu cần domain ảnh ngoài (tạm thời chưa cần vì ảnh local).
6. Kiểm tra build (`next build`) không lỗi, sẵn sàng deploy Vercel (không cần biến môi trường, hoặc nếu có thì có giá trị mặc định).
7. Viết README ngắn: cách thay avatar/cert, cách sửa link CTA, cách deploy lên Vercel (kết nối repo GitHub → Vercel import → deploy).

## LƯU Ý

- Không cần tích hợp form đăng ký, chatbot, hay backend — chỉ là trang giới thiệu tĩnh với các link ra ngoài.
- Giữ code đơn giản, dễ bảo trì vì người sở hữu trang không phải dev chuyên (tôi sẽ tự chỉnh sửa nội dung qua file config).
- Toàn bộ text hiển thị bằng tiếng Việt có dấu — đảm bảo font và encoding hiển thị đúng.
Link tiktok: https://www.tiktok.com/@congnhat.02?_r=1&_t=ZS-97Z9SmJc4Ie
Link facebook: https://www.facebook.com/share/1XYV5FQ7yU/?mibextid=wwXIfr 
Link IG: https://www.instagram.com/congnhat.02 