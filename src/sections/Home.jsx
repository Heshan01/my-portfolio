import { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import avator from "../assets/avator.png";

const social = [
  { Icon: FaFacebook, label: "Facebook", link: "https://www.facebook.com/HeshanD.Samarasinghe?" },
  { Icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/heshan-dilhara-609049396?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { Icon: FaGithub, label: "GitHub", link: "https://github.com/Heshan01" },
  { Icon: FaYoutube, label: "YouTube", link: "https://www.youtube.com/@HDMuzic-hd" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(
    () => [
      "DevOps Engineer",
      "Youtuber Creator",
      "Automation Specialist",
      "Cloud Infrastructure Enthusiast",
      "CI/CD Pipeline Builder",
      "SRE (Site Reliability Engineering) Learner",
    ],
    []
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden z-0">
      {/* PARTICLES */}
      <ParticlesBackground className="absolute inset-0 -z-10" />

      {/* GRADIENT BACKGROUNDS */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-[#302b63] via-[#00bf2f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[200px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-[#302b63] via-[#00bf2f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[200px] animate-pulse delay-500"></div>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            {/* TYPING TEXT */}
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle" style={{ height: "1em" }}></span>
            </motion.div>

            {/* My NAME */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I'm <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Heshan Dilhara
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              As a student focusing on DevOps and Infrastructure as Code (IaC), I am passionate about building, deploying, and managing scalable applications in the cloud. I specialize in leveraging tools like Docker, Kubernetes, and Ansible to create efficient, resilient, and repeatable environments.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
              >
                View My Works
              </a>
              <a
                href="/Heshan_Dilhara_Profile.pdf"
                className="px-6 py-3 rounded-full font-medium text-lg text-white border border-white hover:bg-white hover:text-black transition-all"
              >
                My Resume
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {social.map(({ Icon, label, link }) => (
                <motion.a
                  href={link}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ 
          right: "10px", width: "min(22vw, 410px)", height: "min(40vh, 760px )", borderRadius: "50%",
          filter: "blur(38px)", opacity:0.32, 
          background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)",
          }}
          
          />
          <motion.img src={avator} alt="Heshan Dilhara"
          className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
          style={{
            right : "-150px", width: "min(45vw, 780px)", maxHeight:"90vh"
          }}

          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          
          
          />
        </div>
      </div>
    </section>
  );
}
