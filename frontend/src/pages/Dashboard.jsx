import {useEffect,useState} from "react";

import Navbar from "../components/Navbar";

import {apiRequest} from "../services/api";



function Dashboard(){


const [stats,setStats]=useState({

tasks:0,

completedTasks:0,

goals:0,

completedGoals:0,

sessions:0

});







useEffect(()=>{


loadDashboard();


},[]);






const loadDashboard=async()=>{


try{


const data=await apiRequest("/dashboard");


setStats(data);


}

catch(error){

console.log(error);

}


};







const taskProgress = stats.tasks===0

?

0

:

Math.round(

(stats.completedTasks/stats.tasks)*100

);






const goalProgress = stats.goals===0

?

0

:

Math.round(

(stats.completedGoals/stats.goals)*100

);







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
pb-20
max-w-7xl
mx-auto
">





<h1 className="
text-5xl
font-black
mb-10
">

Dashboard

</h1>








<div className="
grid
md:grid-cols-4
gap-6
">





<Card

title="Total Tasks"

value={stats.tasks}

/>



<Card

title="Completed Tasks"

value={stats.completedTasks}

/>




<Card

title="Goals"

value={stats.goals}

/>




<Card

title="Sessions"

value={stats.sessions}

/>



</div>









<div className="
grid
md:grid-cols-2
gap-6
mt-10
">







<ProgressCard

title="Task Progress"

value={taskProgress}

/>





<ProgressCard

title="Goal Progress"

value={goalProgress}

/>






</div>






</div>


</div>


);


}







function Card({title,value}){


return(

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<p className="
text-slate-400
">

{title}

</p>


<h2 className="
text-5xl
font-black
mt-4
">

{value}

</h2>


</div>

);


}







function ProgressCard({title,value}){


return(

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<h2 className="
text-2xl
font-bold
">

{title}

</h2>




<div className="
mt-6
bg-slate-800
rounded-full
h-5
overflow-hidden
">



<div

className="
bg-emerald-500
h-full
"

style={{

width:`${value}%`

}}

/>



</div>




<p className="
mt-4
text-xl
font-bold
">

{value}% Completed

</p>




</div>

);


}







export default Dashboard;