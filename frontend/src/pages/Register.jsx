import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

import { useNavigate, Link } from "react-router-dom";



function Register(){



const navigate = useNavigate();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");

const [loading,setLoading] = useState(false);







const register = async(e)=>{


e.preventDefault();


setError("");

setLoading(true);




try{


const result = await createUserWithEmailAndPassword(

auth,

email,

password

);





const token = await result.user.getIdToken();





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


console.log(err);


if(err.code==="auth/email-already-in-use"){

setError("Email already registered");

}

else if(err.code==="auth/weak-password"){

setError("Password must be at least 6 characters");

}

else{

setError("Registration failed");

}


}

finally{


setLoading(false);


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

onSubmit={register}

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

Create Account

</h1>





<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
p-4
rounded-xl
bg-white/10
mb-4
outline-none
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
outline-none
"

/>





{
error &&

<p className="
text-red-400
mb-4
">

{error}

</p>

}







<button

disabled={loading}

className="
w-full
bg-emerald-500
text-black
py-4
rounded-xl
font-bold
"

>


{
loading
?
"Creating..."
:
"Register"
}


</button>





<p className="
mt-6
text-center
text-slate-400
">

Already have account?

<Link

to="/login"

className="
text-emerald-400
ml-2
"

>

Login

</Link>


</p>






</form>


</div>


);


}



export default Register;