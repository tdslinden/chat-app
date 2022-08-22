// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVutGAFXUWGwzaKkz-Oj-2VYIlBxVFtSI",
  authDomain: "chat-app-cc.firebaseapp.com",
  projectId: "chat-app-cc",
  storageBucket: "chat-app-cc.appspot.com",
  messagingSenderId: "85542708240",
  appId: "1:85542708240:web:2e0d314ea1d9e29e779695",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
