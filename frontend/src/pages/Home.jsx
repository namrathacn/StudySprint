import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Features from "../components/Features";

import Stats from "../components/Stats";

import Footer from "../components/Footer";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase";

import { Link } from "react-router-dom";





function Home(){


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


<div className="
min-h-screen
bg-[#020617]
text-white
">





<Navbar />





<main>





<Hero />





<Features />









{
user ? (

<Stats />

)

:

(


<section className="
px-6
py-20
">


<div className="
max-w-6xl
mx-auto
bg-white/5
border
border-white/10
rounded-3xl
p-10
text-center
">



<h2 className="
text-5xl
font-black
">

Your Progress

</h2>





<p className="
text-slate-400
mt-5
text-xl
">

Login to track your tasks, goals and study sessions.

</p>







<div className="
flex
justify-center
gap-5
mt-8
">





<Link

to="/login"

className="
bg-emerald-500
text-black
px-8
py-4
rounded-xl
font-bold
"

>

Login

</Link>





<Link

to="/register"

className="
border
border-white/20
px-8
py-4
rounded-xl
font-bold
"

>

Register

</Link>






</div>






</div>


</section>


)


}









<section className="
px-6
py-20
">



<div className="
max-w-6xl
mx-auto
bg-white/5
border
border-white/10
rounded-3xl
p-10
text-center
">



<h2 className="
text-5xl
font-black
">

Plan.

Track.

Achieve.

</h2>





<p className="
text-slate-400
mt-5
text-xl
">

Everything you need to build better study habits.

</p>





</div>


</section>







</main>





<Footer />






</div>


);


}



export default Home;