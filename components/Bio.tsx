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
      <motion.div variants={itemVariants} className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-t-2xl" />
        <p className="text-white/90 leading-relaxed">
          {siteConfig.bio.paragraph1}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-tl-2xl" />
        <p className="text-white/90 leading-relaxed">
          {siteConfig.bio.paragraph2}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
        <div className="absolute top-0 left-1/4 w-1/4 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-tl-2xl" />
        <p className="text-white/90 leading-relaxed">
          {siteConfig.bio.paragraph3}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
        <p className="text-white/90 leading-relaxed">
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
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:from-blue-500/50 hover:to-cyan-500/50 rounded-xl border border-white/20 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500/30 rounded-lg group-hover:bg-blue-500/50 transition-colors">
            <MessageCircle className="w-5 h-5 text-cyan-300" />
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
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-500/30 to-teal-500/30 hover:from-blue-500/50 hover:to-teal-500/50 rounded-xl border border-white/20 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600/30 rounded-lg group-hover:bg-blue-600/50 transition-colors">
            <Facebook className="w-5 h-5 text-blue-300" />
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
