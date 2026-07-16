import {useState} from "react";

import {signInWithEmailAndPassword} from "firebase/auth";

import {auth} from "../firebase";

import {useNavigate} from "react-router-dom";



function Login(){


const navigate=useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");







const login=async(e)=>{


e.preventDefault();


try{


const result=await signInWithEmailAndPassword(

auth,

email,

password

);




const token=await result.user.getIdToken();





localStorage.setItem(

"token",

token

);





localStorage.setItem(

"user",

JSON.stringify({

email:result.user.email,

uid:result.user.uid

})

);





navigate("/dashboard");



}

catch(err){


console.log(err.code);

setError(err.message);


}



};







return(

<div className="
min-h-screen
bg-[#020617]
text-white
flex
items-center
justify-center
px-6
">


<form

onSubmit={login}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-10
w-full
max-w-md
"


>


<h1 className="
text-4xl
font-black
mb-8
">

Login

</h1>



<input

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
p-4
rounded-xl
bg-white/10
mb-4
"

/>




<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
p-4
rounded-xl
bg-white/10
mb-4
"

/>




{
error &&

<p className="text-red-400 mb-4">

{error}

</p>

}




<button

className="
w-full
bg-emerald-500
text-black
py-4
rounded-xl
font-bold
"

>

Login

</button>



</form>


</div>


);


}


export default Login;