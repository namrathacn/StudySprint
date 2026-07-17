import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { apiRequest } from "../services/api";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");


  useEffect(() => {
    loadTasks();
  }, []);



  const loadTasks = async () => {

    try {

      const data = await apiRequest("/tasks");

      setTasks(data);

    } catch(error) {

      console.log(error);

    }

  };



  const addTask = async () => {

    if(!title.trim()) return;


    try {

      await apiRequest("/tasks","POST",{

        title:title,
        completed:false

      });


      setTitle("");

      loadTasks();


    } catch(error){

      console.log(error);

    }

  };




  const toggleTask = async(id,completed)=>{

    try{

      await apiRequest(`/tasks/${id}`,"PUT",{

        completed:!completed

      });


      loadTasks();


    }catch(error){

      console.log(error);

    }

  };





  const deleteTask = async(id)=>{

    try{

      await apiRequest(`/tasks/${id}`,"DELETE");


      loadTasks();


    }catch(error){

      console.log(error);

    }

  };





  return (

    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />


      <div className="pt-32 px-6 pb-20 max-w-5xl mx-auto">


        <h1 className="text-5xl font-black mb-10">
          Tasks
        </h1>



        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">


          <div className="flex gap-4">


            <input

              value={title}

              onChange={(e)=>setTitle(e.target.value)}

              onKeyDown={(e)=>{

                if(e.key==="Enter"){
                  addTask();
                }

              }}

              placeholder="Add new task"

              className="flex-1 bg-white/10 p-4 rounded-xl outline-none"

            />



            <button

              onClick={addTask}

              className="bg-emerald-500 hover:bg-emerald-400 text-black px-7 rounded-xl font-bold"

            >

              Add

            </button>


          </div>


        </div>





        <div className="space-y-5">


        {
          tasks.length===0 && (

            <div className="text-slate-400 text-xl">

              No tasks yet. Create your first task.

            </div>

          )
        }




        {
          tasks.map((task)=>(


            <div

              key={task.id}

              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between gap-4"

            >



              <h2

                className={`text-2xl font-bold ${
                  task.completed
                  ? "line-through text-slate-500"
                  : ""
                }`}

              >

                {task.title}

              </h2>





              <div className="flex gap-3">


                <button

                  onClick={()=>toggleTask(
                    task.id,
                    task.completed
                  )}

                  className={`px-6 py-3 rounded-xl font-bold ${
                    task.completed
                    ? "bg-red-500 text-white"
                    : "bg-emerald-500 text-black"
                  }`}

                >

                {
                  task.completed
                  ? "Undo"
                  : "Complete"
                }


                </button>




                <button

                  onClick={()=>deleteTask(task.id)}

                  className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold"

                >

                  Delete

                </button>



              </div>




            </div>


          ))
        }


        </div>


      </div>


    </div>

  );

}


export default Tasks;