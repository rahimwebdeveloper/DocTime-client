// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChpZa1LzifjOZxMubRhRBlm4XEJ0TPvnE",
    authDomain: "doctime-c36fd.firebaseapp.com",
    projectId: "doctime-c36fd",
    storageBucket: "doctime-c36fd.appspot.com",
    messagingSenderId: "668269916818",
    appId: "1:668269916818:web:36171a224c289bc3da6c4b",
    measurementId: "G-LL8XN05DTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
