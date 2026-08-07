"use client";

import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const sections = links
    .map((link) => document.getElementById(link.id))
    .filter(Boolean) as HTMLElement[];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= sections[i].offsetTop) {
        const id = sections[i].id;

        // Only update when section actually changes
        setActiveSection((prev) => (prev === id ? prev : id));
        break;
      }
    }
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050B14]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

        {/* Logo */}
        <Link href="#home">
          <h1 className="text-2xl font-bold cursor-pointer">
            <span className="text-cyan-400"></span>
            Emaan
            <span className="text-cyan-400">Dev.</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`relative pb-2 transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-[2px] h-[2px] bg-cyan-400 transition-all duration-300 ${
                    activeSection === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume */}
        <a
          href="/Emaan_Fatima_CV.pdf"
          download
          className="btn-outline flex items-center gap-2 px-6 py-2.5"
        >
          Download CV
          <HiOutlineDownload size={18} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#09121F] px-6 py-6 space-y-5">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block ${
                activeSection === link.id
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}