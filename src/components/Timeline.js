// src/components/Timeline.js
import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Desenvolvedor Frontend",
    desc: "Projeto de portfólio e dashboards.",
  },
  {
    year: "2023",
    title: "Formação React",
    desc: "Cursos de React e TailwindCSS.",
  },
  { year: "2022", title: "Início Faculdade", desc: "Engenharia de Software." },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 px-6 bg-gray-200 dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-10">
        Experiência & Formação
      </h3>

      <div className="relative max-w-5xl mx-auto">
        {/* Linha vertical central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-300 dark:border-blue-400"></div>

        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.8,
              }}
              className="mb-10 flex justify-center w-full"
            >
              <div
                className={`flex flex-col md:flex-row items-center w-full md:w-auto ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Ponto azul */}
                <div className="flex justify-center md:justify-start w-full md:w-auto">
                  <div className="w-6 h-6 bg-blue-400/70 dark:bg-blue-500 rounded-full shadow-md border border-blue-300 dark:border-blue-400"></div>
                </div>

                {/* Card de conteúdo */}
                <div className="mt-4 md:mt-0 md:mx-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/40 w-full md:w-3/4">
                  <h4 className="text-xl font-bold">
                    {item.year} - {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
