// src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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
  const projetosFiltrados =
    filtro === "Todos"
      ? projetos
      : projetos.filter((p) => p.tags.includes(filtro));
  const linkAnim = {
    hover: { scale: 1.2, color: "#2563eb" },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="p-6 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl font-bold cursor-pointer"
        >
          Pedro Santos
        </motion.h1>
        <nav className="flex gap-4">
          {["sobre", "projetos", "hospedagem", "contato"].map((sec, i) => (
            <motion.a
              key={i}
              href={`#${sec}`}
              {...linkAnim}
              className="hover:text-blue-600 cursor-pointer"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </motion.a>
          ))}
        </nav>
      </header>

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
            href="https://linkedin.com/in/P-Dr0"
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
        <h3 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Sobre Mim
        </h3>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <motion.img
            src="/img/perfil.png"
            alt="Pedro Santos"
            className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-blue-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="flex-1 space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Olá! Sou{" "}
              <span className="font-semibold text-blue-600">Pedro Santos</span>,
              desenvolvedor Frontend apaixonado por criar interfaces modernas e
              responsivas usando <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">TailwindCSS</span> e tecnologias
              modernas.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Tenho experiência em construção de{" "}
              <span className="font-semibold">
                portfólios, dashboards e APIs
              </span>
              , sempre focando na experiência do usuário e na performance do
              site.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {["React", "TailwindCSS", "Node.js", "Next.js", "MongoDB"].map(
                (tech, i) => (
                  <motion.span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#2563eb",
                      color: "#fff",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
            <div className="mt-6 flex gap-6">
              <motion.a
                href="mailto:phsa2004@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
              >
                Enviar Email
              </motion.a>
              <motion.a
                href="https://github.com/P-Dr0"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
              >
                GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projetos */}
      <section id="projetos" className="bg-gray-200 py-16 px-6">
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
                  : "bg-white text-gray-800"
              } shadow-md hover:bg-blue-500 hover:text-white transition`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projetosFiltrados.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-md p-4"
            >
              <img
                src={proj.imagem}
                alt={proj.titulo}
                className="rounded-lg mb-4 w-full h-48 object-cover shadow-sm"
              />
              <h4 className="font-bold mb-2 text-xl">{proj.titulo}</h4>
              <p className="text-gray-600 mb-4">{proj.descricao}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, color: "#2563eb" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-blue-600 hover:underline"
              ></motion.a>
            </motion.div>
          ))}
        </div>
      </section>

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
          domínio é o endereço único que permite que qualquer pessoa acesse seu
          conteúdo. Plataformas como <strong>Vercel</strong> e{" "}
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
        className="max-w-4xl mx-auto py-16 px-6 text-center"
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
            href="www.linkedin.com/in/pedro-santos-364103283"
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
      <footer className="bg-white text-center py-6 shadow-inner">
        <p>© {new Date().getFullYear()} - Desenvolvido por Pedro Santos</p>
      </footer>
    </div>
  );
}
