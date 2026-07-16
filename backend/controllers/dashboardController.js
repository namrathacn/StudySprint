const { db } = require("../config/firebase");


const getDashboard = async(req,res)=>{

    try{


        const snapshot =
        await db.collection("tasks").get();



        let total = 0;

        let completed = 0;



        snapshot.forEach((doc)=>{


            const task = doc.data();



            if(task.userId==="demo-user"){


                total++;


                if(task.completed===true){

                    completed++;

                }


            }


        });



        res.json({

            totalTasks: total,

            completedTasks: completed,

            pendingTasks: total-completed

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};



module.exports = {

    getDashboard

};