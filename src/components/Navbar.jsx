import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerID = useRef(null);

  // -------------------------------
  // FORCE NAVBAR VISIBLE ON HOME
  // -------------------------------
  useEffect(() => {
    const homeSection = document.querySelector("#home");
    if (!homeSection) return;

    // Intersection Observer to detect Home visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setForceVisible(entry.isIntersecting);
        if (entry.isIntersecting) setVisible(true); // always show on Home
      },
      {
        threshold: 0.1,
        rootMargin: "0px", // expand if needed
      }
    );

    observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  // -------------------------------
  // SCROLL LOGIC (hide/show)
  // -------------------------------
  useEffect(() => {
    const handleScroll = () => {
      // if on Home, force visible
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      // scrolling down → hide
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      }
      // scrolling up → show
      else {
        setVisible(true);

        // auto-hide after 3 seconds
        if (timerID.current) clearTimeout(timerID.current);
        timerID.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerID.current) clearTimeout(timerID.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Heshan
          </div>
        </div>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reachout
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
