// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzftoL6lJhzwmIkqSj_lRqB5cJQl18JM8",
    authDomain: "genius-car-survices.firebaseapp.com",
    projectId: "genius-car-survices",
    storageBucket: "genius-car-survices.appspot.com",
    messagingSenderId: "1065308201505",
    appId: "1:1065308201505:web:459f4675901442e9517960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
