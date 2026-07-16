const authService = require("../services/authService");


const register = async (req,res)=>{

    try{

        const {name,email,password}=req.body;


        const user = await authService.createUser(
            email,
            password,
            name
        );


        res.status(201).json({

            message:"User registered successfully",
            uid:user.uid

        });


    }catch(error){

        res.status(400).json({

            message:error.message

        });

    }

};



module.exports={
    register
};