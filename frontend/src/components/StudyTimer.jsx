import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiPlay,
  FiPause,
  FiRotateCcw,
  FiClock,
} from "react-icons/fi";
import toast from "react-hot-toast";

function StudyTimer() {
  const [minutes, setMinutes] = useState(() => {
    const saved = localStorage.getItem("studysprint_timer_minutes");
    return saved ? Number(saved) : 25;
  });

  const [inputMinutes, setInputMinutes] = useState(() => {
    const saved = localStorage.getItem("studysprint_timer_minutes");
    return saved ? Number(saved) : 25;
  });

  const [seconds, setSeconds] = useState(() => {
    const saved = localStorage.getItem("studysprint_timer_seconds");
    const mins = localStorage.getItem("studysprint_timer_minutes");

    if (saved) return Number(saved);

    return mins ? Number(mins) * 60 : 1500;
  });

  const [running, setRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "studysprint_timer_minutes",
      minutes
    );
  }, [minutes]);

  useEffect(() => {
    localStorage.setItem(
      "studysprint_timer_seconds",
      seconds
    );
  }, [seconds]);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setRunning(false);

            toast.success("🎉 Focus Session Completed!");

            return minutes * 60;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, minutes]);

  const setCustomTime = () => {
    const value = Number(inputMinutes);

    if (value <= 0) {
      toast.error("Enter a valid duration.");
      return;
    }

    setMinutes(value);
    setSeconds(value * 60);
    setRunning(false);

    toast.success(`Timer set to ${value} minutes`);
  };

  const resetTimer = () => {
    setRunning(false);
    setSeconds(minutes * 60);

    toast("Timer Reset");
  };

  const formatTime = (value) => {
    const min = Math.floor(value / 60);
    const sec = value % 60;

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <motion.section
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
      className="px-4 py-6"
    >
      <motion.div
        whileHover={{
          y: -5,
        }}
        className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        text-center
        "
      >
        <div className="flex justify-center items-center gap-3">
          <FiClock className="text-emerald-400 text-3xl" />

          <h2 className="text-3xl font-black">
            Focus Timer
          </h2>
        </div>

        <p className="text-slate-400 mt-3">
          Set your own study duration and stay focused.
        </p>

        <div className="flex justify-center gap-3 mt-8">
          <input
            type="number"
            min="1"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            className="
            w-32
            bg-white/10
            border
            border-white/10
            rounded-xl
            px-4
            py-3
            text-center
            outline-none
            "
          />

          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            whileHover={{
              scale: 1.05,
            }}
            onClick={setCustomTime}
            className="
            bg-emerald-500
            hover:bg-emerald-400
            transition
            text-black
            font-bold
            px-6
            rounded-xl
            "
          >
            Set
          </motion.button>
        </div>

        <motion.h1
          animate={{
            scale: running ? [1, 1.03, 1] : 1,
          }}
          transition={{
            repeat: running ? Infinity : 0,
            duration: 1,
          }}
          className="
          text-7xl
          md:text-8xl
          font-black
          text-emerald-400
          mt-10
          "
        >
          {formatTime(seconds)}
        </motion.h1>

        <div className="flex justify-center gap-5 mt-10">
          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            whileHover={{
              scale: 1.05,
            }}
            onClick={() => setRunning(!running)}
            className="
            flex
            items-center
            gap-3
            bg-emerald-500
            hover:bg-emerald-400
            transition
            text-black
            font-bold
            px-8
            py-4
            rounded-2xl
            "
          >
            {running ? <FiPause /> : <FiPlay />}
            {running ? "Pause" : "Start"}
          </motion.button>

          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            whileHover={{
              scale: 1.05,
            }}
            onClick={resetTimer}
            className="
            flex
            items-center
            gap-3
            border
            border-white/20
            hover:border-emerald-400
            transition
            px-8
            py-4
            rounded-2xl
            "
          >
            <FiRotateCcw />
            Reset
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default StudyTimer;