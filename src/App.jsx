import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./sections/About";
import Contact from "./sections/Contact";

import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";




export default function App(){
  return (
  <div className="relative gradient text-white">
    <div className="fixed top-0 left-0 w-full h-full gradient -z-20 pointer-events-none"></div>
    <CustomCursor />
    <ParticlesBackground />
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
  )
}