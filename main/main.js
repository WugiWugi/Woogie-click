document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle_");
  
  toggleSwitch.addEventListener("click", function () {
      toggleSwitch.classList.toggle("checked");
      
      const isChecked = toggleSwitch.classList.contains("checked");
      
      document.querySelector(".gif").style.background = isChecked 
          ? 'url("./image/gif/971c050e35973418a2dcd26a13db62419bfa6f73a48271256942b3ad7edb76e2.gif")' 
          : 'url("./image/gif/1e966e1e40f196f9f97159a99584e75feab88331104263f093a319b9f7451e56.gif")';
      
      document.body.style.backgroundColor = isChecked ? "rgb(32, 32, 32)" : "#2148c0";
      
      document.querySelector(".logo").style.color = isChecked ? "rgb(32, 32, 32)" : "#2148c0";
      
      document.querySelector(".Name").style.color = isChecked ? "rgb(32, 32, 32)" : "#2148c0";
  });
});