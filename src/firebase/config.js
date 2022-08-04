
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC7jr_oI0D7B4RDV-8ckVF6bMj07nd9lOY",
    authDomain: "poliester-web.firebaseapp.com",
    projectId: "poliester-web",
    storageBucket: "poliester-web.appspot.com",
    messagingSenderId: "580606019229",
    appId: "1:580606019229:web:768714cc7e82aaed24b674"
};

const app = initializeApp(firebaseConfig);

export const firebaseConnections = ()=> app  