import {useEffect,useState} from "react";

import Navbar from "../components/Navbar";

import {
FiSettings,
FiBell,
FiLock,
FiLogOut,
FiTrash2
} from "react-icons/fi";

import {useNavigate} from "react-router-dom";



function Settings(){


const navigate = useNavigate();



const [theme,setTheme] = useState(

localStorage.getItem("theme") || "dark"

);



const [notifications,setNotifications] = useState(

localStorage.getItem("notifications")==="true"

);





useEffect(()=>{


if(theme==="light"){

document.body.classList.add("light-theme");

}

else{

document.body.classList.remove("light-theme");

}



localStorage.setItem(

"theme",

theme

);



},[theme]);







const changeNotifications=()=>{


const value=!notifications;


setNotifications(value);


localStorage.setItem(

"notifications",

value

);


};






const logout=()=>{


localStorage.clear();


navigate("/login");


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
pb-20
max-w-5xl
mx-auto
">



<h1 className="
text-5xl
font-black
mb-10
">

Settings

</h1>





<div className="
space-y-6
">






{/* Appearance */}

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<div className="
flex
items-center
gap-5
">


<div className="
bg-emerald-500
text-black
p-4
rounded-2xl
">


<FiSettings size={30}/>


</div>




<div>


<h2 className="
text-2xl
font-bold
">

Appearance

</h2>


<p className="
text-slate-400
mt-2
">

Change your StudySprint theme

</p>


</div>


</div>






<button

onClick={()=>setTheme(

theme==="dark"

?

"light"

:

"dark"

)}

className="
mt-6
bg-emerald-500
text-black
px-8
py-3
rounded-xl
font-bold
"

>


{

theme==="dark"

?

"☀ Light Mode"

:

"🌙 Dark Mode"

}


</button>



</div>









{/* Notifications */}


<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<div className="
flex
items-center
justify-between
">



<div className="
flex
items-center
gap-5
">



<div className="
bg-emerald-500
text-black
p-4
rounded-2xl
">


<FiBell size={30}/>


</div>





<div>


<h2 className="
text-2xl
font-bold
">

Notifications

</h2>



<p className="
text-slate-400
mt-2
">

Timer completion reminders

</p>



</div>



</div>






<button

onClick={changeNotifications}

className={`
px-6
py-3
rounded-xl
font-bold

${
notifications

?

"bg-emerald-500 text-black"

:

"bg-slate-700 text-white"

}

`}

>


{

notifications

?

"ON"

:

"OFF"

}


</button>



</div>



</div>










{/* Privacy */}



<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<div className="
flex
items-center
gap-5
">



<div className="
bg-emerald-500
text-black
p-4
rounded-2xl
">


<FiLock size={30}/>


</div>





<div>


<h2 className="
text-2xl
font-bold
">

Privacy

</h2>


<p className="
text-slate-400
mt-2
">

Manage your account security

</p>


</div>




</div>







<div className="
mt-8
flex
gap-4
flex-wrap
">



<button

onClick={logout}

className="
bg-red-500
px-6
py-3
rounded-xl
font-bold
flex
items-center
gap-2
"

>


<FiLogOut/>

Logout


</button>







<button

className="
bg-red-900
px-6
py-3
rounded-xl
font-bold
flex
items-center
gap-2
"

>


<FiTrash2/>

Delete Account


</button>





</div>



</div>







</div>



</div>


</div>


);


}


export default Settings;