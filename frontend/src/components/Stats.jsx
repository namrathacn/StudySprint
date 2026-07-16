import { motion } from "framer-motion";
import {
  FiClock,
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

function Stats() {
  const stats = [
    {
      title: "Study Hours",
      value: "120+",
      icon: <FiClock />,
    },
    {
      title: "Tasks Completed",
      value: "85",
      icon: <FiCheckCircle />,
    },
    {
      title: "Goals Achieved",
      value: "24",
      icon: <FiTarget />,
    },
    {
      title: "Weekly Progress",
      value: "92%",
      icon: <FiTrendingUp />,
    },
  ];

  return (
    <section
      id="analytics"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black">
            Your Productivity
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Track your progress and stay motivated every day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
              "
            >
              <div className="flex justify-center">
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-emerald-500/20
                    flex
                    items-center
                    justify-center
                    text-emerald-400
                    text-3xl
                  "
                >
                  {item.icon}
                </div>
              </div>

              <h3 className="text-4xl font-black mt-6">
                {item.value}
              </h3>

              <p className="text-slate-400 mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;