var show_password = document.getElementById("show_password");
var password_show_input = document.querySelectorAll(".password");
show_password.addEventListener("click", function () {
  for (var i = 0; i < password_show_input.length; i++) {
    if (password_show_input[i].type === "password") {
      password_show_input[i].setAttribute("type", "text");
    } else {
      password_show_input[i].setAttribute("type", "password");
    }
  }
});
// SGINUP FORM 3D ANIMATION CODE HERE
var SgunUP_form = document.querySelector("#SgunUP_form");
SgunUP_form.addEventListener("mousemove", function (e) {
  var x = (window.innerWidth / 2 - e.pageX) / 15;
  var y = (window.innerWidth / 2 - e.pageY) / 15;
  SgunUP_form.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
SgunUP_form.addEventListener("mouseleave", function () {
  SgunUP_form.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // SgunUP_form.style.transition='.5s ease';
});
var username = document.querySelector(".username"),
  email = document.querySelector(".email"),
  phone = document.querySelector(".Phone"),
  password = document.querySelector(".password"),
  confirm_password = document.querySelector(".confirm_password"),
  checkbox = document.querySelector("#checkbox"),
  SginUP_btn = document.querySelector("#SginUP_btn");
SginUP_btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value == "") {
    console.log("username emty");
    username.style.borderColor = "red";
  } else if (email.value == "") {
    console.log("email is emty");
    email.style.borderColor = "red";
  } else if (phone.value == "") {
    console.log("phone is emty");
    phone.style.borderColor = "red";
  } else if (password.value < 8) {
    console.log("password will be max 8 over");
    password.style.borderColor = "red";
  } else if (
    !password.value === !confirm_password.value &&
    !password.length === !confirm_password.length
  ) {
    console.log("password duss not match");
    confirm_password.style.borderColor = "red";
  } else {
    console.log("all input feild is emty pleasel first....!");
    username.style.borderColor = "red";
    email.style.borderColor = "red";
    phone.style.borderColor = "red";
    password.style.borderColor = "red";
    confirm_password.style.borderColor = "red";
  }

  var josnOBJ = {
    name: username,
    email: email,
    phone: phone,
    password: password,
    confirm_pass: confirm_password,
  };

  // fetch("SginUp_form.html",{
  //   method:"post",
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(josnOBJ)
  // }).then((response)=>response.json()).then((results)=>{
  //   console.log(results);
  // })
});
