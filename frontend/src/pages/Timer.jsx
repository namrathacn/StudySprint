import {useEffect,useState} from "react";

import Navbar from "../components/Navbar";

import {apiRequest} from "../services/api";



function Timer(){


const [minutes,setMinutes]=useState(25);

const [seconds,setSeconds]=useState(0);

const [running,setRunning]=useState(false);

const [notification,setNotification]=useState(false);







useEffect(()=>{


setNotification(

localStorage.getItem("notifications")==="true"

);


},[]);







useEffect(()=>{


let timer;



if(running){



timer=setInterval(()=>{



if(seconds===0){



if(minutes===0){



setRunning(false);



saveSession();



if(notification){

alert("Study session completed!");

}



reset();


}

else{


setMinutes(minutes-1);

setSeconds(59);


}



}

else{


setSeconds(seconds-1);


}




},1000);



}



return()=>clearInterval(timer);



},[running,minutes,seconds]);









const saveSession=async()=>{


try{


await apiRequest("/timer",{

method:"POST",

body:JSON.stringify({

duration:25

})

});


}

catch(error){


console.log(error);


}


};







const reset=()=>{


setMinutes(25);

setSeconds(0);


};








return(

<div className="
min-h-screen
bg-[#020617]
text-white
">


<Navbar />



<div className="
pt-32
px-6
flex
justify-center
">



<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-10
max-w-lg
w-full
text-center
">


<h1 className="
text-5xl
font-black
">

Focus Timer

</h1>




<div className="
text-7xl
font-black
mt-10
">

{String(minutes).padStart(2,"0")}:

{String(seconds).padStart(2,"0")}

</div>






<div className="
flex
gap-5
justify-center
mt-10
">



<button

onClick={()=>setRunning(!running)}

className="
bg-emerald-500
text-black
px-8
py-3
rounded-xl
font-bold
"

>


{

running

?

"Pause"

:

"Start"

}


</button>




<button

onClick={reset}

className="
bg-slate-700
px-8
py-3
rounded-xl
font-bold
"

>

Reset

</button>



</div>






{

notification &&

<p className="
mt-6
text-emerald-400
">

🔔 Reminder enabled

</p>

}



</div>


</div>


</div>


);


}


export default Timer;