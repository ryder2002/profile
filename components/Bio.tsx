"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Bio() {
  const zaloLink = `https://zalo.me/${siteConfig.contact.zaloPhone}`;

  return (
    <motion.section
      className="px-6 py-6 space-y-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.p variants={itemVariants} className="text-white/90 leading-relaxed">
        {siteConfig.bio.paragraph1}
      </motion.p>
      <motion.p variants={itemVariants} className="text-white/90 leading-relaxed">
        {siteConfig.bio.paragraph2}
      </motion.p>
      <motion.p variants={itemVariants} className="text-white/90 leading-relaxed">
        {siteConfig.bio.paragraph3}
      </motion.p>
      <motion.p variants={itemVariants} className="text-white/90 leading-relaxed">
        {siteConfig.bio.paragraph4}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <a
          href={zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-white/70 font-medium transition-colors"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span>Zalo: {siteConfig.contact.zaloPhone}</span>
        </a>

        <a
          href={siteConfig.contact.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-white/70 font-medium transition-colors"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span>Facebook</span>
        </a>
      </motion.div>
    </motion.section>
  );
}