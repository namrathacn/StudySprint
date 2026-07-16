import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Features from "../components/Features";

import Stats from "../components/Stats";

import Footer from "../components/Footer";






function Home() {



  return (



    <div className="
    min-h-screen
    bg-[#020617]
    text-white
    overflow-hidden
    ">







      <Navbar />







      <main>







        <section id="home">


          <Hero />


        </section>








        <section id="features">


          <Features />


        </section>








        <section id="analytics">


          <Stats />


        </section>








        <section id="goals"
        
        className="
        px-6
        py-20
        ">


          <div className="
          max-w-7xl
          mx-auto
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          text-center
          ">


            <h2 className="
            text-5xl
            font-black
            ">


              Set Goals.
              <br />
              Achieve More.



            </h2>






            <p className="
            text-slate-400
            mt-4
            ">


              Create learning goals and stay consistent with StudySprint.



            </p>






          </div>



        </section>








      </main>








      <Footer />







    </div>


  );


}



export default Home;