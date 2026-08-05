"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
const [loading, setLoading] = useState(false);
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  setLoading(true);

  emailjs
    .sendForm(
      "service_krw7j1c",
      "template_i12unf7",
      form.current,
      "OgI9Q4ENrgvEv_mTH"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current?.reset();
      setLoading(false);
    })
    .catch((error) => {
  console.log("EmailJS Error:", error);

  alert(
    `Error: ${error.text || error.message || JSON.stringify(error)}`
  );

  setLoading(false);
});
};
  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">

<div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-cyan-400 leading-none">
  Contact
</h2>

<p className="mt-4 text-sm md:text-base font-extrabold uppercase tracking-[6px] text-white">
  LET'S WORK TOGETHER
</p>
     

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-lg">
              I'm currently available for freelance projects,
              internships and full-time opportunities.
              Feel free to contact me anytime.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                  <Mail className="text-cyan-400" size={20} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Email
                  </p>

                  <p className="text-white">
                    fatimaemaan5506@gmail.com
                  </p>
                </div>
              </div>

<div className="flex items-center gap-4">
  <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
    <Phone className="text-cyan-400" size={20} />
  </div>

  <div>
    <p className="text-slate-400 text-sm">
      Phone
    </p>

    <p className="text-white">
      +92 333 4435791
    </p>
  </div>
</div>


              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                  <MapPin className="text-cyan-400" size={20} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Location
                  </p>

                  <p className="text-white">
                    Pakistan
                  </p>
                </div>
                
              </div>

            </div>

            {/* Socials */}

            <div className="flex gap-4 mt-10">

              <a
  href="https://github.com/EmaanFatima55"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-50 w-12 h-12 rounded-xl border border-cyan-400/20 bg-[#101827] hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
>
  <FaGithub size={22} />
</a>

              <a
  href="https://www.linkedin.com/in/emaan-fatima-1ba698351"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-50 w-12 h-12 rounded-xl border border-cyan-400/20 bg-[#101827] hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
>
  <FaLinkedinIn size={20} />
</a>

<a
  href="https://wa.me/923334435791"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-xl border border-cyan-400/20 bg-[#101827] hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
>
  <FaWhatsapp size={20} />
</a>
            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-400/10 bg-[#0B1220]/80 backdrop-blur-xl p-8"
          >

            <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-6"
>

              <div>
                <label className="text-sm text-slate-400">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full mt-2 rounded-xl bg-[#111827] border border-slate-700 px-5 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 rounded-xl bg-[#111827] border border-slate-700 px-5 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full mt-2 rounded-xl bg-[#111827] border border-slate-700 px-5 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full mt-2 rounded-xl bg-[#111827] border border-slate-700 px-5 py-4 outline-none resize-none focus:border-cyan-400 transition"
                />
              </div>

              <button
  type="submit"
  disabled={loading}
  className="btn-primary flex items-center gap-2 px-8 py-4"
>
  {loading ? "Sending..." : "Send Message"}
  <Send size={18} />
</button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}