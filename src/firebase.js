// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCEVL6jwsz4qqR-PWYKCsz4sODsDKZ_eE",
  authDomain: "hello-world-f67f7.firebaseapp.com",
  projectId: "hello-world-f67f7",
  storageBucket: "hello-world-f67f7.appspot.com",
  messagingSenderId: "295816176339",
  appId: "1:295816176339:web:38d0acf0c24640422c2a26",
  measurementId: "G-56B8FFE09Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
