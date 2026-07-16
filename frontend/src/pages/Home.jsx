import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Features from "../components/Features";

import Stats from "../components/Stats";

import Footer from "../components/Footer";





function Home(){


return(


<div className="
min-h-screen
bg-[#020617]
text-white
">


<Navbar />


<main>


<Hero/>


<Features/>


<Stats/>





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



<Footer/>


</div>


);


}



export default Home;