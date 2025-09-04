// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";

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

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-10">Habilidades</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
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
  );
}
