import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import {
  FiCheck,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";

import EmptyState from "./EmptyState";

function TaskManager() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("studysprint_tasks");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        id: 1,
        title: "Complete DBMS Revision",
        completed: false,
      },
      {
        id: 2,
        title: "Practice ADA Programs",
        completed: true,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(
      "studysprint_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") {
      toast.error("Please enter a task.");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task,
        completed: false,
      },
    ]);

    toast.success("Task Added");

    setTask("");
  };

  const toggleTask = (id) => {
    const updated = tasks.map((item) =>
      item.id === id
        ? {
            ...item,
            completed: !item.completed,
          }
        : item
    );

    setTasks(updated);

    const completed = updated.find(
      (item) => item.id === id
    )?.completed;

    if (completed) {
      toast.success("Task Completed");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));

    toast("Task Deleted");
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

        <h2 className="text-3xl font-black">
          Task Manager
        </h2>

        <span className="text-emerald-400 font-bold">
          {tasks.length} Tasks
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          placeholder="Add new task..."
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
          whileTap={{
            scale: 0.92,
          }}
          whileHover={{
            scale: 1.05,
          }}
          onClick={addTask}
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

        {tasks.length === 0 ? (

          <EmptyState
            title="No Tasks Yet"
            description="Create your first study task."
          />

        ) : (

          <AnimatePresence>

            <div className="space-y-4">

              {tasks.map((item) => (

                <motion.div
                  key={item.id}
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
                  layout
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="
                  flex
                  items-center
                  justify-between
                  bg-white/5
                  rounded-xl
                  px-5
                  py-4
                  "
                >

                  <button
                    onClick={() => toggleTask(item.id)}
                    className="
                    flex
                    items-center
                    gap-3
                    text-left
                    "
                  >

                    <span
                      className={`
                      w-6
                      h-6
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      transition
                      ${
                        item.completed
                          ? "bg-emerald-500 text-black border-emerald-500"
                          : "border-white/20"
                      }
                      `}
                    >
                      {item.completed && <FiCheck />}
                    </span>

                    <span
                      className={
                        item.completed
                          ? "line-through text-slate-500"
                          : ""
                      }
                    >
                      {item.title}
                    </span>

                  </button>

                  <motion.button
                    whileTap={{
                      scale: 0.9,
                    }}
                    whileHover={{
                      scale: 1.15,
                    }}
                    onClick={() => deleteTask(item.id)}
                    className="
                    text-red-400
                    hover:text-red-300
                    transition
                    "
                  >
                    <FiTrash2 />
                  </motion.button>

                </motion.div>

              ))}

            </div>

          </AnimatePresence>

        )}

      </div>
    </motion.div>
  );
}

export default TaskManager;