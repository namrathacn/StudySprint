const { initializeApp } = require("firebase/app");

const {
    getAuth,
    signInWithEmailAndPassword
} = require("firebase/auth");


const firebaseConfig = {

    apiKey: process.env.FIREBASE_API_KEY,

    authDomain: process.env.FIREBASE_AUTH_DOMAIN,

    projectId: process.env.FIREBASE_PROJECT_ID

};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);



const loginUser = async (email, password) => {


    const userCredential =
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


    const user = userCredential.user;


    const token =
        await user.getIdToken();



    return {

        uid: user.uid,

        email: user.email,

        token: token

    };


};



module.exports = {

    loginUser

};