
const passwordField = document.getElementById('password'); 
const icon = document.getElementById('toggle-password');    

icon.addEventListener('click', function() {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    icon.innerHTML = '<img src="./image/input/eye.svg" alt="closed eye icon">';
  } else {
    passwordField.type = 'password';
    icon.innerHTML = '<img src="./image/input/eye-slash.svg" alt="open eye icon">';
  }
});