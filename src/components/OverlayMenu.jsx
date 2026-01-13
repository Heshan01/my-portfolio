import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  const origin = "50% 5%"; // Center reveal effect

  // Map menu items to their exact section IDs
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },       // match your Skills section id
    { name: "Projects", id: "projects" },   // match your Projects section id
    { name: "Contact", id: "contact" },
  ];

  // Handle menu click: close overlay first, then scroll
  const handleClick = (id) => {
    onClose(); // trigger exit animation
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 700); // match exit animation duration
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* Menu List */}
          <motion.ul
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 text-center"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => handleClick(item.id)}
                  className="text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
