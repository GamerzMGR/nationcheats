const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  const email = loginEmail.value;
  const password = loginPassword.value;

  if (email === 'gamerzmgrgm@gmail.com' && password === 'reflexx_44') {
    // Login successful, redirect to index.html
    window.location.href = 'index.html';
  } else {
    // Login failed, show error message
    alert('Invalid email or password');
  }
});