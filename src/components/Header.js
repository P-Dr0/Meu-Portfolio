// src/components/Header.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl font-extrabold cursor-pointer"
        >
          Pedro <span className="text-blue-600 dark:text-blue-400">Santos</span>
        </motion.h1>

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
              className="px-3 py-1 rounded-full text-sm font-medium transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-gray-800 dark:text-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-4 py-6 md:hidden backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200 dark:border-gray-700"
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
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
