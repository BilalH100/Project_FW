import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// === Firebase Configs ===
const firebaseConfigV1 = {
  apiKey: "AIzaSyBajbYKpL--eNatFAjT--8QnTzMsbzMFm0",
  authDomain: "projectfw-562d3.firebaseapp.com",
  projectId: "projectfw-562d3",
  storageBucket: "projectfw-562d3.firebasestorage.app",
  messagingSenderId: "216117335790",
  appId: "1:216117335790:web:c1a5b59d5bbcc330ff45ff",
  measurementId: "G-WV5Y8XW6T0",
};

const firebaseConfigV2 = {
  apiKey: "AIzaSyB6zdaSejDIOgw6pkX0pjPIFFvMaqG2Ecg",
  authDomain: "fwproject-8e59a.firebaseapp.com",
  projectId: "fwproject-8e59a",
  storageBucket: "fwproject-8e59a.firebasestorage.app",
  messagingSenderId: "927135111555",
  appId: "1:927135111555:web:a5732c4a7cf20261f37eb6",
};

// === Module state ===
let app;
let auth;
let googleProvider;
let facebookProvider;

// === Initialization function ===
export function initFirebase(version = "v1") {
  if (app) return; // déjà initialisé

  const config = version === "v2" ? firebaseConfigV2 : firebaseConfigV1;
  app = initializeApp(config);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
  facebookProvider = new FacebookAuthProvider();
}

// === Export accessors ===
export function getFirebaseAuth() {
  return auth;
}

export function getGoogleProvider() {
  return googleProvider;
}

export function getFacebookProvider() {
  return facebookProvider;
}
