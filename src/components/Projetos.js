// src/components/Projetos.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const tecnologias = [
  "Todos",
  "React",
  "TailwindCSS",
  "Node.js",
  "Next.js",
  "MongoDB",
  "Chart.js",
];

const projetos = [
  {
    id: 1,
    titulo: "Portfolio React",
    descricao: "Site de portfólio moderno com React e Tailwind.",
    tags: ["React", "TailwindCSS"],
    imagem: "/img/portfolio-react.png",
  },
  {
    id: 2,
    titulo: "E-commerce Node.js",
    descricao: "Loja online com backend em Node.js e MongoDB.",
    tags: ["Node.js", "Express", "MongoDB"],
    imagem: "/img/e-commerce-node.png",
  },
  {
    id: 3,
    titulo: "Dashboard Next.js",
    descricao: "Painel administrativo com gráficos e autenticação.",
    tags: ["Next.js", "Chart.js"],
    imagem: "/img/dashboard-next.png",
  },
  {
    id: 4,
    titulo: "Blog Pessoal",
    descricao: "Blog moderno com posts e comentários em React.",
    tags: ["React", "TailwindCSS"],
    imagem: "/img/blog.png",
  },
];

export default function Projetos({ setProjetoSelecionado }) {
  const [filtro, setFiltro] = useState("Todos");
  const projetosFiltrados =
    filtro === "Todos"
      ? projetos
      : projetos.filter((p) => p.tags.includes(filtro));

  return (
    <section id="projetos" className="bg-gray-200 dark:bg-gray-800 py-16 px-6">
      <h3 className="text-3xl font-semibold mb-6 text-center">Projetos</h3>

      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {tecnologias.map((tech, i) => (
          <motion.button
            key={i}
            onClick={() => setFiltro(tech)}
            layout
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-full ${
              filtro === tech
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            } shadow-md hover:bg-blue-500 hover:text-white transition`}
          >
            {tech}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projetosFiltrados.map((proj) => (
          <motion.div
            key={proj.id}
            onClick={() => setProjetoSelecionado(proj)}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 cursor-pointer"
          >
            <img
              src={proj.imagem}
              alt={proj.titulo}
              loading="lazy"
              className="rounded-lg mb-4 w-full h-48 object-cover shadow-sm"
            />
            <h4 className="font-bold mb-2 text-xl">{proj.titulo}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {proj.descricao}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
