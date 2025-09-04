// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projetos from "./components/Projetos";
import ModalProjeto from "./components/ModalProjeto";
import Hospedagem from "./components/Hospedagem";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  // Dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
    else setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Google Analytics
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX");

    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Sobre />
        <Timeline />
        <Skills />
        <Projetos setProjetoSelecionado={setProjetoSelecionado} />
        {projetoSelecionado && (
          <ModalProjeto
            projeto={projetoSelecionado}
            setProjetoSelecionado={setProjetoSelecionado}
          />
        )}
        <Hospedagem />
        <Contato />
        <Footer />
      </div>
    </div>
  );
}
