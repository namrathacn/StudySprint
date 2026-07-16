const express = require("express");
const router = express.Router();

const admin = require("firebase-admin");

const { db } = require("../config/firebase");



// Register user

router.post("/register", async(req,res)=>{


    try{


        const {uid,email,name}=req.body;



        await db.collection("users").doc(uid).set({


            name:name,

            email:email,

            createdAt:new Date()


        });



        res.json({

            message:"User registered successfully"

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





// Login check

router.post("/login", async(req,res)=>{


    try{


        const {uid}=req.body;



        const user = await db.collection("users").doc(uid).get();



        if(!user.exists){


            return res.status(404).json({

                message:"User not found"

            });


        }



        res.json(user.data());



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;