import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
} from "react-icons/fi";

function Register() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-emerald-500/10 blur-[200px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-2xl"
      >

        <h1 className="text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="text-slate-400 mt-3">
          Join StudySprint and start building better study habits.
        </p>

        <form className="mt-10 space-y-6">

          {/* Name */}

          <div>

            <label className="block mb-2 text-slate-300">
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3">

              <FiUser className="text-emerald-400 text-xl" />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="block mb-2 text-slate-300">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3">

              <FiMail className="text-emerald-400 text-xl" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 text-slate-300">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3">

              <FiLock className="text-emerald-400 text-xl" />

              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
              />

            </div>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="block mb-2 text-slate-300">
              Confirm Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3">

              <FiLock className="text-emerald-400 text-xl" />

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
              />

            </div>

          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 py-4 text-lg font-semibold transition hover:bg-emerald-600"
          >
            Create Account
          </button>

        </form>

        <p className="mt-8 text-center text-slate-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Sign In
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Register;