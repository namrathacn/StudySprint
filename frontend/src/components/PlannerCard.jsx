import { useState } from "react";
import { motion } from "framer-motion";

import {
  FiCalendar,
  FiPlus,
  FiTrash2,
  FiBookOpen,
} from "react-icons/fi";



function PlannerCard() {



  const [sessions,setSessions] = useState([

    {
      id:1,
      subject:"Database Management System",
      date:"Today",
      priority:"High",
    },


    {
      id:2,
      subject:"Analysis of Algorithms",
      date:"Tomorrow",
      priority:"Medium",
    },


  ]);






  const [subject,setSubject] = useState("");

  const [date,setDate] = useState("");

  const [priority,setPriority] = useState("High");









  const addSession = ()=>{


    if(subject.trim()==="" || date.trim()==="") return;



    setSessions([

      ...sessions,

      {

        id:Date.now(),

        subject,

        date,

        priority,

      }

    ]);



    setSubject("");

    setDate("");

    setPriority("High");


  };








  const deleteSession=(id)=>{


    setSessions(

      sessions.filter(

        (item)=>item.id!==id

      )

    );


  };









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

              <FiCalendar />

            </div>






            <div>


              <h2 className="
              text-4xl
              font-black
              ">

                Smart Study Planner

              </h2>





              <p className="
              text-slate-400
              mt-2
              ">

                Organize your subjects and daily schedule.

              </p>




            </div>




          </div>









          {/* Add Schedule */}





          <div className="
          grid
          md:grid-cols-4
          gap-4
          mt-10
          ">




            <input


              value={subject}


              onChange={(e)=>setSubject(e.target.value)}


              placeholder="Subject"


              className="
              bg-white/10
              border
              border-white/10
              rounded-2xl
              px-5
              py-3
              outline-none
              focus:border-emerald-400
              "


            />







            <input


              value={date}


              onChange={(e)=>setDate(e.target.value)}


              placeholder="Date"


              className="
              bg-white/10
              border
              border-white/10
              rounded-2xl
              px-5
              py-3
              outline-none
              focus:border-emerald-400
              "


            />








            <select


              value={priority}


              onChange={(e)=>setPriority(e.target.value)}


              className="
              bg-white/10
              border
              border-white/10
              rounded-2xl
              px-5
              py-3
              outline-none
              "

            >


              <option className="text-black">
                High
              </option>


              <option className="text-black">
                Medium
              </option>


              <option className="text-black">
                Low
              </option>



            </select>









            <button


              onClick={addSession}


              className="
              bg-emerald-500
              text-black
              rounded-2xl
              font-bold
              flex
              justify-center
              items-center
              gap-2
              hover:bg-emerald-400
              transition
              "

            >


              <FiPlus />

              Add


            </button>






          </div>









          {/* Schedule List */}





          <div className="
          mt-10
          space-y-5
          ">




            {
              sessions.map((item)=>(




                <motion.div



                  key={item.id}



                  whileHover={{
                    y:-5
                  }}



                  className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  flex
                  justify-between
                  items-center
                  "



                >





                  <div className="
                  flex
                  items-center
                  gap-5
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


                      <FiBookOpen />


                    </div>







                    <div>


                      <h3 className="
                      text-xl
                      font-bold
                      ">


                        {item.subject}


                      </h3>






                      <p className="
                      text-slate-400
                      mt-2
                      ">


                        📅 {item.date}

                        {" • "}

                        Priority: {item.priority}


                      </p>




                    </div>





                  </div>








                  <button


                    onClick={()=>deleteSession(item.id)}


                    className="
                    text-slate-400
                    hover:text-red-400
                    transition
                    "

                  >

                    <FiTrash2 size={22}/>


                  </button>





                </motion.div>





              ))
            }






          </div>






        </motion.div>





      </div>





    </section>


  );

}



export default PlannerCard;