import { useState } from "react";

import {
  FiTarget,
  FiPlus,
  FiCheck,
} from "react-icons/fi";




function GoalCard() {



  const [goal,setGoal] = useState("");



  const [goals,setGoals] = useState([


    {
      id:1,
      title:"Complete DBMS preparation",
      progress:80
    },


    {
      id:2,
      title:"Finish ADA practice",
      progress:60
    },


    {
      id:3,
      title:"Improve coding skills",
      progress:45
    },


  ]);









  const addGoal=()=>{


    if(goal.trim()==="") return;



    setGoals([

      ...goals,

      {
        id:Date.now(),
        title:goal,
        progress:0
      }

    ]);



    setGoal("");



  };









  const increaseProgress=(id)=>{


    setGoals(

      goals.map((item)=>{


        if(item.id===id){


          return {

            ...item,

            progress:
            item.progress < 100
            ?
            item.progress + 10
            :
            100

          };


        }


        return item;


      })

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








        <div className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        ">







          <div className="
          flex
          items-center
          gap-3
          ">



            <FiTarget className="
            text-emerald-400
            text-3xl
            "/>



            <h2 className="
            text-3xl
            font-black
            ">


              Study Goals


            </h2>



          </div>









          <div className="
          flex
          gap-4
          mt-8
          ">



            <input


              value={goal}


              onChange={(e)=>setGoal(e.target.value)}



              placeholder="Create a new goal..."



              className="
              flex-1
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






            <button


              onClick={addGoal}



              className="
              bg-emerald-500
              text-black
              px-5
              rounded-2xl
              hover:bg-emerald-400
              transition
              "



            >


              <FiPlus size={22}/>



            </button>







          </div>









          <div className="
          mt-8
          space-y-5
          ">






            {

              goals.map((item)=>(



                <div


                  key={item.id}


                  className="
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  p-6
                  "



                >






                  <div className="
                  flex
                  justify-between
                  items-center
                  ">



                    <h3 className="
                    text-xl
                    font-bold
                    ">


                      {item.title}



                    </h3>







                    <span className="
                    text-emerald-400
                    font-bold
                    ">


                      {item.progress}%



                    </span>






                  </div>









                  <div className="
                  h-3
                  bg-white/10
                  rounded-full
                  mt-5
                  overflow-hidden
                  ">


                    <div

                      style={{
                        width:`${item.progress}%`
                      }}


                      className="
                      h-full
                      bg-emerald-500
                      rounded-full
                      "

                    />



                  </div>









                  <button


                    onClick={()=>increaseProgress(item.id)}



                    className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-emerald-400
                    hover:text-emerald-300
                    transition
                    "



                  >



                    <FiCheck />

                    Update Progress



                  </button>







                </div>




              ))

            }






          </div>







        </div>







      </div>







    </section>


  );


}



export default GoalCard;