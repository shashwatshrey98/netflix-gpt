// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANrtupXOcOioCaFsUII5B0fpt6l1qmJJ4",
  authDomain: "netflixgpt-433bc.firebaseapp.com",
  projectId: "netflixgpt-433bc",
  storageBucket: "netflixgpt-433bc.appspot.com",
  messagingSenderId: "731030804045",
  appId: "1:731030804045:web:7e3db95ed503c1b80e2e04",
  measurementId: "G-5MZGGEGN1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);