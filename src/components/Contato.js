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
      className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    >
      <h3 className="text-3xl font-semibold mb-6">Contato</h3>
      <p className="mb-6">Entre em contato comigo através das redes abaixo:</p>
      <div className="flex justify-center gap-6 text-2xl">
        <motion.a
          href="https://github.com/P-Dr0"
          target="_blank"
          rel="noreferrer"
          {...linkAnim}
        >
          <Github />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/pedro-henrique-dos-santos-araujo-364103283"
          target="_blank"
          rel="noreferrer"
          {...linkAnim}
        >
          <Linkedin />
        </motion.a>
        <motion.a href="mailto:phsa2004@gmail.com" {...linkAnim}>
          <Mail />
        </motion.a>
      </div>
    </motion.section>
  );
}
