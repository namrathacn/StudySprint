const express = require("express");

const router = express.Router();

const { db } = require("../config/firebase");

const verifyToken = require("../middleware/authMiddleware");


router.use(verifyToken);




// GET TASKS

router.get("/", async(req,res)=>{


try{


const snapshot = await db
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







// ADD TASK

router.post("/", async(req,res)=>{


try{


const data={


...req.body,

uid:req.user.uid,

createdAt:new Date()


};




const doc = await db
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








// UPDATE TASK

router.put("/:id", async(req,res)=>{


try{


const docRef = db
.collection("tasks")
.doc(req.params.id);



const doc = await docRef.get();



if(!doc.exists){

return res.status(404).json({

message:"Task not found"

});

}



if(doc.data().uid !== req.user.uid){


return res.status(403).json({

message:"Unauthorized"

});


}





await docRef.update(req.body);



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









// DELETE TASK

router.delete("/:id", async(req,res)=>{


try{


const docRef = db
.collection("tasks")
.doc(req.params.id);



const doc = await docRef.get();



if(!doc.exists){


return res.status(404).json({

message:"Task not found"

});


}



if(doc.data().uid !== req.user.uid){


return res.status(403).json({

message:"Unauthorized"

});


}





await docRef.delete();



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





module.exports = router;