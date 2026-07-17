import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Timer() {

  const [minutes,setMinutes] = useState(25);

  const [seconds,setSeconds] = useState(0);

  const [customMinutes,setCustomMinutes] = useState("");

  const [isRunning,setIsRunning] = useState(false);

  const [totalSeconds,setTotalSeconds] = useState(25 * 60);



  useEffect(()=>{

    let timer;


    if(isRunning){

      timer = setInterval(()=>{


        if(seconds === 0){


          if(minutes === 0){


            clearInterval(timer);

            setIsRunning(false);

            alert("🎉 Timer Completed!");


            return;

          }


          setMinutes(minutes - 1);

          setSeconds(59);


        }

        else{

          setSeconds(seconds - 1);

        }


      },1000);


    }



    return ()=>clearInterval(timer);


  },[isRunning,minutes,seconds]);






  const startTimer = ()=>{

    setIsRunning(true);

  };





  const pauseTimer = ()=>{

    setIsRunning(false);

  };






  const resetTimer = ()=>{

    setIsRunning(false);

    setMinutes(25);

    setSeconds(0);

    setTotalSeconds(25*60);

  };







  const setTimer = (time)=>{


    setIsRunning(false);

    setMinutes(time);

    setSeconds(0);

    setTotalSeconds(time*60);


  };






  const customTimer = ()=>{


    if(!customMinutes) return;


    const value = Number(customMinutes);


    setTimer(value);


    setCustomMinutes("");


  };





  const completedSeconds =
    totalSeconds - (minutes*60 + seconds);



  const progress =
    (completedSeconds / totalSeconds) * 100;







  return (

    <div className="min-h-screen bg-[#020617] text-white">


      <Navbar />


      <div className="pt-32 px-6 pb-20 max-w-4xl mx-auto">



        <h1 className="text-5xl font-black mb-10">
          Focus Timer
        </h1>





        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">





          <div className="text-7xl font-black mb-8">

            {String(minutes).padStart(2,"0")}
            :
            {String(seconds).padStart(2,"0")}

          </div>






          <div className="w-full bg-white/10 h-3 rounded-full mb-10">

            <div

              className="bg-emerald-500 h-3 rounded-full"

              style={{
                width:`${progress}%`
              }}

            >

            </div>


          </div>







          <div className="flex justify-center gap-4 mb-8">



            <button

              onClick={startTimer}

              className="bg-emerald-500 text-black px-8 py-3 rounded-xl font-bold"

            >

              Start

            </button>




            <button

              onClick={pauseTimer}

              className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold"

            >

              Pause

            </button>





            <button

              onClick={resetTimer}

              className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold"

            >

              Reset

            </button>



          </div>









          <h2 className="text-xl font-bold mb-4">

            Quick Timer

          </h2>




          <div className="flex justify-center gap-4 mb-10">



            <button

              onClick={()=>setTimer(25)}

              className="bg-white/10 px-5 py-3 rounded-xl"

            >
              25 min
            </button>




            <button

              onClick={()=>setTimer(50)}

              className="bg-white/10 px-5 py-3 rounded-xl"

            >
              50 min
            </button>




            <button

              onClick={()=>setTimer(90)}

              className="bg-white/10 px-5 py-3 rounded-xl"

            >
              90 min
            </button>



          </div>








          <h2 className="text-xl font-bold mb-4">

            Custom Timer

          </h2>




          <div className="flex gap-4 justify-center">


            <input

              type="number"

              value={customMinutes}

              onChange={(e)=>setCustomMinutes(e.target.value)}

              onKeyDown={(e)=>{

                if(e.key==="Enter"){

                  customTimer();

                }

              }}

              placeholder="Minutes"

              className="bg-white/10 p-4 rounded-xl w-40 outline-none"

            />



            <button

              onClick={customTimer}

              className="bg-emerald-500 text-black px-6 rounded-xl font-bold"

            >

              Set

            </button>



          </div>




        </div>


      </div>


    </div>

  );


}


export default Timer;