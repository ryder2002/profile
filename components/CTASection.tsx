"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, BookOpen, FileText, Sparkles, Star } from "lucide-react";
import { siteConfig, type CTAButton } from "@/lib/config";

interface CTASectionProps {
  buttons?: CTAButton[];
}

const buttonIcons: Record<string, React.ReactNode> = {
  "Đăng ký học TOEIC Listening & Reading": <BookOpen className="w-5 h-5" />,
  "Ứng dụng học tiếng Anh của Nhất": <Sparkles className="w-5 h-5" />,
  "Tổng hợp ngữ pháp": <FileText className="w-5 h-5" />,
  "ETS 2026": <Star className="w-5 h-5" />,
};

const buttonGradients: Record<string, string> = {
  "Đăng ký học TOEIC Listening & Reading": "from-[#1e3a5f]/50 via-[#87ceeb]/20 to-[#5bb5e0]/30",
  "Ứng dụng học tiếng Anh của Nhất": "from-[#5bb5e0]/30 via-[#87ceeb]/20 to-[#1e3a5f]/50",
  "Tổng hợp ngữ pháp": "from-[#87ceeb]/30 via-[#5bb5e0]/20 to-[#87ceeb]/30",
  "ETS 2026": "from-[#1e3a5f]/40 via-[#5bb5e0]/20 to-[#1e3a5f]/40",
};

const borderGradients: Record<string, string> = {
  "Đăng ký học TOEIC Listening & Reading": "from-[#87ceeb] to-[#5bb5e0]",
  "Ứng dụng học tiếng Anh của Nhất": "from-[#5bb5e0] to-[#87ceeb]",
  "Tổng hợp ngữ pháp": "from-[#87ceeb] via-[#5bb5e0] to-[#1e3a5f]",
  "ETS 2026": "from-[#5bb5e0] to-[#1e3a5f]",
};

const buttonVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function CTASection({ buttons = siteConfig.ctaButtons }: CTASectionProps) {
  return (
    <section className="px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Tài nguyên học tập</h2>
        <p className="text-white/60 text-sm">Khám phá các công cụ hỗ trợ học TOEIC hiệu quả</p>
      </motion.div>
      
      <div className="flex flex-col gap-4">
        {buttons.map((button, index) => {
          const icon = buttonIcons[button.label] || <Sparkles className="w-5 h-5" />;
          const gradient = buttonGradients[button.label] || "from-[#1e3a5f]/50 via-[#87ceeb]/20 to-[#5bb5e0]/30";
          const borderGradient = borderGradients[button.label] || "from-[#87ceeb] to-[#5bb5e0]";

          return (
            <motion.a
              key={index}
              href={button.href}
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-4 w-full px-6 py-5 rounded-2xl overflow-hidden transition-all duration-300"
              custom={index}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated border background */}
              <span className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r via-[#87ceeb] from-[#1e3a5f] to-[#5bb5e0] animate-rotate-border" />
              <span 
                className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#87ceeb] via-[#5bb5e0] to-[#1e3a5f]"
                style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s linear infinite' }}
              />
              
              {/* Inner background */}
              <span className={`absolute inset-[1px] rounded-[14px] bg-gradient-to-r ${gradient} backdrop-blur-md`} />
              
              {button.iconSrc ? (
                <Image
                  src={button.iconSrc}
                  alt=""
                  width={24}
                  height={24}
                  className="w-12 h-12 rounded-xl relative z-10"
                />
              ) : (
                <span className="relative z-10 flex items-center justify-center w-12 h-12 bg-[#1e3a5f]/60 rounded-xl shadow-lg border border-[#87ceeb]/30 group-hover:bg-[#1e3a5f]/80 group-hover:border-[#87ceeb]/50 transition-all">
                  {icon}
                </span>
              )}
              
              <div className="flex-1 relative z-10">
                <span className="text-white font-semibold text-base block">{button.label}</span>
                <span className="text-white/50 text-xs mt-0.5 block">Nhấn để truy cập</span>
              </div>
              
              <ExternalLink className="w-5 h-5 text-[#87ceeb] group-hover:text-[#5bb5e0] transition-colors relative z-10" aria-hidden="true" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
