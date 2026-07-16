function Hero(){

return(

<section className="
min-h-screen
flex
items-center
px-6
pt-32
">


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
">


<div>


<h1 className="
text-6xl
font-black
leading-tight
">

Study Smarter.

<br/>

Achieve More.

</h1>



<p className="
mt-6
text-xl
text-slate-400
max-w-xl
">

StudySprint helps you manage tasks, track goals and improve your study productivity.

</p>




<div className="
mt-8
flex
gap-5
">


<a

href="/register"

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

</a>



<a

href="/dashboard"

className="
border
border-white/20
px-8
py-4
rounded-xl
font-bold
"

>

Dashboard

</a>


</div>


</div>





<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-10
">


<h2 className="
text-4xl
font-black
">

Your Progress

</h2>


<p className="
mt-5
text-slate-400
">

Complete tasks, achieve goals and build better study habits.

</p>



<div className="
mt-8
h-4
bg-slate-800
rounded-full
">


<div className="
h-full
w-3/4
bg-emerald-500
rounded-full
">

</div>


</div>


</div>




</div>


</section>


);


}


export default Hero;