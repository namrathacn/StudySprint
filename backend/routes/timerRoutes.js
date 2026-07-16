const express = require("express");
const router = express.Router();

const { db } = require("../config/firebase");



router.post("/", async(req,res)=>{


    try{


        const data = req.body;


        await db.collection("timers").add({


            duration: data.duration,

            completedSessions: data.completedSessions,

            createdAt: new Date()


        });



        res.json({

            message:"Timer session saved successfully"

        });


    }
    catch(error){


        console.log(error);


        res.status(500).json({

            message:error.message

        });


    }


});





router.get("/", async(req,res)=>{


    try{


        const snapshot = await db.collection("timers").get();


        const timers = [];


        snapshot.forEach((doc)=>{


            timers.push({

                id:doc.id,

                ...doc.data()

            });


        });



        res.json(timers);


    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;