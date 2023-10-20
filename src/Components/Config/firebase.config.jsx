// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5itM6iD1ot2KcQaTHqKm_uJYCQPLEsF4",
  authDomain: "carshow-as10.firebaseapp.com",
  projectId: "carshow-as10",
  storageBucket: "carshow-as10.appspot.com",
  messagingSenderId: "973273761327",
  appId: "1:973273761327:web:86940843143d190041a8da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;