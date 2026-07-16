import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";


function Tasks() {


    const [tasks, setTasks] = useState([]);

    const [title, setTitle] = useState("");

    const [subject, setSubject] = useState("");





    useEffect(()=>{


        loadTasks();


    },[]);






    const loadTasks = async()=>{


        try{


            const data = await apiRequest("/tasks");


            setTasks(data);


        }
        catch(error){


            console.log(error);


        }


    };







    const addTask = async()=>{


        if(!title.trim() || !subject.trim()) return;



        try{


            await apiRequest("/tasks",{


                method:"POST",


                body:JSON.stringify({


                    title:title,


                    subject:subject,


                    completed:false


                })


            });



            setTitle("");

            setSubject("");


            loadTasks();



        }
        catch(error){


            console.log(error);


        }


    };








    const toggleTask = async(task)=>{


        try{


            await apiRequest(`/tasks/${task.id}`,{


                method:"PUT",


                body:JSON.stringify({


                    completed:!task.completed


                })


            });



            loadTasks();


        }
        catch(error){


            console.log(error);


        }


    };







    const deleteTask = async(id)=>{


        try{


            await apiRequest(`/tasks/${id}`,{


                method:"DELETE"


            });



            loadTasks();


        }
        catch(error){


            console.log(error);


        }


    };








    return (

        <div className="min-h-screen bg-[#020617] text-white p-10">



            <h1 className="text-4xl font-bold mb-8">

                Tasks

            </h1>





            <div className="flex gap-4 mb-4">



                <input


                value={title}


                onChange={(e)=>setTitle(e.target.value)}


                placeholder="Task title"


                className="flex-1 bg-slate-800 p-3 rounded outline-none"


                />




                <input


                value={subject}


                onChange={(e)=>setSubject(e.target.value)}


                placeholder="Subject"


                className="flex-1 bg-slate-800 p-3 rounded outline-none"


                />



            </div>






            <button


            onClick={addTask}


            className="bg-blue-600 px-6 py-3 rounded mb-8 cursor-pointer"


            >

                Add Task

            </button>








            <div className="space-y-4">


                {

                tasks.map((task)=>(


                    <div


                    key={task.id}


                    className="bg-slate-800 p-5 rounded-xl flex justify-between items-center"


                    >



                        <div>


                            <h2 className={task.completed ? "line-through text-gray-400 text-xl" : "text-xl"}>

                                {task.title}

                            </h2>


                            <p className="text-gray-400">

                                {task.subject}

                            </p>


                        </div>






                        <div className="flex gap-3">



                            <button


                            onClick={()=>toggleTask(task)}


                            className="bg-green-600 px-4 py-2 rounded cursor-pointer"


                            >

                                {task.completed ? "Undo" : "Complete"}


                            </button>






                            <button


                            onClick={()=>deleteTask(task.id)}


                            className="bg-red-600 px-4 py-2 rounded cursor-pointer"


                            >

                                Delete

                            </button>



                        </div>




                    </div>


                ))


                }


            </div>



        </div>

    );


}


export default Tasks;