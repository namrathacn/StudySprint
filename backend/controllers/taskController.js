const { db } = require("../config/firebase");



const addTask = async(req,res)=>{

    try{


        const task = {

            title: req.body.title,

            subject: req.body.subject,

            priority: req.body.priority || "Medium",

            completed:false,

            userId:"demo-user",

            createdAt:new Date()

        };


        const docRef =
        await db.collection("tasks").add(task);


        res.json({

            message:"Task added successfully",

            id:docRef.id

        });


    }catch(error){

        console.log(error);

        res.status(500).json({

            message:error.message

        });

    }

};





const getTasks = async(req,res)=>{

    try{


        const snapshot =
        await db.collection("tasks").get();



        const tasks=[];



        snapshot.forEach((doc)=>{


            const data = doc.data();


            if(data.userId==="demo-user"){


                tasks.push({

                    id:doc.id,

                    title:data.title || "",

                    subject:data.subject || "",

                    priority:data.priority || "Medium",

                    completed:data.completed || false

                });


            }


        });



        console.log(tasks);


        res.json(tasks);



    }catch(error){

        console.log(error);


        res.status(500).json({

            message:error.message

        });

    }

};





const updateTask = async(req,res)=>{


    try{


        await db.collection("tasks")
        .doc(req.params.id)
        .update({

            completed:req.body.completed

        });


        res.json({

            message:"Updated"

        });


    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





const deleteTask = async(req,res)=>{


    try{


        await db.collection("tasks")
        .doc(req.params.id)
        .delete();


        res.json({

            message:"Deleted"

        });


    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};




module.exports={

addTask,

getTasks,

updateTask,

deleteTask

};