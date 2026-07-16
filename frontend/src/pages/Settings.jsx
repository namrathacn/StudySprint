import Navbar from "../components/Navbar";

import {
  FiSettings,
  FiBell,
  FiClock,
  FiMoon,
  FiSave,
} from "react-icons/fi";

import { useState } from "react";







function Settings() {



  const [notifications,setNotifications] = useState(true);

  const [timer,setTimer] = useState(25);

  const [saved,setSaved] = useState(false);








  const saveSettings=()=>{


    setSaved(true);


    setTimeout(()=>{


      setSaved(false);


    },2000);



  };








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







          <h1 className="
          text-5xl
          font-black
          ">


            Settings



          </h1>







          <p className="
          text-slate-400
          mt-3
          ">


            Customize your StudySprint experience.



          </p>









          <div className="
          mt-10
          space-y-6
          ">








            {/* General */}



            <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            ">








              <div className="
              flex
              items-center
              gap-4
              ">



                <FiSettings className="
                text-emerald-400
                text-3xl
                "/>





                <h2 className="
                text-3xl
                font-black
                ">


                  General



                </h2>



              </div>







              <input


                placeholder="Display Name"



                className="
                mt-6
                w-full
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-3
                outline-none
                "


              />







            </div>









            {/* Notification */}



            <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            ">







              <div className="
              flex
              items-center
              gap-4
              ">



                <FiBell className="
                text-emerald-400
                text-3xl
                "/>





                <h2 className="
                text-3xl
                font-black
                ">


                  Notifications



                </h2>



              </div>







              <div className="
              flex
              justify-between
              items-center
              mt-6
              ">



                <p className="
                text-slate-300
                ">


                  Study reminders



                </p>







                <button


                  onClick={()=>setNotifications(!notifications)}



                  className={`
                  w-14
                  h-7
                  rounded-full
                  ${notifications ? "bg-emerald-500" : "bg-slate-600"}
                  `}
                >



                  <div className={`
                  w-5
                  h-5
                  bg-white
                  rounded-full
                  transition
                  ${notifications ? "translate-x-8" : "translate-x-1"}
                  `} />


                </button>







              </div>







            </div>









            {/* Timer */}



            <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            ">







              <div className="
              flex
              items-center
              gap-4
              ">



                <FiClock className="
                text-emerald-400
                text-3xl
                "/>





                <h2 className="
                text-3xl
                font-black
                ">


                  Default Timer



                </h2>



              </div>







              <select


                value={timer}


                onChange={(e)=>setTimer(e.target.value)}



                className="
                mt-6
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-5
                py-3
                "



              >



                <option value="15">
                  15 Minutes
                </option>



                <option value="25">
                  25 Minutes
                </option>



                <option value="45">
                  45 Minutes
                </option>



                <option value="60">
                  60 Minutes
                </option>



              </select>







            </div>









            {/* Appearance */}



            <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            ">







              <div className="
              flex
              items-center
              gap-4
              ">



                <FiMoon className="
                text-emerald-400
                text-3xl
                "/>





                <h2 className="
                text-3xl
                font-black
                ">


                  Appearance



                </h2>



              </div>







              <p className="
              text-slate-400
              mt-4
              ">


                Dark mode is enabled



              </p>







            </div>









            <button


              onClick={saveSettings}



              className="
              flex
              items-center
              justify-center
              gap-3
              w-full
              bg-emerald-500
              text-black
              font-black
              py-4
              rounded-2xl
              "



            >


              <FiSave />


              {saved ? "Saved!" : "Save Settings"}



            </button>







          </div>







        </div>







      </main>







    </div>



  );


}



export default Settings;