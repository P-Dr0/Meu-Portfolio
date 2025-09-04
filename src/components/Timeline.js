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
  { year: "2022", title: "Início Faculdade", desc: "Ciência da Computação." },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 px-6 bg-gray-200 dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-10">
        Experiência & Formação
      </h3>
      <div className="relative border-l-4 border-blue-600 dark:border-blue-400 max-w-3xl mx-auto">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 top-1" />
            <h4 className="text-xl font-bold">
              {item.year} - {item.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
