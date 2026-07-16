const verifyToken = async(req,res,next)=>{


    req.user = {

        uid:"demo-user",

        email:"demo@studysprint.com"

    };


    next();


};


module.exports = verifyToken;