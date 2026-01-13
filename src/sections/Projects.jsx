import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.PNG";
import img3 from "../assets/img3.JPG";
import img4 from "../assets/img4.JPG";
import img5 from "../assets/img5.JPG";
import img6 from "../assets/img6.JPG";

const glows = [
  "-top-10 -left-10 w-72 h-72 opacity-20 blur-[80px]",
  "bottom-0 right-10 w-96 h-96 opacity-15 blur-[100px]",
];

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    img: img1,
  },
  {
    title: "Ceylon Journey",
    description: "Travaling website with vite, MongoDB, and React.",
    tech: ["vite", "MongoDB", "React"],
    github: "https://github.com/Heshan01/ceylon-navigator",
    live: "https://ceylon-navigator.vercel.app/",
    img: img2,
  },
  {
    title: "Chat App",
    description: "Real-time chat application with Socket.io and React.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "#",
    live: "#",
    img: img3,
  },
  {
    title: "Blog Platform",
    description: "CMS platform for creating and sharing blogs.",
    tech: ["Next.js", "Tailwind", "Sanity.io"],
    github: "#",
    live: "#",
    img: img4,
  },
  {
    title: "Task Manager",
    description: "Task management app with Firebase and real-time updates.",
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    img: img5,
  },
  {
    title: "Weather App",
    description: "Beautiful weather app showing real-time data.",
    tech: ["React", "API", "Tailwind"],
    github: "#",
    live: "#",
    img: img6,
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="w-full min-h-screen relative bg-black text-white overflow-x-hidden py-16">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] mb-12 text-center">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative bg-[#111] rounded-2xl border border-white/10 overflow-hidden group flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2]/30 via-[#00bf8f]/20 to-[#302b63]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl pointer-events-none"></div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-r text-white border border-white hover:bg-white hover:text-black transition-all px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto text-xl text-[#1cd8d2]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-125 transition-transform duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-125 transition-transform duration-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View All Projects Button */}
          <div className="col-span-full flex justify-center mt-12">
            <a
              href="https://github.com/Heshan01?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-semibold text-lg rounded-xl bg-gradient-to-r border bg-white text-black border-white hover:bg-white hover:text-black transition-all"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
