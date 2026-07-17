import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";



function Navbar(){


const navigate = useNavigate();


const [open,setOpen] = useState(false);




const logout = async()=>{


try{


await signOut(auth);


localStorage.clear();


navigate("/login");


}


catch(error){


console.log(error);


}


};





return(


<nav className="
fixed
top-0
left-0
w-full
z-50
bg-[#020617]/90
backdrop-blur
border-b
border-white/10
">


<div className="
max-w-7xl
mx-auto
px-6
py-5
flex
justify-between
items-center
">





<Link

to="/"

className="
text-3xl
font-black
text-emerald-400
"

>

StudySprint

</Link>





<button

className="
md:hidden
text-2xl
"

onClick={()=>setOpen(!open)}

>


{
open
?
<FiX/>
:
<FiMenu/>
}


</button>







<div className={`

${open ? "flex":"hidden"}

md:flex

absolute

md:static

top-20

left-0

w-full

md:w-auto

bg-[#020617]

md:bg-transparent

flex-col

md:flex-row

gap-6

p-6

md:p-0

items-center

`}>




<Link to="/dashboard">

Dashboard

</Link>


<Link to="/tasks">

Tasks

</Link>


<Link to="/goals">

Goals

</Link>


<Link to="/timer">

Timer

</Link>


<Link to="/profile">

Profile

</Link>


<Link to="/settings">

Settings

</Link>





<button

onClick={logout}

className="
flex
items-center
gap-2
text-red-400
"

>

<FiLogOut/>

Logout

</button>





</div>



</div>


</nav>


);


}



export default Navbar;