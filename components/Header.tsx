"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-6 px-6 py-12 text-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3a5f] via-[#87ceeb] to-[#5bb5e0] rounded-full blur-xl opacity-50 animate-pulse" />
        <div className="relative w-36 h-36 md:w-44 md:h-44 flex-shrink-0">
          <Image
            src={siteConfig.avatarSrc}
            alt={`Ảnh đại diện của ${siteConfig.teacherName}`}
            fill
            className="rounded-full object-cover border-4 border-[#87ceeb]/40 shadow-2xl"
            priority
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[#87ceeb] via-[#5bb5e0] to-[#1e3a5f] -z-10" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center gap-2"
      >
        <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#1e3a5f]/50 to-[#87ceeb]/20 rounded-full border border-[#87ceeb]/30">
          <Award className="w-4 h-4 text-[#87ceeb]" />
          <span className="text-xs uppercase tracking-wider text-[#87ceeb] font-medium">Chuyên gia TOEIC</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold gradient-text drop-shadow-lg">
          {siteConfig.teacherName}
        </h1>
        
        <p className="text-white/60 text-sm mt-1">Học viên tin tưởng lựa chọn</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="flex items-center gap-6 mt-2"
      >
        <div className="flex items-center gap-2 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-[#87ceeb]" />
              <span className="text-xl font-bold text-white">500+</span>
            </div>
            <span className="text-xs text-white/50">Học viên</span>
          </div>
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#87ceeb]/50 to-transparent" />
        <div className="flex items-center gap-2 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-[#5bb5e0]" />
              <span className="text-xl font-bold text-white">850+</span>
            </div>
            <span className="text-xs text-white/50">Toeic Score</span>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
