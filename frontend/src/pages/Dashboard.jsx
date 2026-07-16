import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import ProgressChart from "../components/ProgressChart";
import StudyTimer from "../components/StudyTimer";
import TaskManager from "../components/TaskManager";
import GoalTracker from "../components/GoalTracker";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <motion.main
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="pt-32 px-6 pb-12"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">

            <motion.h1
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="text-5xl font-black"
            >
              Dashboard
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.35,
              }}
              className="text-slate-400 mt-3"
            >
              Welcome back! Stay focused and keep making progress.
            </motion.p>

          </div>

          <div className="grid xl:grid-cols-3 gap-8">

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="xl:col-span-2 space-y-8"
            >
              <ProgressChart />

              <TaskManager />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              className="space-y-8"
            >
              <StudyTimer />

              <GoalTracker />
            </motion.div>

          </div>

        </div>
      </motion.main>
    </div>
  );
}

export default Dashboard;