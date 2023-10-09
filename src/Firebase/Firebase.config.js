// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTyhr9Oe4vmYiNQK3_LixiZSaW58Yi-zU",
  authDomain: "e-sports-74d44.firebaseapp.com",
  projectId: "e-sports-74d44",
  storageBucket: "e-sports-74d44.appspot.com",
  messagingSenderId: "176644471952",
  appId: "1:176644471952:web:44eb5279691f7524552c15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
