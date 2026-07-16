import Navbar from "../components/Navbar";

import {
  FiUser,
  FiBookOpen,
  FiTarget,
  FiClock,
  FiEdit,
} from "react-icons/fi";







function Profile() {



  const stats = [



    {
      title:"Study Hours",
      value:"120+",
      icon:<FiClock />
    },



    {
      title:"Tasks Completed",
      value:"85",
      icon:<FiBookOpen />
    },



    {
      title:"Goals Achieved",
      value:"24",
      icon:<FiTarget />
    }



  ];







  return (



    <div className="
    min-h-screen
    bg-[#020617]
    text-white
    ">







      <Navbar />







      <main className="
      pt-32
      px-6
      pb-20
      ">







        <div className="
        max-w-5xl
        mx-auto
        ">








          <div className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          ">







            <div className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-8
            ">








              <div className="
              w-32
              h-32
              rounded-full
              bg-emerald-500
              flex
              items-center
              justify-center
              text-black
              ">


                <FiUser size={60}/>



              </div>









              <div className="
              text-center
              md:text-left
              ">







                <h1 className="
                text-5xl
                font-black
                ">


                  Student Profile



                </h1>







                <p className="
                text-slate-400
                mt-3
                ">


                  Keep improving your learning journey with StudySprint.



                </p>







                <button className="
                mt-5
                flex
                items-center
                gap-3
                bg-emerald-500
                text-black
                font-bold
                px-6
                py-3
                rounded-xl
                ">


                  <FiEdit />


                  Edit Profile



                </button>







              </div>








            </div>







          </div>









          <div className="
          grid
          md:grid-cols-3
          gap-6
          mt-10
          ">







            {


              stats.map((item,index)=>(



                <div


                  key={index}


                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  text-center
                  "



                >






                  <div className="
                  flex
                  justify-center
                  text-emerald-400
                  text-4xl
                  ">


                    {item.icon}



                  </div>







                  <h2 className="
                  text-4xl
                  font-black
                  mt-5
                  ">


                    {item.value}



                  </h2>







                  <p className="
                  text-slate-400
                  mt-2
                  ">


                    {item.title}



                  </p>







                </div>



              ))



            }







          </div>









          <div className="
          mt-10
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          ">







            <h2 className="
            text-3xl
            font-black
            ">


              Achievements



            </h2>








            <div className="
            mt-6
            grid
            md:grid-cols-2
            gap-5
            ">







              <div className="
              bg-white/5
              rounded-2xl
              p-5
              ">


                🏆 Consistency Champion



              </div>








              <div className="
              bg-white/5
              rounded-2xl
              p-5
              ">


                🎯 Goal Master



              </div>







            </div>







          </div>







        </div>







      </main>







    </div>



  );


}



export default Profile;