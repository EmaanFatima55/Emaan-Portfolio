"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "2+",
    title: "Year Learning Journey",
  },
  {
    number: "2+",
    title: "Projects Completed",
  },
  {
    number: "5th",
    title: "Semester BSCS",
  },
  {
    number: "100%",
    title: "Learning Mindset",
  },
];

const techStack = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Git",
  "HTML",
  "CSS",
  "GitHub"
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 section-title mt-4">
            About Me
          </p>
          <p className="mt-4 text-sm md:text-base font-extrabold uppercase tracking-[6px] text-white">
  WHO I AM?
</p>

          <p className="mt-8 text-lg leading-9 text-slate-400">
            I'm <span className="text-white font-medium">Emaan Fatima</span>,
            a passionate Full Stack MERN Developer focused on building modern,
            scalable and user-friendly web applications.
           

            <br />
  <span className="text-white font-medium">BS Computer Science — Currently Studying</span>

          </p>

          {/* Tech Stack */}

          <div className="mt-12">
            

            <div className="flex flex-wrap gap-3">
    {techStack.map((tech) => (
      <div
        key={tech}
        className="px-4 py-2 rounded-lg border border-slate-700 bg-[#0B1220] text-sm font-medium text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
      >
        {tech}
      </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl border border-slate-800 bg-[#0B1220]/70 backdrop-blur-md overflow-hidden">

            <div className="grid grid-cols-2">

              {stats.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    p-10 md:p-14 text-center transition-all duration-300
                    hover:bg-cyan-400/5
                    ${
                      index < 2
                        ? "border-b border-slate-800"
                        : ""
                    }
                    ${
                      index % 2 === 0
                        ? "border-r border-slate-800"
                        : ""
                    }
                  `}
                >
                  <h3 className="text-5xl md:text-6xl font-bold text-cyan-400">
                    {item.number}
                  </h3>

                  <p className="mt-4 text-slate-400">
                    {item.title}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}