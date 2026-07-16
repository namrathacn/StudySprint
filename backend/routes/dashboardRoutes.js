const express = require("express");

const router = express.Router();

const {db}=require("../config/firebase");

const verifyToken=require("../middleware/authMiddleware");



router.use(verifyToken);





router.get("/",async(req,res)=>{


try{


const uid=req.user.uid;





const tasksSnapshot=await db

.collection("tasks")

.where("uid","==",uid)

.get();






const goalsSnapshot=await db

.collection("goals")

.where("uid","==",uid)

.get();






const timerSnapshot=await db

.collection("timers")

.where("uid","==",uid)

.get();








let tasks=0;

let completedTasks=0;


let goals=0;

let completedGoals=0;


let sessions=0;






tasksSnapshot.forEach(doc=>{


tasks++;


if(doc.data().completed){

completedTasks++;

}


});








goalsSnapshot.forEach(doc=>{


goals++;


if(doc.data().completed){

completedGoals++;

}


});








timerSnapshot.forEach(doc=>{


sessions++;


});






res.json({

tasks,

completedTasks,

goals,

completedGoals,

sessions

});



}

catch(error){


console.log(error);


res.status(500).json({

message:error.message

});


}



});






module.exports=router;