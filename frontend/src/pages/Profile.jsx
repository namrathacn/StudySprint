import {useEffect,useState} from "react";

import Navbar from "../components/Navbar";

import {FiUser,FiMail,FiBookOpen,FiTarget,FiClock} from "react-icons/fi";

import {apiRequest} from "../services/api";



function Profile(){


const user = JSON.parse(localStorage.getItem("user")) || {};



const [stats,setStats]=useState({

tasks:0,

completedTasks:0,

goals:0,

completedGoals:0,

sessions:0

});





useEffect(()=>{


loadStats();


},[]);






const loadStats=async()=>{


try{


const data=await apiRequest("/dashboard");


setStats(data);


}

catch(error){

console.log(error);

}


};






const name=user.email

?

user.email.split("@")[0]

:

"Student";







return(


<div className="
min-h-screen
bg-[#020617]
text-white
">


<Navbar />



<main className="
pt-32
px-6
pb-20
">


<div className="
max-w-5xl
mx-auto
">



<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-10
">


<div className="
flex
items-center
gap-8
">


<div className="
w-32
h-32
rounded-full
bg-emerald-500
flex
items-center
justify-center
text-black
">


<FiUser size={60}/>


</div>





<div>


<h1 className="
text-5xl
font-black
">

{name}

</h1>



<p className="
mt-3
text-slate-400
flex
gap-2
items-center
">


<FiMail/>

{user.email || "Student"}

</p>


</div>


</div>


</div>








<div className="
grid
md:grid-cols-3
gap-6
mt-10
">





<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
text-center
">

<FiClock className="
mx-auto
text-emerald-400
text-4xl
"/>


<h2 className="
text-4xl
font-black
mt-5
">

{stats.sessions}

</h2>


<p className="text-slate-400">

Study Sessions

</p>


</div>







<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
text-center
">


<FiBookOpen className="
mx-auto
text-emerald-400
text-4xl
"/>


<h2 className="
text-4xl
font-black
mt-5
">

{stats.completedTasks}

</h2>


<p className="text-slate-400">

Tasks Completed

</p>


</div>







<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
text-center
">


<FiTarget className="
mx-auto
text-emerald-400
text-4xl
"/>


<h2 className="
text-4xl
font-black
mt-5
">

{stats.completedGoals}

</h2>


<p className="text-slate-400">

Goals Completed

</p>


</div>




</div>




</div>


</main>


</div>


);


}


export default Profile;