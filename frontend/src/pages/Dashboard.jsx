import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { apiRequest } from "../services/api";


function Dashboard() {


  const [stats,setStats] = useState({

    tasks:0,

    completedTasks:0,

    goals:0,

    completedGoals:0

  });



  useEffect(()=>{

    loadDashboard();

  },[]);





  const loadDashboard = async()=>{


    try{


      const data = await apiRequest("/dashboard");


      setStats(data);


    }

    catch(error){

      console.log(error);

    }


  };







  const taskProgress =
    stats.tasks === 0
    ? 0
    :
    Math.round(
      (stats.completedTasks / stats.tasks) * 100
    );





  const goalProgress =
    stats.goals === 0
    ? 0
    :
    Math.round(
      (stats.completedGoals / stats.goals) * 100
    );







  return(


    <div className="min-h-screen bg-[#020617] text-white">


      <Navbar />



      <div className="pt-32 px-6 pb-20 max-w-6xl mx-auto">



        <h1 className="text-5xl font-black mb-10">

          Dashboard

        </h1>







        <div className="grid md:grid-cols-2 gap-8">





          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">


            <h2 className="text-2xl font-bold mb-5">

              Tasks Progress

            </h2>



            <p className="text-5xl font-black text-emerald-400">

              {taskProgress}%

            </p>




            <p className="mt-4 text-slate-300">

              {stats.completedTasks} completed out of {stats.tasks}

            </p>



          </div>







          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">


            <h2 className="text-2xl font-bold mb-5">

              Goals Progress

            </h2>



            <p className="text-5xl font-black text-emerald-400">

              {goalProgress}%

            </p>




            <p className="mt-4 text-slate-300">

              {stats.completedGoals} completed out of {stats.goals}

            </p>



          </div>





        </div>









        <div className="grid md:grid-cols-4 gap-6 mt-10">



          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">


            <h3 className="text-slate-400">

              Total Tasks

            </h3>


            <p className="text-4xl font-black mt-3">

              {stats.tasks}

            </p>


          </div>







          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">


            <h3 className="text-slate-400">

              Done Tasks

            </h3>


            <p className="text-4xl font-black mt-3 text-emerald-400">

              {stats.completedTasks}

            </p>


          </div>







          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">


            <h3 className="text-slate-400">

              Total Goals

            </h3>


            <p className="text-4xl font-black mt-3">

              {stats.goals}

            </p>


          </div>







          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">


            <h3 className="text-slate-400">

              Finished Goals

            </h3>


            <p className="text-4xl font-black mt-3 text-emerald-400">

              {stats.completedGoals}

            </p>


          </div>





        </div>






      </div>


    </div>


  );


}



export default Dashboard;