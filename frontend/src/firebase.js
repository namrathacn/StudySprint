import { initializeApp, getApps } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {

  apiKey: "AIzaSyDnDFao7fbxbdsDKSyNTC9oETGYcjJV1Z0",

  authDomain: "studysprint-95ab6.firebaseapp.com",

  projectId: "studysprint-95ab6",

  storageBucket: "studysprint-95ab6.firebasestorage.app",

  messagingSenderId: "578323263172",

  appId: "1:578323263172:web:51a65efb59cf810ce7a391"

};





const app = getApps().length

? getApps()[0]

: initializeApp(firebaseConfig);





const auth = getAuth(app);



export { auth };