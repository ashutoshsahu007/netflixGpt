// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2-OrvFySjHyFJRDL7A0kmatKU4gNFzyA",
  authDomain: "netflixgpt-58a2d.firebaseapp.com",
  projectId: "netflixgpt-58a2d",
  storageBucket: "netflixgpt-58a2d.appspot.com",
  messagingSenderId: "958982746844",
  appId: "1:958982746844:web:a443d04f646847446dfa19",
  measurementId: "G-QEFCBSMG3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
