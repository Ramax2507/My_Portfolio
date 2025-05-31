// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDNtdaCqVA9t8MLnvtpGK-3VHsRw1qdEg",
  authDomain: "ramachanthar-dev.firebaseapp.com",
  projectId: "ramachanthar-dev",
  storageBucket: "ramachanthar-dev.firebasestorage.app",
  messagingSenderId: "430703456600",
  appId: "1:430703456600:web:c8d84f9543e918a7f7f52d",
  measurementId: "G-ZBT7N56TNQ"
};


const app = initializeApp(firebaseConfig);

export default app;
