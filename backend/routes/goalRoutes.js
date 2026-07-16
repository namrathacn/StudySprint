const express=require("express");

const router=express.Router();

const {db}=require("../config/firebase");

const verifyToken=require("../middleware/authMiddleware");


router.use(verifyToken);





router.get("/",async(req,res)=>{


try{


const snapshot=await db

.collection("goals")

.where("uid","==",req.user.uid)

.get();



const goals=[];



snapshot.forEach(doc=>{


goals.push({

id:doc.id,

...doc.data()

});


});



res.json(goals);



}

catch(error){


res.status(500).json({

message:error.message

});


}



});







router.post("/",async(req,res)=>{


try{


const goal={


...req.body,

uid:req.user.uid,

createdAt:new Date()


};




const doc=await db

.collection("goals")

.add(goal);




res.json({

id:doc.id,

...goal

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

.collection("goals")

.doc(req.params.id)

.update(req.body);



res.json({

message:"Goal updated"

});


}

catch(error){


res.status(500).json({

message:error.message

});


}



});






module.exports=router;