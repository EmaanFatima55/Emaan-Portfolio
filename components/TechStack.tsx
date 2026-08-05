"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={45} className="text-blue-400" /> },
  { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={45} /> },
  { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
  { name: "Express", icon: <SiExpress size={45} /> },
  { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt size={45} className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub size={45} /> },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-widest text-cyan-400 font-semibold">
            Tech Stack
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technologies I Use
          </h2>

          <p className="text-slate-400 mt-5">
            Modern technologies I use to build responsive and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-16">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * .05 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:scale-105 duration-300"
            >
              <div className="flex justify-center">
                {tech.icon}
              </div>

              <p className="mt-4 font-medium">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}