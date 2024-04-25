import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-5fb7d.firebaseapp.com",
    projectId: "mern-blog-5fb7d",
    storageBucket: "mern-blog-5fb7d.appspot.com",
    messagingSenderId: "397110949560",
    appId: "1:397110949560:web:9630fd9d485689a1b3264d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);