// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyASxvHl_9wFz6GBRaeJQf3WgSrxMuOw4TY",
  authDomain: "musician-hub-c7b12.firebaseapp.com",
  projectId: "musician-hub-c7b12",
  storageBucket: "musician-hub-c7b12.appspot.com",
  messagingSenderId: "149470258389",
  appId: "1:149470258389:web:c2ce3fe26dea1f057f2e5c",
  measurementId: "G-SEYHVW78K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);