// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCor4FmROAJfiwbf57VTbApiM5oh8HQUBU",
    authDomain: "real-e-state-application.firebaseapp.com",
    projectId: "real-e-state-application",
    storageBucket: "real-e-state-application.appspot.com",
    messagingSenderId: "498931287706",
    appId: "1:498931287706:web:f627ab8e218b3251564123",
    measurementId: "G-F5F0CFWRT0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);