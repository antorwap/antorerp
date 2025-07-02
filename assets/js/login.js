
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
