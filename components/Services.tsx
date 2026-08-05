"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaLayerGroup,
  FaServer,
} from "react-icons/fa";
const services = [
  {
    icon: <FaCode size={40} className="text-cyan-400" />,
    title: "Frontend Development",
    description:
      "Building fast, responsive and modern user interfaces using React.js, Next.js and Tailwind CSS.",
  },
  {
    icon: <FaLayerGroup size={40} className="text-cyan-400" />,
    title: "Full Stack Development",
    description:
      "Developing complete MERN stack web applications with secure authentication, scalable backend and clean architecture.",
  },
  {
    icon: <FaServer size={40} className="text-cyan-400" />,
    title: "Backend Development",
    description:
      "Creating secure REST APIs, authentication systems and database-driven applications using Node.js, Express.js and MongoDB.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 section-title mt-4">
            Services
          </p>
<p className="mt-4 text-sm md:text-base font-extrabold uppercase tracking-[6px] text-white">
  WHAT I DO?
</p>
          

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            I create high-quality web applications from frontend to backend,
            focusing on performance, responsiveness, and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}