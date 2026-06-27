# Landing Page Giảng Viên TOEIC - Đinh Công Nhất

Trang giới thiệu cá nhân dành cho giảng viên TOEIC, tối ưu cho thiết bị di động.

## Cấu Trúc Thư Mục

```
├── app/
│   ├── page.tsx           # Trang chính
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Styles toàn cục
├── components/
│   ├── Header.tsx          # Avatar + tên giảng viên
│   ├── Bio.tsx             # Tiểu sử
│   ├── Certificate.tsx     # Ảnh chứng chỉ + lightbox
│   ├── CTASection.tsx      # Nút CTA
│   └── Footer.tsx           # Social icons
├── lib/
│   └── config.ts           # File cấu hình chính
├── public/
│   ├── avatar.jpg          # Ảnh đại diện
│   └── certificate.jpg     # Ảnh chứng chỉ
└── ...
```

## Cách Sử Dụng

### 1. Cài Đặt

```bash
npm install
```

### 2. Chạy Development Server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem trang.

### 3. Thay Đổi Nội Dung

Mở file `lib/config.ts` để chỉnh sửa:

- **Tên giảng viên:** `teacherName`
- **Link ảnh:** `avatarSrc`, `certificateSrc`
- **Tiểu sử:** `bio.paragraph1` đến `bio.paragraph4`
- **Liên hệ:** `contact.zaloPhone`, `contact.facebookUrl`
- **Nút CTA:** `ctaButtons[]` - mỗi nút có `label`, `href`, `iconSrc?`
- **Mạng xã hội:** `socials.tiktok`, `socials.instagram`, `socials.facebook`

### 4. Thay Đổi Ảnh

1. Thay thế file trong thư mục `/public`:
   - `avatar.jpg` - Ảnh đại diện (nên dùng ảnh vuông, sẽ hiển thị tròn)
   - `certificate.jpg` - Ảnh chứng chỉ

2. Nếu đổi tên file, cập nhật lại đường dẫn trong `lib/config.ts`

## Deploy Lên Vercel

### Cách 1: Qua GitHub (Khuyến nghị)

1. Push code lên GitHub repository
2. Truy cập [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import repository của bạn
5. Vercel sẽ tự động nhận diện Next.js và deploy

### Cách 2: Qua Vercel CLI

```bash
npm i -g vercel
vercel
```

## Build for Production

```bash
npm run build
npm start
```

## Công Nghệ Sử Dụng

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Be Vietnam Pro** (Font tiếng Việt)
