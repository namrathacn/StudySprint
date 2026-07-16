const express = require("express");

const router = express.Router();


const verifyToken =
require("../middleware/authMiddleware");


const {

createProfile,

getProfile

}=require("../controllers/userController");



router.post(
"/profile",
verifyToken,
createProfile
);



router.get(
"/profile",
verifyToken,
getProfile
);



module.exports=router;