import {
  FiBook,
  FiCalendar,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

function DashboardPreview() {
  return (
    <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-2xl">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-sm">
            Welcome Back
          </p>

          <h2 className="text-2xl font-bold mt-2">
            Study Hub
          </h2>

        </div>

        <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">

          <FiBook />

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-slate-900/60 p-5">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Today's Progress
          </span>

          <span className="text-emerald-400">
            72%
          </span>

        </div>

        <div className="w-full h-3 bg-slate-700 rounded-full mt-4">

          <div className="h-3 w-[72%] bg-emerald-400 rounded-full"></div>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <div className="rounded-2xl bg-slate-900/60 p-4 flex justify-between items-center">

          <div className="flex gap-3 items-center">

            <FiCalendar className="text-emerald-400" />

            <span>Database Lab</span>

          </div>

          <span>10 AM</span>

        </div>

        <div className="rounded-2xl bg-slate-900/60 p-4 flex justify-between items-center">

          <div className="flex gap-3 items-center">

            <FiClock className="text-teal-400" />

            <span>Pomodoro</span>

          </div>

          <span>25 min</span>

        </div>

        <div className="rounded-2xl bg-slate-900/60 p-4 flex justify-between items-center">

          <div className="flex gap-3 items-center">

            <FiCheckCircle className="text-green-400" />

            <span>Tasks Completed</span>

          </div>

          <span>8/10</span>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-5">

        <h3 className="font-semibold">
          Current Streak
        </h3>

        <p className="text-4xl font-bold mt-3 text-emerald-400">
          12 Days
        </p>

      </div>

    </div>
  );
}

export default DashboardPreview;