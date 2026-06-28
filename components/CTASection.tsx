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
  "Đăng ký học TOEIC Listening & Reading": "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
  "Ứng dụng học tiếng Anh của Nhất": "from-teal-500/20 via-cyan-500/20 to-teal-500/20",
  "Tổng hợp ngữ pháp": "from-cyan-500/20 via-blue-500/20 to-cyan-500/20",
  "ETS 2026": "from-purple-500/20 via-cyan-500/20 to-purple-500/20",
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
          const gradient = buttonGradients[button.label] || "from-blue-500/20 via-cyan-500/20 to-teal-500/20";

          return (
            <motion.a
              key={index}
              href={button.href}
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-4 w-full px-6 py-5 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              custom={index}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, y: -2, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              {button.iconSrc ? (
                <Image
                  src={button.iconSrc}
                  alt=""
                  width={24}
                  height={24}
                  className="w-12 h-12 rounded-xl relative z-10"
                />
              ) : (
                <span className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-xl group-hover:from-blue-500/60 group-hover:to-cyan-500/60 transition-all duration-300 shadow-lg">
                  {icon}
                </span>
              )}
              
              <div className="flex-1 relative z-10">
                <span className="text-white font-semibold text-base block">{button.label}</span>
                <span className="text-white/50 text-xs mt-0.5 block">Nhấn để truy cập</span>
              </div>
              
              <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-cyan-400 transition-colors relative z-10" aria-hidden="true" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
