import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApeSn8TG6eLyi8_vL7DkhnhstlrXSmaL4",
  authDomain: "mister-coffee-763ae.firebaseapp.com",
  projectId: "mister-coffee-763ae",
  storageBucket: "mister-coffee-763ae.firebasestorage.app",
  messagingSenderId: "509437818681",
  appId: "1:509437818681:web:c3dc65a762f6c254df5ae8"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
