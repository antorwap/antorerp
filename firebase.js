
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATseaFdrJ6JvDCyxMrB98q3xm1R3KW0Ao",
  authDomain: "antorerp.firebaseapp.com",
  projectId: "antorerp",
  storageBucket: "antorerp.firebasestorage.app",
  messagingSenderId: "348094724361",
  appId: "1:348094724361:web:0e71de2ba92145d2037bd8",
  measurementId: "G-367MZ8RMBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
