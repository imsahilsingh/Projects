let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let form = document.getElementById("form");
let messgae = document.querySelector(".message");
let u_patern = /^\w\d\.\_/;
// console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  check();
});

let check = () => {
  if (username.value.trim() === "") {
    fix(username, "username cant't be empty");
    console.log("error");
  } else {
    suceess(username);
  }
  if (email.value.trim() === "") {
    fix(email, "email cant't be empty");
    console.log("error");
  } else {
    suceess(email);
  }
  if (password.value.trim() === "") {
    fix(password, "password cant't be empty");
    console.log("error");
  } else {
    suceess(password);
  }
  if (cpassword.value.trim() === "") {
    fix(cpassword, "password cant't be empty");
    console.log("error");
  }
  else if (password.value.trim() !== cpassword.value.trim()) {
    fix(cpassword, "password doesn't match");
  } else {
    suceess(cpassword);
  }
};
let fix = (input, message) => {
  const control_form = input.parentElement;
  const messag = control_form.querySelector(".message");
  console.log(messag);
  control_form.className = "control-form fail";
  messag.innerHTML = message;
};
let suceess = (input) => {
  console.log("sucess");
  const control_form = input.parentElement;
  control_form.className = "control-form sucess";
};

