"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, Award } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Certificate() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <motion.section
      className="px-6 py-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#1e3a5f]/50 to-[#87ceeb]/20 rounded-full border border-[#87ceeb]/30 mb-3">
          <Award className="w-4 h-4 text-[#87ceeb]" />
          <span className="text-xs uppercase tracking-wider text-[#87ceeb] font-medium">Chứng chỉ</span>
        </div>
        <h2 className="text-xl font-bold text-white">Chứng chỉ TOEIC</h2>
        <p className="text-white/50 text-sm mt-1">Xem chi tiết bằng cấp và chứng chỉ của tôi</p>
      </motion.div>

      <motion.div
        className="relative rounded-2xl overflow-hidden border-2 border-[#87ceeb]/30 shadow-xl cursor-pointer group"
        onClick={() => setIsLightboxOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsLightboxOpen(true);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Xem ảnh chứng chỉ phóng to"
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 20px 40px rgba(135, 206, 235, 0.2)",
          borderColor: "rgba(135, 206, 235, 0.6)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent z-10" />
        <Image
          src={siteConfig.certificateSrc}
          alt="Chứng chỉ TOEIC"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-[#1e3a5f]/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#87ceeb]/30">
            <Award className="w-5 h-5 text-[#87ceeb]" />
            <span className="text-white font-medium text-sm">Chứng chỉ được chứng nhận</span>
          </div>
          <div className="flex items-center gap-2 bg-[#87ceeb]/20 backdrop-blur-sm rounded-full p-2.5 border border-[#87ceeb]/30 group-hover:bg-[#87ceeb]/40 transition-colors">
            <ZoomIn className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsLightboxOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setIsLightboxOpen(false);
              }
            }}
            role="dialog"
            aria-label="Ảnh chứng chỉ phóng to"
          >
            <motion.button
              className="absolute top-6 right-6 text-white hover:text-[#87ceeb] transition-colors bg-[#1e3a5f]/60 backdrop-blur-sm rounded-full p-2 border border-[#87ceeb]/30"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Đóng"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div
              className="relative max-w-full max-h-[90vh] w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={siteConfig.certificateSrc}
                alt="Chứng chỉ TOEIC"
                width={1200}
                height={900}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-xl border border-[#87ceeb]/30"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
