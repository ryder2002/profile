"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 px-6 py-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-48 h-48 md:w-52 md:h-52 flex-shrink-0"
      >
        <Image
          src={siteConfig.avatarSrc}
          alt={`Ảnh đại diện của ${siteConfig.teacherName}`}
          fill
          className="rounded-full object-cover border-4 border-white/30 shadow-2xl ring-4 ring-white/10"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium mb-1">
          Giới thiệu
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          {siteConfig.teacherName}
        </h1>
      </motion.div>
    </header>
  );
}