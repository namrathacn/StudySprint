const { initializeApp, cert } = require("firebase-admin/app");

const { getFirestore } = require("firebase-admin/firestore");

require("dotenv").config();


const serviceAccount = require("../firebase-service-account.json");



initializeApp({

    credential: cert(serviceAccount)

});



const db = getFirestore();



console.log("Firebase Connected Successfully");



module.exports = {

    db

};