// src/App.js
import React, { useState, useEffect, Suspense, lazy } from "react";
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

const skills = [
  { name: "React", level: 90, icon: "/icons/react.svg" },
  { name: "TailwindCSS", level: 85, icon: "/icons/tailwind.svg" },
  { name: "Node.js", level: 80, icon: "/icons/node.svg" },
  { name: "Next.js", level: 75, icon: "/icons/nextjs.svg" },
  { name: "MongoDB", level: 70, icon: "/icons/mongo.svg" },
  { name: "JavaScript", level: 95, icon: "/icons/javascript.svg" },
  { name: "TypeScript", level: 80, icon: "/icons/typescript.svg" },
  { name: "Git", level: 85, icon: "/icons/git.svg" },
  { name: "Docker", level: 65, icon: "/icons/docker.svg" },
];

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

  // Persistência do tema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        {/* Header */}
        <header className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
            {/* Logo */}
            <motion.h1
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl font-extrabold cursor-pointer"
            >
              Pedro{" "}
              <span className="text-blue-600 dark:text-blue-400">Santos</span>
            </motion.h1>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6">
              {[
                "sobre",
                "timeline",
                "skills",
                "projetos",
                "hospedagem",
                "contato",
              ].map((sec, i) => (
                <motion.a
                  key={i}
                  href={`#${sec}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 rounded-full text-sm font-medium transition-colors 
              hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </motion.a>
              ))}
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-3">
              {/* Mobile nav toggle */}
              <button
                className="md:hidden text-gray-800 dark:text-gray-100"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              {/* Dark mode toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                whileTap={{ scale: 0.9, rotate: 10 }}
              >
                {darkMode ? (
                  <span className="text-yellow-400">☀️</span>
                ) : (
                  <span className="text-blue-500">🌙</span>
                )}
              </motion.button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4 py-6 md:hidden
               backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200 dark:border-gray-700"
          >
            {[
              "sobre",
              "timeline",
              "skills",
              "projetos",
              "hospedagem",
              "contato",
            ].map((sec, i) => (
              <motion.a
                key={i}
                href={`#${sec}`}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors 
                     hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </motion.a>
            ))}
          </motion.nav>
        )}

        {/* Hero */}
        <motion.section
          className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden
             bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Efeito de fundo com blur e shapes */}
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 -right-24 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-6 relative z-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Olá, eu sou{" "}
            <span className="text-blue-300 drop-shadow-md">Pedro Santos</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-2xl max-w-2xl relative z-10 text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Desenvolvedor Frontend apaixonado por criar{" "}
            <span className="font-semibold text-blue-300">
              experiências modernas
            </span>{" "}
            e <span className="font-semibold text-blue-300">responsivas</span>.
          </motion.p>

          {/* Social links */}
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

        {/* 🔥 Seção Sobre Mim */}
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

          <div
            className="flex flex-col md:flex-row gap-10 items-center md:items-start 
               backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 
               shadow-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/40"
          >
            {/* Foto */}
            <motion.img
              src="/img/perfil.png"
              alt="Pedro Santos"
              loading="lazy"
              className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-blue-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Texto */}
            <div className="flex-1 space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-100">
              <p>
                Olá! Sou{" "}
                <span className="font-semibold text-blue-300">
                  Pedro Santos
                </span>
                , desenvolvedor Frontend apaixonado por criar interfaces
                modernas e responsivas usando{" "}
                <span className="font-semibold text-blue-300">React</span>,{" "}
                <span className="font-semibold text-blue-300">TailwindCSS</span>{" "}
                e tecnologias atuais.
              </p>

              <p>
                Tenho experiência em construção de{" "}
                <span className="font-semibold text-blue-300">
                  portfólios, dashboards e APIs
                </span>
                , sempre focando na{" "}
                <span className="font-semibold text-blue-300">
                  experiência do usuário{" "}
                </span>
                e na{" "}
                <span className="font-semibold text-blue-300">performance</span>{" "}
                do site.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 🔥 Seção Timeline */}
        <section
          id="timeline"
          className="py-16 px-6 bg-gray-200 dark:bg-gray-800"
        >
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

        {/* 🔥 Seção Skills */}
        <section id="skills" className="py-16 px-6 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">Habilidades</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mb-2"
                />
                <p className="font-semibold">{skill.name}</p>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

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
            A hospedagem garante que o site esteja sempre online, enquanto o
            domínio é o endereço único que permite que qualquer pessoa acesse
            seu conteúdo. Algumas das principais plataformas de hospedagem são{" "}
            <strong>HostGator</strong> , <strong>BlueHost</strong>,{" "}
            <strong>Locaweb</strong> e <strong>Hostinger</strong>. Essas
            empresas oferecem diferentes tipos de hospedagem, desde planos mais
            simples e acessíveis, para sites pequenos e blogs, até planos mais
            robustos para sites com grande tráfego ou e-commerces.
          </p>

          <p className="mb-4">
            O registro do domínio deve ser feito através de plataformas de
            registro, <strong>HostGator</strong> e <strong>BlueHost</strong>, .
            Elas oferecem hospedagem compartilhada, que é mais econômica e
            suficiente para sites com baixo tráfego. Se o site crescer ou
            precisar de mais desempenho, opções como <strong>VPS</strong>{" "}
            (Servidor Virtual Privado), disponíveis em plataformas como{" "}
            <strong>Hostinger</strong> e <strong>DigitalOcean</strong> oferecem
            mais recursos dedicados, com maior controle e performance.
          </p>

          <p className="mb-4">
            Se o site exige escalabilidade, como em lojas online ou sites com
            muitos visitantes, plataformas como <strong>AWS</strong> (Amazon Web
            Services) e <strong>Google Cloud</strong> oferecem hospedagem em
            nuvem, permitindo que aumente ou diminua os recursos conforme a
            demanda.
          </p>

          <p>
            Além disso, é essencial garantir a segurança do site com um
            certificado <strong>SSL</strong>, que criptografa as informações
            trocadas entre o visitante e o servidor.
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
      {/* 🔥 Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}
      </script>
    </div>
  );
}
