import { useState } from "react";

import {
createUserWithEmailAndPassword
} from "firebase/auth";


import {
doc,
setDoc
} from "firebase/firestore";


import { auth, db } from "../firebase";


import { useNavigate } from "react-router-dom";





function Register(){


const navigate = useNavigate();



const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");







const register = async(e)=>{


e.preventDefault();



try{



const result = await createUserWithEmailAndPassword(

auth,

email,

password

);





const user = result.user;



const token = await user.getIdToken();





localStorage.setItem(

"token",

token

);





localStorage.setItem(

"user",

JSON.stringify({

email:user.email,

uid:user.uid

})

);









// CREATE FIRESTORE PROFILE

await setDoc(

doc(db,"users",user.uid),

{


email:user.email,

uid:user.uid,

role:"student",

createdAt:new Date()

}


);







navigate("/dashboard");



}

catch(error){


console.log(error);


setError(error.message);


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

<p className="
text-red-400
mb-4
">

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

Register

</button>





</form>



</div>


);


}



export default Register;