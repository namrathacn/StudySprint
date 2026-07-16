const express = require("express");
const router = express.Router();

const { db } = require("../config/firebase");



// GET TASKS
router.get("/", async(req,res)=>{


    try{


        const snapshot = await db.collection("tasks").get();


        const tasks = [];


        snapshot.forEach((doc)=>{


            tasks.push({

                id:doc.id,

                ...doc.data()

            });


        });


        res.json(tasks);


    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





// ADD TASK
router.post("/", async(req,res)=>{


    try{


        const {title,subject}=req.body;



        if(!title || !subject){


            return res.status(400).json({

                message:"Title and Subject required"

            });


        }



        const newTask = await db.collection("tasks").add({


            title:title,

            subject:subject,

            completed:false,


        });



        res.json({

            id:newTask.id,

            message:"Task added"

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});







// UPDATE TASK STATUS
router.put("/:id", async(req,res)=>{


    try{


        console.log("Updating ID:", req.params.id);

        console.log("New value:", req.body.completed);



        await db.collection("tasks")

        .doc(req.params.id)

        .set({

            completed:req.body.completed

        },{merge:true});



        res.json({

            message:"Task status updated"

        });



    }
    catch(error){


        console.log(error);


        res.status(500).json({

            message:error.message

        });


    }


});






// DELETE TASK
router.delete("/:id", async(req,res)=>{


    try{


        await db.collection("tasks")

        .doc(req.params.id)

        .delete();



        res.json({

            message:"Task deleted"

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;