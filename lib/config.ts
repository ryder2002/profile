export interface CTAButton {
  label: string;
  href: string;
  iconSrc?: string;
}

export interface SiteConfig {
  teacherName: string;
  avatarSrc: string;
  certificateSrc: string;
  bio: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
  };
  contact: {
    zaloPhone: string;
    facebookUrl: string;
  };
  ctaButtons: CTAButton[];
  socials: {
    tiktok: string;
    instagram: string;
    facebook: string;
  };
}

export const siteConfig: SiteConfig = {
  teacherName: "Đinh Công Nhất",
  avatarSrc: "/avatar.jpg",
  certificateSrc: "/certificate.jpg",
  bio: {
    paragraph1:
      "Mình xin giới thiệu chút về bản thân, Mình là Đinh Công Nhất, người trực tiếp hướng dẫn và đồng hành cùng bạn trong suốt quá trình học.",
    paragraph2:
      "Mình có hơn 3 năm kinh nghiệm giảng dạy tiếng Anh. Trong năm 2 và 3 đại học, mình từng làm trợ giảng tại Trung tâm Anh ngữ LAPO, phụ trách mảng tiếng Anh giao tiếp. Đến năm 4, mình bắt đầu giảng dạy TOEIC online sau khi đạt chứng chỉ TOEIC 905 LR.",
    paragraph3:
      "Chứng chỉ gần đây nhất mình đạt được vào cuối năm 2025 là TOEIC 935 LR. Với điểm số và kinh nghiệm tích lũy, mình đã đồng hành và hỗ trợ nhiều bạn cải thiện tiếng Anh hiệu quả, và mình tin rằng có thể giúp bạn tự tin chinh phục lại tiếng Anh và đạt được mục tiêu của mình.",
    paragraph4:
      "Liên hệ với mình qua Zalo hoặc Facebook để được tư vấn về khóa học TOEIC phù hợp với trình độ của bạn!",
  },
  contact: {
    zaloPhone: "0383576308",
    facebookUrl: "https://www.facebook.com/share/1XYV5FQ7yU/?mibextid=wwXIfr",
  },
  ctaButtons: [
    {
      label: "Đăng ký học TOEIC Listening & Reading",
      href: "https://forms.gle/7jb11iRyEdnavnwC9",
    },
    {
      label: "Ứng dụng học tiếng Anh của Nhất",
      href: "https://cnenglish.io.vn/",
      iconSrc: "https://cnenglish.io.vn/Logo.png",
    },
    {
      label: "Tổng hợp ngữ pháp",
      href: "https://drive.google.com/drive/folders/1aYeKL8axyeN7XXjthAhIOT3LI_P8SD9-",
    },
    {
      label: "ETS 2026",
      href: "https://drive.google.com/drive/folders/1gRFXXLpdpBNhJIEiyWXB1ViJaayUl601",
    },
  ],
  socials: {
    tiktok: "https://www.tiktok.com/@congnhat.02?_r=1&_t=ZS-97Z9SmJc4Ie",
    instagram: "https://www.instagram.com/congnhat.02",
    facebook: "https://www.facebook.com/share/1XYV5FQ7yU/?mibextid=wwXIfr",
  },
};
