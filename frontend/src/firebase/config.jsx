// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlMxerakAxM6rgdOLT84zArTrbvBuUsC8",
  authDomain: "book-store-a3658.firebaseapp.com",
  projectId: "book-store-a3658",
  storageBucket: "book-store-a3658.firebasestorage.app",
  messagingSenderId: "1008320184426",
  appId: "1:1008320184426:web:1cd9a92244326d55cb8a13",
  measurementId: "G-7TC2XLJW6Q"
};

const app = initializeApp(firebaseConfig);
export default app;