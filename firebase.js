// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB6zdaSejDIOgw6pkX0pjPIFFvMaqG2Ecg",
  authDomain: "fwproject-8e59a.firebaseapp.com",
  projectId: "fwproject-8e59a",
  storageBucket: "fwproject-8e59a.firebasestorage.app",
  messagingSenderId: "927135111555",
  appId: "1:927135111555:web:a5732c4a7cf20261f37eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and providers
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
