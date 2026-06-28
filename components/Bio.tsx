"use client";

import { motion } from "framer-motion";
import { MessageCircle, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Bio() {
  const zaloLink = `https://zalo.me/${siteConfig.contact.zaloPhone}`;

  return (
    <motion.section
      className="px-6 py-6 space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div variants={itemVariants} className="relative p-6 bg-white/5 rounded-2xl border border-[#87ceeb]/20 backdrop-blur-sm overflow-hidden group hover:border-[#87ceeb]/40 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a5f] via-[#87ceeb] to-[#5bb5e0] rounded-t-2xl" />
        <p className="text-white/90 leading-relaxed relative z-10">
          {siteConfig.bio.paragraph1}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="relative p-6 bg-white/5 rounded-2xl border border-[#5bb5e0]/20 backdrop-blur-sm overflow-hidden group hover:border-[#5bb5e0]/40 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a5f] via-[#87ceeb] to-[#5bb5e0] rounded-t-2xl" />
        <p className="text-white/90 leading-relaxed relative z-10">
          {siteConfig.bio.paragraph2}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="relative p-6 bg-white/5 rounded-2xl border border-[#1e3a5f]/30 backdrop-blur-sm overflow-hidden group hover:border-[#1e3a5f]/50 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a5f] via-[#87ceeb] to-[#5bb5e0] rounded-t-2xl" />
        <p className="text-white/90 leading-relaxed relative z-10">
          {siteConfig.bio.paragraph3}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="relative p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden group hover:border-[#87ceeb]/30 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a5f] via-[#87ceeb] to-[#5bb5e0] rounded-t-2xl" />
        <p className="text-white/90 leading-relaxed relative z-10">
          {siteConfig.bio.paragraph4}
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <a
          href={zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#1e3a5f]/50 to-[#87ceeb]/20 hover:from-[#1e3a5f]/70 hover:to-[#87ceeb]/40 rounded-xl border border-[#87ceeb]/30 hover:border-[#87ceeb]/60 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-[#87ceeb]/20 group-hover:bg-[#87ceeb]/40 rounded-lg transition-colors">
            <MessageCircle className="w-5 h-5 text-[#87ceeb]" />
          </div>
          <div>
            <span className="text-xs text-white/50 block">Liên hệ</span>
            <span className="text-white font-medium">Zalo: {siteConfig.contact.zaloPhone}</span>
          </div>
        </a>

        <a
          href={siteConfig.contact.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#1e3a5f]/50 to-[#5bb5e0]/20 hover:from-[#1e3a5f]/70 hover:to-[#5bb5e0]/40 rounded-xl border border-[#5bb5e0]/30 hover:border-[#5bb5e0]/60 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-[#5bb5e0]/20 group-hover:bg-[#5bb5e0]/40 rounded-lg transition-colors">
            <Facebook className="w-5 h-5 text-[#5bb5e0]" />
          </div>
          <div>
            <span className="text-xs text-white/50 block">Theo dõi</span>
            <span className="text-white font-medium">Facebook</span>
          </div>
        </a>
      </motion.div>
    </motion.section>
  );
}