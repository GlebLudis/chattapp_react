import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDyfz2uCdpXUOKO7EWuuT_YZF0rohhcucw",
    authDomain: "chat-app-1510d.firebaseapp.com",
    projectId: "chat-app-1510d",
    storageBucket: "chat-app-1510d.appspot.com",
    messagingSenderId: "715365818599",
    appId: "1:715365818599:web:76d894099766a5a1818242"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()




