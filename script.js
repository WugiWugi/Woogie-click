
const passwordField = document.getElementById('password');
const icon = document.getElementById('toggle-password');

icon.addEventListener('click', function () {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    icon.innerHTML = '<img src="./image/input/eye.svg" alt="closed eye icon">';
  } else {
    passwordField.type = 'password';
    icon.innerHTML = '<img src="./image/input/eye-slash.svg" alt="open eye icon">';
  }
});

function toggleSwitch() {
  const toggle = document.getElementById("toggle");
  const background = document.getElementById("background");

  const shapeRight = document.querySelector(".bacground_shapes_right");
  const shapeRight2 = document.querySelector(".bacground_shapes_right2");
  const shapeLeft = document.querySelector(".bacground_shapes_left");

  const logo = document.querySelector(".logo");

  const signInButton = document.querySelector(".registration_form__sing_in");

  const currentBackgroundColor = window.getComputedStyle(background).backgroundColor;
  toggle.classList.toggle("checked");


  if (currentBackgroundColor === "rgb(33, 72, 192)") {  
    background.style.backgroundColor = "rgb(32, 32, 32)"; 
    
    shapeRight.style.backgroundColor = "rgb(109, 109, 109)";
    shapeRight2.style.backgroundColor = "rgb(172, 172, 172)";
    shapeLeft.querySelector('path').setAttribute('fill', 'rgb(109, 109, 109)'); 
    /* background */
    signInButton.style.backgroundColor = "#161616";
    signInButton.style.borderColor = "#161616";
    /* byttom */

    logo.querySelector('path').setAttribute('fill', "rgb(32, 32, 32)"); 
  } else {
    background.style.backgroundColor = "rgb(33, 72, 192)";  
    
    shapeRight.style.backgroundColor = "#264ECA";
    shapeRight2.style.backgroundColor = "#264ECA";
    shapeLeft.querySelector('path').setAttribute('fill', '#264ECA');
    /* background */
    signInButton.style.backgroundColor = "rgb(33, 72, 192)";
    signInButton.style.borderColor = "rgb(33, 72, 192)";
    /* byttom */

    logo.querySelector('path').setAttribute('fill', "rgb(33, 72, 192)"); 
  }
}

