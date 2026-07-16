const express=require("express");

const router=express.Router();

const {db}=require("../config/firebase");

const verifyToken=require("../middleware/authMiddleware");



router.use(verifyToken);





router.get("/",async(req,res)=>{


try{


const snapshot=await db

.collection("tasks")

.where("uid","==",req.user.uid)

.get();




const tasks=[];



snapshot.forEach(doc=>{


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







router.post("/",async(req,res)=>{


try{


const data={

...req.body,

uid:req.user.uid,

createdAt:new Date()

};




const doc=await db

.collection("tasks")

.add(data);




res.json({

id:doc.id,

...data

});



}

catch(error){


res.status(500).json({

message:error.message

});


}


});







router.put("/:id",async(req,res)=>{


try{


await db

.collection("tasks")

.doc(req.params.id)

.update(req.body);



res.json({

message:"Task updated"

});



}

catch(error){


res.status(500).json({

message:error.message

});


}



});








router.delete("/:id",async(req,res)=>{


try{


await db

.collection("tasks")

.doc(req.params.id)

.delete();



res.json({

message:"Deleted"

});



}

catch(error){


res.status(500).json({

message:error.message

});


}



});




module.exports=router;