"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
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
      <motion.div
        className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        onClick={() => setIsLightboxOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsLightboxOpen(true);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Xem ảnh chứng chỉ phóng to"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Image
          src={siteConfig.certificateSrc}
          alt="Chứng chỉ TOEIC"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 shadow-md border border-white/20">
          <ZoomIn className="w-5 h-5 text-white" aria-hidden="true" />
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
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
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
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}