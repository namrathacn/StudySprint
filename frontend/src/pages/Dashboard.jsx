import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";
import Navbar from "../components/Navbar";


function Dashboard() {


    const [stats,setStats] = useState({

        tasks:0,

        completedTasks:0,

        sessions:0

    });




    useEffect(()=>{

        loadDashboard();

    },[]);





    const loadDashboard = async()=>{


        try{


            const data = await apiRequest("/dashboard");


            console.log("FULL DASHBOARD DATA:", JSON.stringify(data));


            setStats(data);


        }
        catch(error){

            console.log(error);

        }


    };




    const progress = stats.tasks === 0

        ? 0

        : Math.round((stats.completedTasks / stats.tasks) * 100);



    return (

        <div className="min-h-screen bg-[#020617] text-white">

            <Navbar />

            <div className="p-10">


                <h1 className="text-4xl font-bold mb-10">

                    Dashboard

                </h1>


                <div className="grid md:grid-cols-3 gap-6">


                    <div className="bg-slate-800 p-8 rounded-xl">

                        <h2>Total Tasks</h2>

                        <p className="text-5xl font-bold">

                            {stats.tasks}

                        </p>

                    </div>



                    <div className="bg-slate-800 p-8 rounded-xl">

                        <h2>Completed Tasks</h2>

                        <p className="text-5xl font-bold">

                            {stats.completedTasks}

                        </p>

                    </div>




                    <div className="bg-slate-800 p-8 rounded-xl">

                        <h2>Progress</h2>

                        <p className="text-5xl font-bold">

                            {progress}%

                        </p>

                    </div>


                </div>


            </div>

        </div>

    );

}


export default Dashboard;