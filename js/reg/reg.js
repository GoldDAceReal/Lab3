// auth/reg/script.js
document.getElementById('reg-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Инициализация Firestore
  const db = firebase.firestore();

  // Добавление нового пользователя в коллекцию "users"
  db.collection("users").add({
    username: username,
    email: email,
    password: password // В реальных приложениях пароль должен быть зашифрован
  })
  .then(() => {
    alert("User registered successfully!");
  })
  .catch((error) => {
    console.error("Error adding user: ", error);
    alert("Error registering user: " + error.message);
  });
});
