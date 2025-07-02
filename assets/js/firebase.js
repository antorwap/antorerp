import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyATseaFdrJ6JvDCyxMrB98q3xm1R3KW0Ao",
  authDomain: "antorerp.firebaseapp.com",
  projectId: "antorerp",
  storageBucket: "antorerp.appspot.com",
  messagingSenderId: "348094724361",
  appId: "1:348094724361:web:0e71de2ba92145d2037bd8",
  measurementId: "G-367MZ8RMBZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
