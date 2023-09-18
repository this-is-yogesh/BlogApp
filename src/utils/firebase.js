// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-5b2cf.firebaseapp.com",
  projectId: "blog-5b2cf",
  storageBucket: "blog-5b2cf.appspot.com",
  messagingSenderId: "218212866550",
  appId: "1:218212866550:web:547dedbc99ec2244fd8fd7",
  measurementId: "G-37Z238VR2P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
