// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7jr_oI0D7B4RDV-8ckVF6bMj07nd9lOY",
    authDomain: "poliester-web.firebaseapp.com",
    projectId: "poliester-web",
    storageBucket: "poliester-web.appspot.com",
    messagingSenderId: "580606019229",
    appId: "1:580606019229:web:768714cc7e82aaed24b674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseConnections = ()=> app  