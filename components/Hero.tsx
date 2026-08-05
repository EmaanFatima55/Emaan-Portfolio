"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-30 pb-12 relative"
    >
      <div className="max-w-4xl mx-auto mt-10">
<motion.div
  className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ${
  showArrow
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4 pointer-events-none"
}`}
>
  <a href="#about">
    <ChevronDown
      size={28}
      strokeWidth={1.5}
      className="text-cyan-400 animate-bounce"
    />
  </a>
</motion.div>
      <div className="absolute inset-0 overflow-hidden -z-10">

</div>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-400"
        >
          Full Stack MERN Developer
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-7 text-5xl md:text-4xl lg:text-7xl font-extrabold leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-cyan-400">
            Emaan Fatima
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6 text-2xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
        >
          I build modern web applications that are{" "}
          <br />
          
          <span className="text-cyan-400">Fast</span>,{" "}
          <span className="text-cyan-400">Scalable</span> &{" "}
          <span className="text-cyan-400">Impactful</span>.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-slate-400 leading-9"
        >
          Passionate about creating seamless digital experiences
          with clean code, intuitive design and modern technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex justify-center gap-5 flex-wrap"
        >
          <a 
          href="#projects"
          className="btn-primary flex items-center gap-2 px-7 py-3.5">
            View My Work
            <ArrowRight size={18} />
          </a>

          <a 
          href="#contact"
          className="btn-outline flex items-center gap-2 px-7 py-3.5">
            Get In Touch
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}