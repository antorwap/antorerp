
import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Login
document.getElementById('btnLogin')?.addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(e => alert(e.message));
});

// Signup
document.getElementById('btnSignup')?.addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(e => alert(e.message));
});

// Protect dashboard
onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes('dashboard') && !user) {
    window.location.href = 'index.html';
  }
});

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', () => {
  signOut(auth).then(() => window.location.href = 'index.html');
});
