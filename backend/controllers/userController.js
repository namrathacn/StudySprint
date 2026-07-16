const { db } = require("../config/firebase");

const {
    doc,
    setDoc,
    getDoc
} = require("firebase-admin/firestore");



const createProfile = async(req,res)=>{

    try{

        const {name} = req.body;


        await setDoc(

            doc(
                db,
                "users",
                req.user.uid
            ),

            {

                uid:req.user.uid,

                name:name,

                email:req.user.email,

                createdAt:new Date()

            }

        );


        res.json({

            message:"Profile created"

        });


    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};





const getProfile = async(req,res)=>{

    try{


        const userDoc =
        await getDoc(

            doc(
                db,
                "users",
                req.user.uid
            )

        );



        if(!userDoc.exists()){

            return res.json({

                message:"Profile not found"

            });

        }



        res.json(userDoc.data());



    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



module.exports={

    createProfile,

    getProfile

};