import { useState } from "react";

import {
  FiPlus,
  FiCheck,
  FiTrash2,
} from "react-icons/fi";




function TaskCard() {



  const [task,setTask] = useState("");



  const [tasks,setTasks] = useState([

    {
      id:1,
      title:"Complete DBMS notes",
      completed:true
    },


    {
      id:2,
      title:"Practice ADA problems",
      completed:false
    },


    {
      id:3,
      title:"Revise important topics",
      completed:false
    },

  ]);









  const addTask=()=>{


    if(task.trim()==="") return;



    setTasks([

      ...tasks,

      {
        id:Date.now(),
        title:task,
        completed:false
      }

    ]);



    setTask("");



  };









  const toggleTask=(id)=>{


    setTasks(

      tasks.map((item)=>


        item.id===id

        ?

        {
          ...item,
          completed:!item.completed
        }

        :

        item


      )


    );


  };








  const deleteTask=(id)=>{


    setTasks(

      tasks.filter(
        item=>item.id!==id
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








        <div className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        ">








          <h2 className="
          text-3xl
          font-black
          ">


            Daily Tasks



          </h2>








          <div className="
          flex
          gap-4
          mt-8
          ">





            <input


              value={task}


              onChange={(e)=>setTask(e.target.value)}



              placeholder="Add new task..."



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


              onClick={addTask}



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
          space-y-4
          ">






            {

              tasks.map((item)=>(



                <div


                  key={item.id}


                  className="
                  flex
                  items-center
                  justify-between
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  "


                >





                  <div

                    onClick={()=>toggleTask(item.id)}

                    className="
                    flex
                    items-center
                    gap-4
                    cursor-pointer
                    "

                  >





                    <div className={

                      `
                      w-8
                      h-8
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      ${
                        item.completed
                        ?
                        "bg-emerald-500 text-black"
                        :
                        "border-white/30"
                      }
                      `

                    }>



                      {

                        item.completed && <FiCheck />

                      }



                    </div>







                    <p className={

                      item.completed

                      ?

                      "line-through text-slate-500"

                      :

                      "text-white"

                    }>


                      {item.title}



                    </p>





                  </div>








                  <button


                    onClick={()=>deleteTask(item.id)}



                    className="
                    text-slate-400
                    hover:text-red-400
                    transition
                    "



                  >



                    <FiTrash2 />



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



export default TaskCard;