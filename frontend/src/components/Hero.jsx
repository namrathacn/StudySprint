import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";



function Hero(){


const [user,setUser] = useState(null);



useEffect(()=>{


const unsubscribe = onAuthStateChanged(

auth,

(currentUser)=>{


setUser(currentUser);


}

);



return unsubscribe;


},[]);







return(


<section className="
pt-40
px-6
pb-20
">





<div className="
max-w-6xl
mx-auto
text-center
">





<h1 className="
text-6xl
md:text-7xl
font-black
leading-tight
">

Study Smarter.

<br/>

<span className="
text-emerald-400
">

Achieve More.

</span>


</h1>







<p className="
text-slate-400
text-xl
mt-8
max-w-3xl
mx-auto
">

StudySprint helps you manage tasks, track goals and improve
your study productivity.

</p>









{

user ? (


<div className="
mt-10
flex
justify-center
gap-5
">


<Link

to="/dashboard"

className="
bg-emerald-500
text-black
px-8
py-4
rounded-xl
font-bold
"

>

Dashboard

</Link>


</div>


)


:

(


<div className="
mt-10
flex
justify-center
gap-5
">


<Link

to="/register"

className="
bg-emerald-500
text-black
px-8
py-4
rounded-xl
font-bold
"

>

Get Started

</Link>




<Link

to="/login"

className="
border
border-white/20
px-8
py-4
rounded-xl
font-bold
"

>

Login

</Link>



</div>


)


}







</div>


</section>


);


}



export default Hero;