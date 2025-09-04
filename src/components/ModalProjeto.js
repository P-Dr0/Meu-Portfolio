// src/components/ModalProjeto.js
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function ModalProjeto({ projeto, setProjetoSelecionado }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setProjetoSelecionado(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setProjetoSelecionado]);

  return (
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
        <h2 className="text-2xl font-bold mb-4">{projeto.titulo}</h2>
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          className="rounded-lg mb-4"
        />
        <p>{projeto.descricao}</p>
        <button
          onClick={() => setProjetoSelecionado(null)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Fechar
        </button>
      </motion.div>
    </motion.div>
  );
}
