const express=require("express");

const router=express.Router();

const {db}=require("../config/firebase");

const verifyToken=require("../middleware/authMiddleware");



router.use(verifyToken);



router.post("/",async(req,res)=>{


try{


await db.collection("timers").add({

uid:req.user.uid,

duration:req.body.duration,

createdAt:new Date()

});



res.json({

message:"Session saved"

});


}

catch(error){


res.status(500).json({

message:error.message

});


}


});



module.exports=router;