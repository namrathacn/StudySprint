import { Link, useNavigate } from "react-router-dom";

import {
  FiMail,
  FiLock,
} from "react-icons/fi";







function Login() {



  const navigate = useNavigate();






  const handleLogin=(e)=>{


    e.preventDefault();


    navigate("/dashboard");


  };







  return (



    <div className="
    min-h-screen
    bg-[#020617]
    text-white
    flex
    items-center
    justify-center
    px-6
    ">








      <div className="
      w-full
      max-w-md
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-10
      ">








        <h1 className="
        text-5xl
        font-black
        text-center
        ">


          Welcome Back



        </h1>







        <p className="
        text-slate-400
        text-center
        mt-3
        ">


          Login to continue your StudySprint journey.



        </p>









        <form

          onSubmit={handleLogin}

          className="
          mt-8
          space-y-5
          "

        >







          <div className="
          flex
          items-center
          gap-3
          bg-white/10
          border
          border-white/10
          rounded-xl
          px-4
          ">


            <FiMail className="
            text-emerald-400
            "/>






            <input


              type="email"


              placeholder="Email"


              className="
              bg-transparent
              w-full
              py-3
              outline-none
              "



              required


            />



          </div>









          <div className="
          flex
          items-center
          gap-3
          bg-white/10
          border
          border-white/10
          rounded-xl
          px-4
          ">



            <FiLock className="
            text-emerald-400
            "/>







            <input


              type="password"


              placeholder="Password"


              className="
              bg-transparent
              w-full
              py-3
              outline-none
              "



              required


            />



          </div>









          <button


            type="submit"



            className="
            w-full
            bg-emerald-500
            text-black
            font-black
            py-4
            rounded-2xl
            hover:bg-emerald-400
            transition
            "



          >


            Login



          </button>







        </form>









        <p className="
        text-center
        text-slate-400
        mt-8
        ">


          Don't have an account?



          <Link

            to="/signup"

            className="
            text-emerald-400
            ml-2
            "

          >

            Sign up


          </Link>



        </p>







      </div>







    </div>



  );


}



export default Login;