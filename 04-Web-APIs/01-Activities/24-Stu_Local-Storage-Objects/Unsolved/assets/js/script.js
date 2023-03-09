var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  var obj=[{
    firstN: firstNameInput.value.trim(),
    lastN:lastNameInput.value.trim(),
    email:emailInput.value.trim(),
    password:passwordInput.value.trim()
  }]
  localStorage.setItem("obj",JSON.stringify(obj));
  //localStorage.getItem("obj");
  // TODO: Create user object from submissio

  // TODO: Set new submission to local storage 
  
});
