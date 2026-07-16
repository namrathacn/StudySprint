import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
      border-t
      border-white/10
      mt-24
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-12
        "
      >
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-8
          "
        >
          <div>
            <h2 className="text-3xl font-black text-emerald-400">
              StudySprint
            </h2>

            <p className="text-slate-400 mt-3 max-w-md">
              A modern productivity platform to help students
              manage study sessions, tasks, goals and progress.
            </p>
          </div>

          <div className="flex gap-8 text-slate-400">

            <Link
              to="/"
              className="hover:text-emerald-400 transition"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className="hover:text-emerald-400 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/login"
              className="hover:text-emerald-400 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="hover:text-emerald-400 transition"
            >
              Signup
            </Link>

          </div>
        </div>

        <div
          className="
          border-t
          border-white/10
          mt-10
          pt-6
          text-center
          text-slate-500
          "
        >
          © {year} StudySprint. Built with React, Vite and
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

export default Footer;