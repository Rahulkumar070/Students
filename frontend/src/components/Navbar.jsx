import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { Power4 } from "gsap/all";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-10 p-13 font-['silk'] text-white px-7 flex items-center justify-between w-full h-16"
    >
      <motion.div
        className="text-blue-400"
        animate={{ rotateY: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        R
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden bg-black p-1 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMenuOutline size={24} />
      </motion.div>

      <div className="hidden md:flex items-center gap-6">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/"
            className="hover:text-gray-400 border bg-black p-2 px-5 rounded-2xl"
          >
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/course"
            className="hover:text-gray-400 border bg-black p-2 px-5  rounded-2xl"
          >
            Course
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/about"
            className="hover:text-gray-400 border bg-black p-2 px-5  rounded-2xl"
          >
            About
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1, ease: [0.12, 0, 0.39, 1] }}
            exit={{
              y: "-100vh",
              opacity: 0,
              transition: { duration: 0.7, ease: [0.12, 0, 0.36, 1] },
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full fixed top-0 left-0 z-[1000] h-screen text-black bg-[#ced4da] flex items-center justify-center flex-col"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-5 right-5 text-4xl"
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.7 }}
            >
              <FiX />
            </motion.button>

            {/* Navigation Links */}
            <motion.div className="flex flex-col items-center gap-1">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ rotate: 90, y: "30vh", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                  }}
                >
                  <Link
                    to="/"
                    className="text-6xl overflow-hidden"
                    onClick={() => setMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  initial={{ rotate: 90, y: "30vh", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                  }}
                >
                  <Link
                    to="/course"
                    className="text-6xl hover:text-yellow-600 transition-all hover:scale-105"
                    onClick={() => setMenuOpen(false)}
                  >
                    COURSE
                  </Link>
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  initial={{ rotate: 90, y: "30vh", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                  }}
                >
                  <Link
                    to="/about"
                    className="text-6xl hover:text-yellow-600 transition-all hover:scale-105"
                    onClick={() => setMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
