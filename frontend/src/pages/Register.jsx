import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { apiRequest } from "../services/api";
import { useNavigate } from "react-router-dom";



function Register() {


    const [name,setName] = useState("");

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const navigate = useNavigate();





    const register = async()=>{


        try{


            const userCredential = await createUserWithEmailAndPassword(

                auth,

                email,

                password

            );



            const user = userCredential.user;




            await apiRequest("/auth/register",{


                method:"POST",


                body:JSON.stringify({


                    uid:user.uid,

                    name:name,

                    email:email


                })


            });





            navigate("/login");



        }
        catch(error){


            console.log(error.message);


        }


    };






    return (

        <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">


            <div className="bg-slate-800 p-10 rounded-xl w-96">


                <h1 className="text-3xl font-bold mb-8">

                    Register

                </h1>




                <input

                placeholder="Name"

                value={name}

                onChange={(e)=>setName(e.target.value)}

                className="w-full bg-slate-700 p-3 rounded mb-4"

                />





                <input

                placeholder="Email"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

                className="w-full bg-slate-700 p-3 rounded mb-4"

                />





                <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e)=>setPassword(e.target.value)}

                className="w-full bg-slate-700 p-3 rounded mb-6"

                />






                <button

                onClick={register}

                className="w-full bg-blue-600 py-3 rounded cursor-pointer"

                >

                    Create Account

                </button>



            </div>


        </div>

    );


}


export default Register;