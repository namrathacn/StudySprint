import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiMenu,
  FiX,
  FiUser,
  FiSettings,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <motion.nav
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
      fixed
      top-5
      left-0
      w-full
      z-50
      px-6
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-8
        py-4
        flex
        items-center
        justify-between
        "
      >
        <Link
          to="/"
          className="
          text-3xl
          font-black
          text-emerald-400
          hover:scale-105
          transition
          "
        >
          StudySprint
        </Link>

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-slate-300
          "
        >
          <Link to="/" className="hover:text-emerald-400 transition">
            Home
          </Link>

          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-emerald-400 transition"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("analytics")}
            className="hover:text-emerald-400 transition"
          >
            Analytics
          </button>

          <button
            onClick={() => scrollToSection("goals")}
            className="hover:text-emerald-400 transition"
          >
            Goals
          </button>
        </div>

        <div
          className="
          hidden
          md:flex
          items-center
          gap-4
          "
        >
          <Link
            to="/profile"
            className="text-slate-300 hover:text-emerald-400 transition"
          >
            <FiUser size={22} />
          </Link>

          <Link
            to="/settings"
            className="text-slate-300 hover:text-emerald-400 transition"
          >
            <FiSettings size={22} />
          </Link>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              to="/dashboard"
              className="
              bg-emerald-500
              hover:bg-emerald-400
              transition
              text-black
              font-semibold
              px-6
              py-3
              rounded-2xl
              "
            >
              Dashboard
            </Link>
          </motion.div>
        </div>

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-3xl
          text-emerald-400
          "
        >
          {open ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
            md:hidden
            mt-4
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            space-y-5
            "
          >
            <motion.div whileHover={{ x: 6 }}>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="block text-slate-300 hover:text-emerald-400 transition"
              >
                Home
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ x: 6 }}
              onClick={() => scrollToSection("features")}
              className="block text-slate-300 hover:text-emerald-400 transition"
            >
              Features
            </motion.button>

            <motion.button
              whileHover={{ x: 6 }}
              onClick={() => scrollToSection("analytics")}
              className="block text-slate-300 hover:text-emerald-400 transition"
            >
              Analytics
            </motion.button>

            <motion.button
              whileHover={{ x: 6 }}
              onClick={() => scrollToSection("goals")}
              className="block text-slate-300 hover:text-emerald-400 transition"
            >
              Goals
            </motion.button>

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
            >
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="
                block
                bg-emerald-500
                hover:bg-emerald-400
                transition
                text-black
                text-center
                py-3
                rounded-2xl
                font-bold
                "
              >
                Dashboard
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;