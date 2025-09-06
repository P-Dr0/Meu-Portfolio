import React, { useRef } from "react";

export default function Footer() {
  const audioRef = useRef(null);

  function handleLogoClick() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // reinicia o som caso já esteja tocando
      audioRef.current.play();
    }
  }

  return (
    <footer
      className="relative text-center py-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-t border-white/20 dark:border-gray-700/40"
      aria-label="Rodapé"
    >
      {/* Copyright + logo */}
      <div className="flex justify-center items-center gap-2">
        <p className="text-gray-900 dark:text-gray-100 font-semibold drop-shadow-sm">
          © {new Date().getFullYear()} - Desenvolvido por Pedro Santos
        </p>
        <img
          src="/favicon.ico"
          alt="Logo"
          className="w-5 h-5 rounded-full shadow-sm cursor-pointer"
          onClick={handleLogoClick}
        />
        {/* Áudio do Mengooo */}
        <audio ref={audioRef} src="/mengo-sound.mp3" preload="auto" />
      </div>

      {/* Créditos das tecnologias + frase de assinatura com divisão */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-2">
        {/* Créditos das tecnologias */}
        <p className="text-sm text-gray-700 dark:text-gray-300 drop-shadow-sm">
          Desenvolvido com React, TailwindCSS e Framer Motion
        </p>

        {/* Divisão */}
        <span className="hidden sm:inline-block h-4 border-l border-gray-400 dark:border-gray-600"></span>
        <span className="sm:hidden block w-full border-t border-gray-400 dark:border-gray-600 my-2"></span>

        {/* Frase de assinatura */}
        <p className="text-sm text-gray-700 dark:text-gray-300 drop-shadow-sm">
          Criando experiências digitais modernas e responsivas.
        </p>
      </div>
    </footer>
  );
}



