import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";


function ProgressCard() {


  const data = [

    {
      icon: <FiCheckCircle />,
      title: "Tasks Completed",
      value: "18/24",
    },


    {
      icon: <FiClock />,
      title: "Study Hours",
      value: "32h",
    },


    {
      icon: <FiTrendingUp />,
      title: "Current Streak",
      value: "12 Days",
    },

  ];





  return (

    <section className="
    px-8
    py-10
    ">


      <div className="
      max-w-7xl
      mx-auto
      ">



        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          "

        >



          <div className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6
          ">



            <div>


              <p className="
              text-emerald-400
              uppercase
              tracking-[5px]
              font-semibold
              ">

                Dashboard

              </p>



              <h2 className="
              text-4xl
              font-black
              mt-4
              ">

                Today's Progress

              </h2>


            </div>






            <div className="
            text-right
            ">


              <h3 className="
              text-5xl
              font-black
              text-emerald-400
              ">

                75%

              </h3>


              <p className="
              text-slate-400
              mt-2
              ">

                Weekly Goal

              </p>


            </div>


          </div>






          <div className="
          mt-10
          ">


            <div className="
            flex
            justify-between
            text-slate-400
            mb-3
            ">

              <span>
                Progress
              </span>


              <span>
                75%
              </span>


            </div>




            <div className="
            h-4
            bg-white/10
            rounded-full
            overflow-hidden
            ">


              <motion.div

                initial={{
                  width:0
                }}

                whileInView={{
                  width:"75%"
                }}

                transition={{
                  duration:1.5
                }}

                className="
                h-full
                bg-emerald-500
                rounded-full
                "

              />


            </div>


          </div>







          <div className="
          grid
          md:grid-cols-3
          gap-6
          mt-12
          ">



            {
              data.map((item,index)=>(


                <motion.div

                  key={index}

                  whileHover={{
                    y:-8
                  }}

                  className="
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  p-6
                  "

                >


                  <div className="
                  text-emerald-400
                  text-3xl
                  ">

                    {item.icon}

                  </div>




                  <h3 className="
                  text-3xl
                  font-bold
                  mt-5
                  ">

                    {item.value}

                  </h3>




                  <p className="
                  text-slate-400
                  mt-2
                  ">

                    {item.title}

                  </p>



                </motion.div>


              ))
            }



          </div>




        </motion.div>



      </div>



    </section>

  );

}


export default ProgressCard;