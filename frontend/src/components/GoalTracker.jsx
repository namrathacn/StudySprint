import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import {
  FiTarget,
  FiPlus,
  FiCheckCircle,
  FiTrash2,
  FiRotateCcw,
} from "react-icons/fi";

import EmptyState from "./EmptyState";

function GoalTracker() {
  const [goal, setGoal] = useState("");

  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("studysprint_goals");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        id: 1,
        title: "Finish DBMS Module 3",
        progress: 80,
      },
      {
        id: 2,
        title: "Complete ADA Practice",
        progress: 60,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(
      "studysprint_goals",
      JSON.stringify(goals)
    );
  }, [goals]);

  const addGoal = () => {
    if (goal.trim() === "") {
      toast.error("Please enter a goal.");
      return;
    }

    setGoals([
      ...goals,
      {
        id: Date.now(),
        title: goal,
        progress: 0,
      },
    ]);

    toast.success("Goal Added");
    setGoal("");
  };

  const increaseProgress = (id) => {
    setGoals(
      goals.map((item) => {
        if (item.id === id) {
          const updated = Math.min(item.progress + 10, 100);

          if (updated === 100 && item.progress !== 100) {
            toast.success("🎉 Goal Completed!");
          }

          return {
            ...item,
            progress: updated,
          };
        }

        return item;
      })
    );
  };

  const resetProgress = (id) => {
    setGoals(
      goals.map((item) =>
        item.id === id
          ? {
              ...item,
              progress: 0,
            }
          : item
      )
    );

    toast("Goal Reset");
  };

  const deleteGoal = (id) => {
    setGoals(
      goals.filter((item) => item.id !== id)
    );

    toast("Goal Deleted");
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -4,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <FiTarget className="text-emerald-400 text-3xl" />

          <h2 className="text-3xl font-black">
            Goal Tracker
          </h2>
        </div>

        <span className="text-emerald-400 font-bold">
          {goals.length} Goals
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <input
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addGoal();
            }
          }}
          placeholder="Add new goal..."
          className="
          flex-1
          bg-white/10
          border
          border-white/10
          rounded-xl
          px-5
          py-3
          outline-none
          focus:border-emerald-400
          transition
          "
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={addGoal}
          className="
          bg-emerald-500
          hover:bg-emerald-400
          transition
          text-black
          px-5
          rounded-xl
          font-bold
          "
        >
          <FiPlus />
        </motion.button>

      </div>

      <div className="mt-6">

        {goals.length === 0 ? (

          <EmptyState
            title="No Goals Yet"
            description="Create your first study goal."
          />

        ) : (

          <AnimatePresence>

            <div className="space-y-5">

              {goals.map((item) => (

                <motion.div
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="
                  bg-white/5
                  rounded-2xl
                  p-5
                  "
                >
                  <div className="flex justify-between items-center">

                    <h3 className="font-bold">
                      {item.title}
                    </h3>

                    {item.progress === 100 && (
                      <FiCheckCircle className="text-emerald-400 text-2xl" />
                    )}

                  </div>

                  <div
                    className="
                    mt-4
                    h-3
                    bg-white/10
                    rounded-full
                    overflow-hidden
                    "
                  >
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${item.progress}%`,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="
                      h-full
                      bg-emerald-500
                      "
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4">

                    <span className="text-slate-400 font-medium">
                      {item.progress}%
                    </span>

                    <div className="flex gap-4">

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => increaseProgress(item.id)}
                        className="
                        text-emerald-400
                        hover:text-emerald-300
                        transition
                        font-semibold
                        "
                      >
                        +10%
                      </motion.button>

                      <motion.button
                        whileHover={{ rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => resetProgress(item.id)}
                        className="
                        text-yellow-400
                        hover:text-yellow-300
                        transition
                        "
                      >
                        <FiRotateCcw />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteGoal(item.id)}
                        className="
                        text-red-400
                        hover:text-red-300
                        transition
                        "
                      >
                        <FiTrash2 />
                      </motion.button>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </AnimatePresence>

        )}

      </div>
    </motion.div>
  );
}

export default GoalTracker;