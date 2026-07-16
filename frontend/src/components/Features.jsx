import { motion } from "framer-motion";
import {
  FiClock,
  FiCheckSquare,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";

function Features() {
  const features = [
    {
      icon: <FiClock />,
      title: "Focus Timer",
      description:
        "Boost productivity with a customizable Pomodoro timer designed for focused study sessions.",
    },
    {
      icon: <FiCheckSquare />,
      title: "Task Manager",
      description:
        "Create, manage, complete and organize your daily study tasks with ease.",
    },
    {
      icon: <FiTarget />,
      title: "Goal Tracker",
      description:
        "Set learning goals and monitor your progress until you achieve them.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Analytics",
      description:
        "Visualize your study habits and productivity with clean progress charts.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="features"
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
            Powerful Features
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Everything you need to stay productive throughout your study journey.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={card}
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
                transition
              "
            >
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
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Features;