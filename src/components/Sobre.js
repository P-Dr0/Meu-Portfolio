// src/components/Sobre.js
import React from "react";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto py-20 px-6 relative"
    >
      <h3 className="text-4xl font-bold mb-12 text-center text-blue-300 drop-shadow-md">
        Sobre Mim
      </h3>
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 shadow-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/40">
        <motion.img
          src="/img/perfil.png"
          alt="Pedro Santos"
          loading="lazy"
          className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-blue-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="flex-1 space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-100">
          <p>
            Olá! Sou{" "}
            <span className="font-semibold text-blue-300">Pedro Santos</span>,
            desenvolvedor Frontend apaixonado por criar interfaces modernas e
            responsivas usando{" "}
            <span className="font-semibold text-blue-300">React</span>,{" "}
            <span className="font-semibold text-blue-300">TailwindCSS</span> e
            tecnologias atuais.
          </p>
          <p>
            Tenho experiência em construção de{" "}
            <span className="font-semibold text-blue-300">
              portfólios, dashboards e APIs
            </span>
            , sempre focando na{" "}
            <span className="font-semibold text-blue-300">
              experiência do usuário
            </span>{" "}
            e na{" "}
            <span className="font-semibold text-blue-300">performance</span> do
            site.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
