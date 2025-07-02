function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => { window.location.href = "dashboard.html"; })
    .catch((error) => { alert(error.message); });
}
