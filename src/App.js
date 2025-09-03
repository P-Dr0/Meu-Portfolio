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
          <motion.div className="mt-6 flex gap-6">
            <motion.a
              href="https://github.com/P-Dr0"
              target="_blank"
              rel="noreferrer"
              {...linkAnim}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pedro-henrique-dos-santos-araujo-364103283"
              target="_blank"
              rel="noreferrer"
              {...linkAnim}
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a href="mailto:phsa2004@gmail.com" {...linkAnim}>
              <Mail size={32} />
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Sobre */}
        <motion.section
          id="sobre"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto py-16 px-6"
        >
          <h3 className="text-4xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">
            Sobre Mim
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <motion.img
              src="/img/perfil.png"
              alt="Pedro Santos"
              loading="lazy"
              className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="flex-1 space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Olá! Sou{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Pedro Santos
                </span>
                , desenvolvedor Frontend apaixonado por criar interfaces
                modernas e responsivas usando{" "}
                <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">TailwindCSS</span> e tecnologias
                modernas.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Tenho experiência em construção de{" "}
                <span className="font-semibold">
                  portfólios, dashboards e APIs
                </span>
                , sempre focando na experiência do usuário e na performance do
                site.
              </p>
            </div>
          </div>
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
              <button
                onClick={() => setProjetoSelecionado(null)}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Hospedagem */}
        <motion.section
          id="hospedagem"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto py-16 px-6"
        >
          <h3 className="text-3xl font-semibold mb-6">Hospedagem e Domínio</h3>
          <p className="mb-4">
            A hospedagem garante que seu site esteja sempre online, enquanto o
            domínio é o endereço único que permite que qualquer pessoa acesse
            seu conteúdo. Plataformas como <strong>Vercel</strong> e{" "}
            <strong>Netlify</strong> oferecem deploy contínuo integrado com
            GitHub, otimizações automáticas e SSL incluso.
          </p>
          <p>
            Registrar um domínio personalizado transmite profissionalismo e
            facilita o compartilhamento do portfólio com empresas e clientes.
          </p>
        </motion.section>

        {/* Contato */}
        <motion.section
          id="contato"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
        >
          <h3 className="text-3xl font-semibold mb-6">Contato</h3>
          <p className="mb-6">
            Entre em contato comigo através das redes abaixo:
          </p>
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

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 text-center py-6 shadow-inner">
          <p>© {new Date().getFullYear()} - Desenvolvido por Pedro Santos</p>
        </footer>
      </div>
    </div>
  );
}
