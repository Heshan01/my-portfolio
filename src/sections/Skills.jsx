import { FaJava, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiPython, SiDocker, SiMongodb, SiAngular } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiAngular />, name: "Angular" },
  ];

  const containerRef = useRef(null);
  const controls = useAnimation();
  const speed = 50; // pixels per second
  const [direction, setDirection] = useState(1); // 1 = left, -1 = right
  const startTime = useRef(Date.now());
  const [repeated, setRepeated] = useState([]);

  // Duplicate skills enough for infinite seamless loop
  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;

    const tempDiv = document.createElement("div");
    tempDiv.style.display = "flex";
    tempDiv.style.position = "absolute";
    tempDiv.style.visibility = "hidden";
    tempDiv.style.whiteSpace = "nowrap";

    skills.forEach((s) => {
      const item = document.createElement("div");
      item.style.display = "inline-flex";
      item.style.marginRight = "64px"; // gap-16
      item.innerText = s.name;
      tempDiv.appendChild(item);
    });

    document.body.appendChild(tempDiv);
    const singleRowWidth = tempDiv.offsetWidth;
    document.body.removeChild(tempDiv);

    let repeatedSkills = [...skills];
    let totalWidth = singleRowWidth;

    while (totalWidth < containerWidth * 3) {
      repeatedSkills = [...repeatedSkills, ...skills];
      totalWidth += singleRowWidth;
    }

    setRepeated(repeatedSkills);
  }, [skills]);

  // Continuous auto-scroll animation
  useEffect(() => {
    let frameId;

    const animate = () => {
      if (!containerRef.current) return;

      const singleRowWidth = containerRef.current.scrollWidth / repeated.length * skills.length;
      const elapsed = Date.now() - startTime.current;

      const xPos =
        direction === 1
          ? -((elapsed / 1000) * speed) % singleRowWidth // scroll left
          : ((elapsed / 1000) * speed) % singleRowWidth; // scroll right

      controls.set({ x: xPos });
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [controls, direction, speed, repeated, skills.length]);

  // Touch swipe support for mobile (optional)
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchEndY = e.touches[0].clientY;
      const delta = touchEndY - touchStartY;
      setDirection(delta < 0 ? 1 : -1);
      touchStartY = touchEndY;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section id="skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] mb-4 text-center">
        My Skills
      </h2>
      <p className="text-white/90 text-base sm:text-lg mb-8 text-center">
        Modern Technologies | Applications
      </p>

      {/* Auto-scrolling skills */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-16 text-6xl sm:text-5xl text-[#1cd8d2]"
          animate={controls}
        >
          {repeated.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[120px]">
              <span className="hover:scale-125 transition-transform duration-300">{s.icon}</span>
              <p className="text-sm sm:text-xs">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
