// src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

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
    link: "https://github.com/P-Dr0/portfolio-react",
    tags: ["React", "TailwindCSS"],
    imagem: "/img/portfolio-react.png",
  },
  {
    id: 2,
    titulo: "E-commerce Node.js",
    descricao: "Loja online com backend em Node.js e MongoDB.",
    link: "https://github.com/P-Dr0/api-node",
    tags: ["Node.js", "Express", "MongoDB"],
    imagem: "/img/e-commerce-node.png",
  },
  {
    id: 3,
    titulo: "Dashboard Next.js",
    descricao: "Painel administrativo com gráficos e autenticação.",
    link: "https://github.com/P-Dr0/dashboard-next",
    tags: ["Next.js", "Chart.js"],
    imagem: "/img/dashboard-next.png",
  },
  {
    id: 4,
    titulo: "Blog Pessoal",
    descricao: "Blog moderno com posts e comentários em React.",
    link: "https://github.com/P-Dr0/blog-react",
    tags: ["React", "TailwindCSS"],
    imagem: "/img/blog.png",
  },
  {
    id: 5,
    titulo: "Landing Page Startup",
    descricao: "Landing page responsiva para startup.",
    link: "https://github.com/P-Dr0/landing-page",
    tags: ["React", "TailwindCSS"],
    imagem: "/img/landing.png",
  },
];

export default function App() {
  const [filtro, setFiltro] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null); // apenas modal

  const projetosFiltrados =
    filtro === "Todos"
      ? projetos
      : projetos.filter((p) => p.tags.includes(filtro));

  const linkAnim = {
    hover: { scale: 1.2, color: "#2563eb" },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        {/* Header */}
        <header className="p-6 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center sticky top-0 z-50">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl font-bold cursor-pointer"
          >
            Pedro Santos
          </motion.h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-4">
            {["sobre", "projetos", "hospedagem", "contato"].map((sec, i) => (
              <motion.a
                key={i}
                href={`#${sec}`}
                {...linkAnim}
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile nav toggle */}
            <button
              className="md:hidden text-gray-800 dark:text-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Dark mode toggle animado */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
              whileTap={{ scale: 0.9, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {darkMode ? "☀️" : "🌙"}
            </motion.button>
          </div>
        </header>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="flex flex-col items-center gap-4 bg-white dark:bg-gray-800 py-4 md:hidden shadow-md">
            {["sobre", "projetos", "hospedagem", "contato"].map((sec, i) => (
              <a
                key={i}
                href={`#${sec}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </nav>
        )}

        {/* Hero */}
        <motion.section
          className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Olá, eu sou Pedro Santos
          </motion.h2>
          <motion.p
            className="text-xl max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Desenvolvedor Frontend criando experiências modernas e responsivas.
          </motion.p>
        </motion.section>

        {/* Projetos */}
        <section
          id="projetos"
          className="bg-gray-200 dark:bg-gray-800 py-16 px-6"
        >
          <h3 className="text-3xl font-semibold mb-6 text-center">Projetos</h3>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {tecnologias.map((tech, i) => (
              <motion.button
                key={i}
                onClick={() => setFiltro(tech)}
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

        {/* Modal de projeto */}
        {projetoSelecionado && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-lg w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {projetoSelecionado.titulo}
              </h2>
              <img
                src={projetoSelecionado.imagem}
                alt={projetoSelecionado.titulo}
                className="rounded-lg mb-4"
              />
              <p>{projetoSelecionado.descricao}</p>
              <a
                href={projetoSelecionado.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline block mt-4"
              >
                Ver no GitHub
              </a>
              <button
                onClick={() => setProjetoSelecionado(null)}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
