const express = require("express");
const router = express.Router();

const { db } = require("../config/firebase");



router.get("/", async (req, res) => {

    try {


        const taskSnapshot = await db.collection("tasks").get();

        const timerSnapshot = await db.collection("timers").get();



        let totalTasks = 0;

        let completedTasks = 0;

        let sessions = 0;



        taskSnapshot.forEach((doc)=>{


            const task = doc.data();


            totalTasks++;


            if(task.completed === true){

                completedTasks++;

            }


        });





        timerSnapshot.forEach(()=>{

            sessions++;

        });





        res.json({

            tasks: totalTasks,

            completedTasks: completedTasks,

            sessions: sessions

        });



    }
    catch(error){


        console.log(error);


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;