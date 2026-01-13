import { motion } from "framer-motion";
import React from "react";
import profilePic from "../assets/p.jpg"; // ensure this file exists

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Speciality", value: "Full Stack" },
    { label: "Focus", value: "DevOps" },
    { label: "Certifications", value: "AWS, Azure" },
  ];

  const glows = [
    "-top-10 -left-10 w-72 h-72 opacity-20 blur-[80px]",
    "bottom-0 right-10 w-96 h-96 opacity-15 blur-[100px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 blur-[70px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Glow Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={profilePic}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent 
            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] mb-4">
              Heshan Dilhara
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I'm Heshan Dilhara, a passionate Full Stack Developer with expertise in building dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on creating seamless user experiences and efficient server-side solutions. Let's connect and build something amazing together!
            </p>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border-white/10 bg-white/5 px-6 py-4 min-w-[160px] text-center flex flex-col items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="mt-1 text-xl sm:text-2xl font-bold text-white">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-6 justify-center md:justify-start text-lg">
              <a
                href="#projects"
                className="inline-flex rounded-2xl items-center justify-center bg-white text-black font-semibold px-5 py-3 hover:bg-green-300 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl font-medium text-lg text-white border border-white hover:bg-green-200 hover:text-black transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div>
          <h3 className="text-2xl font-bold mb-2">About Me</h3>
          <p className="text-gray-300 text-base sm:text-lg">
            I am a dedicated Full Stack Developer with a passion for creating dynamic and responsive web applications. My expertise spans both front-end and back-end technologies, allowing me to build seamless user experiences and efficient server-side solutions. I thrive on collaboration and innovation, always eager to take on new challenges and contribute to impactful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
