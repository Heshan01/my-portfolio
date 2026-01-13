import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-green-900/20 to-purple-900/30 blur-[120px] animate-pulse opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>

        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-[0_0_15px_rgba(0,200,255,0.6)]">
          Heshan Dilhara
        </h1>

        <div className="w-28 h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee] my-4"></div>

        <div className="flex items-center gap-6 text-3xl mb-5">
          <a
            href="https://www.facebook.com/HeshanD.Samarasinghe?mibextid=wwXIfr&mibextid=wwXIfr"
            className="hover:text-cyan-400 transition drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/heshan-dilhara-609049396?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            className="hover:text-blue-500 transition drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Heshan01"
            className="hover:text-gray-200 transition drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <p className="text-sm text-gray-300 italic mb-4">
          "Success is when preparation meets opportunity."
        </p>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Heshan Dilhara — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
