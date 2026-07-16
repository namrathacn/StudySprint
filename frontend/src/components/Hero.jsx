import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          Study Smarter.
          <br />
          Stay Consistent.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-slate-400 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Organize your study sessions, manage tasks, track your
          progress, and achieve your goals with one beautiful
          productivity dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
        >
          <Link
            to="/dashboard"
            className="bg-emerald-500 hover:bg-emerald-400 transition px-8 py-4 rounded-2xl text-black font-bold"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-white/20 hover:border-emerald-400 transition px-8 py-4 rounded-2xl"
          >
            Login
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;