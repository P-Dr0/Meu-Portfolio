// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="relative text-center py-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-t border-white/20 dark:border-gray-700/40">
      <p className="text-gray-900 dark:text-gray-100 font-semibold drop-shadow-sm">
        © {new Date().getFullYear()} - Desenvolvido por Pedro Santos
      </p>
    </footer>
  );
}
