
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC162fQ2XMu7NyUNiCWl1gJ3yEmZ4lDcig",
    authDomain: "chatapp-pet.firebaseapp.com",
    projectId: "chatapp-pet",
    storageBucket: "chatapp-pet.appspot.com",
    messagingSenderId: "138860051099",
    appId: "1:138860051099:web:b6f507124b00b8a014a43e",
    measurementId: "G-C4PJFCW99B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
