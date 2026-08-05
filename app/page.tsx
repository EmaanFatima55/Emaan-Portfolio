import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
{/*import TechStack from "@/components/TechStack";*/}
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
{/*import TsParticleBackground from "@/components/TsParticleBackground";*/}
{/*import GlowBackground from "@/components/GlowBackground";*/}
import CanvasParticles from "@/components/CanvasParticles";
export default function Home() {
  return (
    <>
      {/*<TsParticleBackground />*/}
      <CanvasParticles />
      {/*<GlowBackground />*/}
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      {/*<TechStack />*/}
      <Contact />
      <Footer />
    </>
  );
}