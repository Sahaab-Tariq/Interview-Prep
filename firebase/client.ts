// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY-1ZOUEptx-7-say0bLQfKwri9u68QLs",
  authDomain: "prepwise-a00b6.firebaseapp.com",
  projectId: "prepwise-a00b6",
  storageBucket: "prepwise-a00b6.firebasestorage.app",
  messagingSenderId: "26213125216",
  appId: "1:26213125216:web:8c58d87735d9ffac28c705",
  measurementId: "G-63QDDHNPVD",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
