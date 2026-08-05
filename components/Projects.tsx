"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with Next.js, Tailwind CSS and Framer Motion featuring responsive design, smooth animations and clean UI.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "#",
  },
  {
    number: "02",
    title: "To-Do List Web App",
    description:
      "A feature-rich task management web app with task tracking, progress statistics, Light & Dark themes, motivational quotes and animated UI effects.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://github.com/EmaanFatima55/Todo-list-web-app",
  },
  {
    number: "03",
    title: "E-Commerce Website",
    description:
      "A full-stack MERN e-commerce application with authentication, shopping cart, product management and responsive design.",
    tech: ["React.js", "Node.js", "MongoDB"],
    status: "In Progress",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
         

          <h2 className="mt-3 text-5xl md:text-6xl font-bold text-cyan-400">
            Projects
          </h2>
          
           <p className="mt-4 text-sm md:text-base font-medium uppercase tracking-[6px] text-white">
            My Work
          </p>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my skills in building modern,
            responsive and scalable web applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group w-full min-h-[380px] flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0B1220] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]"
            >
              {/* Top */}

              <div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 text-sm font-semibold">
                    {project.number}
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="text-slate-500 group-hover:text-cyan-400 transition"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-5 text-slate-400 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-7">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom */}

              <div className="border-t border-white/10 mt-10 pt-6">
  {project.status ? (
    <div className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm font-semibold">
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
      {project.status}
    </div>
  ) : (
    <a
      href={project.live}
      target="_blank"
      className="btn-primary w-full flex items-center justify-center py-3"
    >
      Live Demo
    </a>
  )}
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}