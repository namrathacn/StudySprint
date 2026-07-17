import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { apiRequest } from "../services/api";


function Goals() {

  const [goals,setGoals] = useState([]);
  const [title,setTitle] = useState("");


  useEffect(()=>{
    loadGoals();
  },[]);



  const loadGoals = async()=>{

    try{

      const data = await apiRequest("/goals");

      setGoals(data);

    }
    catch(error){

      console.log(error);

    }

  };



  const addGoal = async()=>{

    if(!title.trim()) return;


    try{

      await apiRequest("/goals","POST",{

        title:title,

        completed:false

      });


      setTitle("");

      loadGoals();


    }
    catch(error){

      console.log(error);

    }

  };



  const completeGoal = async(id,completed)=>{

    try{

      await apiRequest(`/goals/${id}`,"PUT",{

        completed:!completed

      });


      loadGoals();

    }
    catch(error){

      console.log(error);

    }

  };



  return(

    <div className="min-h-screen bg-[#020617] text-white">


      <Navbar />


      <div className="pt-32 px-6 pb-20 max-w-5xl mx-auto">


        <h1 className="text-5xl font-black mb-10">
          Goals
        </h1>




        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">


          <div className="flex gap-4">


            <input

              value={title}

              onChange={(e)=>setTitle(e.target.value)}

              onKeyDown={(e)=>{

                if(e.key==="Enter"){

                  addGoal();

                }

              }}

              placeholder="Create new goal"

              className="flex-1 bg-white/10 p-4 rounded-xl outline-none"

            />



            <button

              onClick={addGoal}

              className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 rounded-xl font-bold"

            >

              Add

            </button>



          </div>


        </div>




        <div className="space-y-5">


          {
            goals.length===0 && (

              <div className="text-slate-400 text-xl">

                No goals yet. Create your first goal.

              </div>

            )
          }





          {
            goals.map((goal)=>(


              <div

                key={goal.id}

                className="bg-white/5 border border-white/10 rounded-3xl p-6 flex justify-between items-center"

              >


                <h2

                  className={`text-2xl font-bold ${
                    goal.completed
                    ? "line-through text-slate-500"
                    : ""
                  }`}

                >

                  {goal.title}

                </h2>




                <button

                  onClick={()=>
                    completeGoal(
                      goal.id,
                      goal.completed
                    )
                  }


                  className={`px-5 py-2 rounded-xl font-bold transition ${
                    goal.completed
                    ? "bg-red-500 hover:bg-red-400 text-white"
                    : "bg-emerald-500 hover:bg-emerald-400 text-black"
                  }`}

                >

                  {
                    goal.completed
                    ? "Undo"
                    : "Finish"
                  }


                </button>



              </div>


            ))
          }



        </div>



      </div>



    </div>

  );

}


export default Goals;