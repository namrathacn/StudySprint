import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";


function Timer() {


    const [minutes, setMinutes] = useState(25);

    const [seconds, setSeconds] = useState(0);

    const [inputMinutes, setInputMinutes] = useState(25);

    const [running, setRunning] = useState(false);

    const [sessions, setSessions] = useState(0);






    useEffect(()=>{


        let timer;



        if(running){


            timer = setInterval(()=>{


                if(seconds > 0){


                    setSeconds(seconds - 1);


                }
                else if(minutes > 0){


                    setMinutes(minutes - 1);

                    setSeconds(59);


                }
                else{


                    saveSession();

                    setRunning(false);


                }


            },1000);


        }



        return ()=>clearInterval(timer);



    },[running,minutes,seconds]);







    const setTimer = (time)=>{


        setRunning(false);


        setInputMinutes(time);


        setMinutes(time);


        setSeconds(0);


    };








    const saveSession = async()=>{


        const updatedSessions = sessions + 1;


        setSessions(updatedSessions);



        try{


            await apiRequest("/timer",{

                method:"POST",

                body:JSON.stringify({

                    duration:Number(inputMinutes),

                    completedSessions:updatedSessions

                })

            });



        }
        catch(error){


            console.log(error);


        }


    };








    const startTimer = ()=>{


        setRunning(true);


    };






    const resetTimer = ()=>{


        setRunning(false);


        setMinutes(Number(inputMinutes));


        setSeconds(0);


    };







    return (

        <div className="min-h-screen bg-[#020617] text-white p-10">


            <h1 className="text-3xl font-bold mb-8">

                Focus Timer

            </h1>





            <div className="bg-slate-800 p-10 rounded-xl text-center">



                <div className="flex justify-center gap-4 mb-8">


                    <button

                    onClick={()=>setTimer(25)}

                    className="bg-blue-600 px-5 py-2 rounded cursor-pointer"

                    >

                        25 Min

                    </button>




                    <button

                    onClick={()=>setTimer(50)}

                    className="bg-purple-600 px-5 py-2 rounded cursor-pointer"

                    >

                        50 Min

                    </button>


                </div>






                <input


                type="number"


                value={inputMinutes}


                onChange={(e)=>setInputMinutes(e.target.value)}


                className="bg-slate-700 p-3 rounded mb-8 w-40 text-center"


                />






                <h2 className="text-6xl font-bold mb-8">


                    {String(minutes).padStart(2,"0")}:

                    {String(seconds).padStart(2,"0")}


                </h2>






                <div className="flex justify-center gap-4">


                    <button

                    onClick={startTimer}

                    className="bg-green-600 px-6 py-3 rounded cursor-pointer"

                    >

                        Start

                    </button>





                    <button

                    onClick={()=>setRunning(false)}

                    className="bg-yellow-600 px-6 py-3 rounded cursor-pointer"

                    >

                        Pause

                    </button>





                    <button

                    onClick={resetTimer}

                    className="bg-red-600 px-6 py-3 rounded cursor-pointer"

                    >

                        Reset

                    </button>


                </div>





                <p className="mt-8 text-xl">

                    Completed Sessions: {sessions}

                </p>



            </div>


        </div>

    );


}


export default Timer;