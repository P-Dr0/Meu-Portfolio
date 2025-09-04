// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const linkAnim = {
    hover: { scale: 1.2, color: "#2563eb" },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden
             bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Efeito de fundo com blur e shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-24 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-6 relative z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Olá, eu sou{" "}
        <span className="text-blue-300 drop-shadow-md">Pedro Santos</span>
      </motion.h2>

      <motion.p
        className="text-lg md:text-2xl max-w-2xl relative z-10 text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Desenvolvedor Frontend apaixonado por criar{" "}
        <span className="font-semibold text-blue-300">
          experiências modernas
        </span>{" "}
        e <span className="font-semibold text-blue-300">responsivas</span>.
      </motion.p>

      {/* Social links */}
      <motion.div
        className="mt-10 flex gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.a
          href="https://github.com/P-Dr0"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition shadow-lg"
        >
          <Github size={28} className="text-black dark:text-white" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/pedro-henrique-dos-santos-araujo-364103283"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition shadow-lg"
        >
          <Linkedin size={28} className="text-black dark:text-white" />
        </motion.a>
        <motion.a
          href="mailto:phsa2004@gmail.com"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition shadow-lg"
        >
          <Mail size={28} className="text-black dark:text-white" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
