// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg6Vs9mzKqYI5lstjTGbxS1mZ2nVEpApU",
  authDomain: "prepwise-d97f4.firebaseapp.com",
  projectId: "prepwise-d97f4",
  storageBucket: "prepwise-d97f4.firebasestorage.app",
  messagingSenderId: "802461222195",
  appId: "1:802461222195:web:859f3db4a2c83af217aa46",
  measurementId: "G-X8GW01KMFQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)