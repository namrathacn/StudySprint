import { motion } from "framer-motion";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ProgressChart() {
  const data = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 4 },
    { day: "Wed", hours: 3 },
    { day: "Thu", hours: 5 },
    { day: "Fri", hours: 6 },
    { day: "Sat", hours: 4 },
    { day: "Sun", hours: 7 },
  ];

  return (
    <motion.div
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
      whileHover={{
        y: -5,
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
      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-black">
            Study Progress
          </h2>

          <p className="text-slate-400 mt-2">
            Weekly focus hours overview
          </p>

        </div>

        <div
          className="
          bg-emerald-500/20
          text-emerald-400
          px-4
          py-2
          rounded-xl
          font-bold
          "
        >
          31 hrs
        </div>

      </div>

      <div className="h-80 mt-8">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="rgba(255,255,255,0.08)"
            />

            <XAxis
              dataKey="day"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
              cursor={{
                stroke: "#10b981",
                strokeDasharray: "5 5",
              }}
            />

            <Line
              type="monotone"
              dataKey="hours"
              stroke="#10b981"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#10b981",
              }}
              activeDot={{
                r: 8,
                fill: "#34d399",
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </motion.div>
  );
}

export default ProgressChart;