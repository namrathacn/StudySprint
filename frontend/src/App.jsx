import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function NotFound() {
  return (
    <div
      className="
      min-h-screen
      bg-[#020617]
      text-white
      flex
      items-center
      justify-center
      px-6
      "
    >
      <div className="text-center">
        <h1 className="text-7xl font-black text-emerald-400">
          404
        </h1>

        <p className="text-slate-400 mt-4 text-lg">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="
          inline-block
          mt-8
          bg-emerald-500
          text-black
          font-bold
          px-8
          py-4
          rounded-2xl
          hover:bg-emerald-400
          transition
          "
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;