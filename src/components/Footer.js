// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-center py-6 shadow-inner">
      <p>© {new Date().getFullYear()} - Desenvolvido por Pedro Santos</p>
    </footer>
  );
}
