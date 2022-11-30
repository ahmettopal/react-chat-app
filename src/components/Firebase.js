// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFwVql7Id3_GzY2tshNUf-qdQ-WBnYbHo",
  authDomain: "chat-app-b5c8c.firebaseapp.com",
  projectId: "chat-app-b5c8c",
  storageBucket: "chat-app-b5c8c.appspot.com",
  messagingSenderId: "976093556537",
  appId: "1:976093556537:web:614b0c25c9f92d171702e8",
  measurementId: "G-WP1RWTP9K3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
