import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const navigate=useNavigate();



const login=async()=>{


try{


const response =
await fetch(

"http://localhost:5000/api/auth/login",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})

}

);



const data =
await response.json();



if(data.user){


localStorage.setItem(

"token",

data.user.token

);



navigate("/dashboard");


}



}catch(error){

console.log(error);

}



};



return (

<div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">


<div className="bg-slate-900 p-8 rounded-xl w-96">


<h1 className="text-3xl mb-6">

StudySprint Login

</h1>



<input

className="w-full p-3 mb-4 text-black rounded"

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>



<input

className="w-full p-3 mb-4 text-black rounded"

placeholder="Password"

type="password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button

onClick={login}

className="w-full bg-blue-600 p-3 rounded"

>

Login

</button>


</div>


</div>

);


}


export default Login;