const admin = require("firebase-admin");
const { cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");

require("dotenv").config();


try {


if (admin.apps.length === 0) {


admin.initializeApp({

credential: cert({

projectId: process.env.FIREBASE_PROJECT_ID,

clientEmail: process.env.FIREBASE_CLIENT_EMAIL,

privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g,"\n")

})

});


}



console.log("Firebase Admin Connected Successfully");



}

catch(error){

console.log("Firebase Error:",error.message);

}



const db = getFirestore();

const auth = getAuth();



module.exports = {

admin,

db,

auth

};