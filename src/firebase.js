import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBajbYKpL--eNatFAjT--8QnTzMsbzMFm0",
  authDomain: "projectfw-562d3.firebaseapp.com",
  projectId: "projectfw-562d3",
  storageBucket: "projectfw-562d3.firebasestorage.app",
  messagingSenderId: "216117335790",
  appId: "1:216117335790:web:c1a5b59d5bbcc330ff45ff",
  measurementId: "G-WV5Y8XW6T0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
