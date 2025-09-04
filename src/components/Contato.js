// src/components/Contato.js
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contato() {
  const linkAnim = {
    hover: { scale: 1.2, color: "#2563eb" },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col items-center justify-center text-center py-24 overflow-hidden"
    >
      {/* Fundo gradiente com formas suaves */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-24 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-80"></div>
      </div>

      {/* Conteúdo */}
      <h3 className="text-4xl font-extrabold mb-6 relative z-10 text-white drop-shadow-md">
        Contato
      </h3>
      <p className="mb-8 relative z-10 text-white/90 text-lg md:text-xl">
        Entre em contato comigo através das redes abaixo:
      </p>

      {/* Botões sociais no estilo Hero */}
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
          <Github size={28} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/pedro-henrique-dos-santos-araujo-364103283"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition shadow-lg"
        >
          <Linkedin size={28} />
        </motion.a>
        <motion.a
          href="mailto:phsa2004@gmail.com"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition shadow-lg"
        >
          <Mail size={28} />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
