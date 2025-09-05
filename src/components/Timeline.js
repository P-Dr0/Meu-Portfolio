// src/components/Timeline.js
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { GraduationCap, Laptop } from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "Desenvolvedor Frontend",
    desc: "Projeto de portfólio e dashboards.",
    type: "work",
  },
  {
    year: "2024",
    title: "Formação React",
    desc: "Cursos de React e TailwindCSS.",
    type: "study",
  },
  {
    year: "2023",
    title: "Início Faculdade",
    desc: "Engenharia de Software.",
    type: "study",
  },
];

function getIcon(type) {
  switch (type) {
    case "work":
      return <Laptop className="w-4 h-4 text-white" />;
    case "study":
      return <GraduationCap className="w-4 h-4 text-white" />;
    default:
      return null;
  }
}

function TimelineItem({ year, title, desc, type }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.6 }}
      className="relative flex flex-col items-center gap-4 mb-12"
      aria-label={`${year} - ${title}`}
    >
      {/* Ponto com ícone */}
      <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full shadow-md border border-blue-300 dark:border-blue-500">
        {getIcon(type)}
      </div>

      {/* Card centralizado */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/30 dark:border-gray-700/40 w-full max-w-md text-center"
      >
        <h4 className="text-lg font-semibold mb-1">
          <span className="text-blue-600 dark:text-blue-400">{year}</span> —{" "}
          {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{desc}</p>
      </motion.div>
    </motion.li>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100px", "end end"],
  });

  return (
    <section
      id="timeline"
      className="py-16 px-6 bg-gray-200 dark:bg-gray-800"
      aria-label="Linha do tempo de experiência e formação"
    >
      <h3 className="text-3xl font-bold text-center mb-10">
        Experiência & Formação
      </h3>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Linha fixa mais sutil */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-blue-300 dark:bg-blue-500 rounded"></div>

        {/* Linha animada mais sutil */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 origin-top bg-blue-500 dark:bg-blue-400 rounded"
        />

        <ol className="relative flex flex-col items-center pl-0">
          {timeline.map((item, i) => (
            <TimelineItem
              key={i}
              year={item.year}
              title={item.title}
              desc={item.desc}
              type={item.type}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
