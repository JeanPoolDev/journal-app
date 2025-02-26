// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp2IAYYLUT0T5aRxqGnv3P5AFzpf9hFaI",
  authDomain: "journal-app-only.firebaseapp.com",
  projectId: "journal-app-only",
  storageBucket: "journal-app-only.firebasestorage.app",
  messagingSenderId: "955769834215",
  appId: "1:955769834215:web:8eb779d994b9ac8b31f042"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp); 