// auth/login/script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Аутентификация пользователя с помощью Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Получаем пользователя
        const user = userCredential.user;
        alert("User logged in successfully!");
      })
      .catch((error) => {
        console.error("Error logging in user: ", error);
        alert("Error logging in user: " + error.message);
      });
  });
  