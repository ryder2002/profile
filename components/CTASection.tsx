"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, BookOpen, FileText, Sparkles } from "lucide-react";
import { siteConfig, type CTAButton } from "@/lib/config";

interface CTASectionProps {
  buttons?: CTAButton[];
}

const buttonIcons: Record<string, React.ReactNode> = {
  "Đăng ký học TOEIC Listening & Reading": <BookOpen className="w-5 h-5" />,
  "Ứng dụng học tiếng Anh của Nhất": <Sparkles className="w-5 h-5" />,
  "Tổng hợp ngữ pháp": <FileText className="w-5 h-5" />,
  "ETS 2026": <Sparkles className="w-5 h-5" />,
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
      <div className="flex flex-col gap-4">
        {buttons.map((button, index) => {
          const icon = buttonIcons[button.label] || <Sparkles className="w-5 h-5" />;

          return (
            <motion.a
              key={index}
              href={button.href}
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-3 w-full px-5 py-4 bg-white/15 backdrop-blur-md text-white font-semibold rounded-2xl shadow-lg border border-white/20 overflow-hidden"
              custom={index}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, y: -2, backgroundColor: "rgba(255,255,255,0.25)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              {button.iconSrc ? (
                <Image
                  src={button.iconSrc}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded relative z-10"
                />
              ) : (
                <span className="relative z-10 flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                  {icon}
                </span>
              )}
              <span className="flex-1 text-left relative z-10">{button.label}</span>
              <ExternalLink className="w-5 h-5 opacity-70 relative z-10" aria-hidden="true" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}