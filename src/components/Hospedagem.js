// src/components/Hospedagem.js
import React from "react";
import { motion } from "framer-motion";

export default function Hospedagem() {
  return (
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
        A hospedagem garante que o site esteja sempre online, enquanto o domínio
        é o endereço único que permite que qualquer pessoa acesse seu conteúdo.
        Algumas das principais plataformas de hospedagem são{" "}
        <strong>HostGator</strong>, <strong>BlueHost</strong>,{" "}
        <strong>Locaweb</strong> e <strong>Hostinger</strong>. Essas empresas
        oferecem diferentes tipos de hospedagem, desde planos mais simples e
        acessíveis, para sites pequenos e blogs, até planos mais robustos para
        sites com grande tráfego ou e-commerces.
      </p>

      <p className="mb-4">
        O registro do domínio deve ser feito através de plataformas de registro,{" "}
        <strong>HostGator</strong> e <strong>BlueHost</strong>. Elas oferecem
        hospedagem compartilhada, que é mais econômica e suficiente para sites
        com baixo tráfego. Se o site crescer ou precisar de mais desempenho,
        opções como <strong>VPS</strong> (Servidor Virtual Privado), disponíveis
        em plataformas como <strong>Hostinger</strong> e{" "}
        <strong>DigitalOcean</strong>, oferecem mais recursos dedicados, com
        maior controle e performance.
      </p>

      <p className="mb-4">
        Se o site exige escalabilidade, como em lojas online ou sites com muitos
        visitantes, plataformas como <strong>AWS</strong> (Amazon Web Services)
        e <strong>Google Cloud</strong> oferecem hospedagem em nuvem, permitindo
        que aumente ou diminua os recursos conforme a demanda.
      </p>

      <p>
        Além disso, é essencial garantir a segurança do site com um certificado{" "}
        <strong>SSL</strong>, que criptografa as informações trocadas entre o
        visitante e o servidor.
      </p>
    </motion.section>
  );
}
