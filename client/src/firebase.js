// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKa-eihazi1C5JqKp7cNXak2YNsv8_O1U",
  authDomain: "flourish-62261.firebaseapp.com",
  projectId: "flourish-62261",
  storageBucket: "flourish-62261.appspot.com",
  messagingSenderId: "1044483081435",
  appId: "1:1044483081435:web:342873f794dbf4a2abb8fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
