
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRZaGmcA29UllS-5toWWcht6vr1EVIlPc",
    authDomain: "estadisticas-bfdf3.firebaseapp.com",
    projectId: "estadisticas-bfdf3",
    storageBucket: "estadisticas-bfdf3.appspot.com",
    messagingSenderId: "263869670771",
    appId: "1:263869670771:web:b8686f9b75d1814b8fd106"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;