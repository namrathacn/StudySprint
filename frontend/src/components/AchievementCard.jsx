import { motion } from "framer-motion";

import {
  FiAward,
  FiStar,
  FiZap,
  FiLock,
} from "react-icons/fi";



function AchievementCard() {



  const achievements = [

    {
      icon:<FiStar />,
      title:"First Step",
      description:"Complete your first study task",
      unlocked:true,
      xp:"+50 XP",
    },


    {
      icon:<FiZap />,
      title:"Focus Master",
      description:"Complete 10 focused sessions",
      unlocked:true,
      xp:"+100 XP",
    },


    {
      icon:<FiAward />,
      title:"Study Champion",
      description:"Maintain a 30 day streak",
      unlocked:false,
      xp:"+500 XP",
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
          items-center
          gap-4
          ">



            <div className="
            text-emerald-400
            text-4xl
            ">

              <FiAward />

            </div>







            <div>


              <h2 className="
              text-4xl
              font-black
              ">

                Achievements

              </h2>




              <p className="
              text-slate-400
              mt-2
              ">

                Earn rewards by building consistent study habits.

              </p>



            </div>




          </div>









          {/* Level Section */}



          <div className="
          mt-10
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-6
          ">



            <div className="
            flex
            justify-between
            items-center
            ">


              <div>


                <p className="
                text-slate-400
                ">

                  Current Level

                </p>



                <h3 className="
                text-4xl
                font-black
                mt-2
                text-emerald-400
                ">

                  Level 8

                </h3>


              </div>






              <div className="
              text-right
              ">


                <p className="
                text-slate-400
                ">

                  Total XP

                </p>


                <h3 className="
                text-3xl
                font-bold
                mt-2
                ">

                  2450

                </h3>



              </div>




            </div>






            <div className="
            mt-6
            h-3
            bg-white/10
            rounded-full
            overflow-hidden
            ">



              <motion.div


                initial={{
                  width:0
                }}


                whileInView={{
                  width:"70%"
                }}


                transition={{
                  duration:1
                }}



                className="
                h-full
                bg-emerald-500
                rounded-full
                "

              />



            </div>





          </div>









          {/* Achievement Cards */}





          <div className="
          grid
          md:grid-cols-3
          gap-6
          mt-10
          ">



            {
              achievements.map((item,index)=>(



                <motion.div



                  key={index}



                  whileHover={{
                    y:-8
                  }}



                  className={`
                  rounded-2xl
                  border
                  border-white/10
                  p-6
                  bg-white/5
                  ${
                    !item.unlocked
                    &&
                    "opacity-50"
                  }
                  `}



                >





                  <div className="
                  flex
                  justify-between
                  items-center
                  ">



                    <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-emerald-500/20
                    flex
                    items-center
                    justify-center
                    text-emerald-400
                    text-2xl
                    ">


                      {
                        item.unlocked

                        ?

                        item.icon

                        :

                        <FiLock />

                      }


                    </div>





                    <span className="
                    text-emerald-400
                    font-bold
                    ">

                      {item.xp}

                    </span>



                  </div>








                  <h3 className="
                  text-xl
                  font-bold
                  mt-6
                  ">


                    {item.title}


                  </h3>







                  <p className="
                  text-slate-400
                  mt-3
                  leading-6
                  ">


                    {item.description}


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



export default AchievementCard;