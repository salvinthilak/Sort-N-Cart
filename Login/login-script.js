var btn = document.getElementById("btn");

function leftClick() {
  btn.style.left = "0";
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "block";
}

function rightClick() {
  btn.style.left = "140px";
  document.getElementById("signup").style.display = "block";
  document.getElementById("login").style.display = "none";
}

var signup = document.getElementById("SignUp");
var login = document.getElementById("Login");

function login() {
  alert("Login Sucessful");
}
