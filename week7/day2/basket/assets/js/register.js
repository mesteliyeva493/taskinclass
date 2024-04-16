import { User } from "./class.js";

const registerForm = document.querySelector("#register-form");
const userNameInp = document.querySelector("#user-name");
const userEmailInp = document.querySelector("#user-email");
const userPasswordInp = document.querySelector("#user-password");
const userConfirmPassInp = document.querySelector("#user-confirm-password");

function validateInputs(params) {
    const userNameValue=userNameInp.value.trim();
    const userEmailValue=userEmailInp.value.trim();
    // const userPasswordInp=userPasswordInp.value.trim();
    // const userConfirmPassInp=userConfirmPassInp.value.trim()

    if (userNameValue.length <3 ) {
      userNameInp.nextElementSibling.classList.replace('d-none', 'd-block')
    }
    else{
      userNameInp.nextElementSibling.classList.replace('d-block', 'd-none')
    }
    // if(){

    // }
    // else{
    //   return true
    // }
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    const newUser = new User(
      userNameInp.value,
      userEmailInp.value,
      userPasswordInp.value
    );
    resetForm();
    //set user to localStorage
    const localUsers = JSON.parse(localStorage.getItem('users'));
    localUsers.push(newUser);
    localStorage.setItem('users',JSON.stringify(localUsers));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Signed Up successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then((result) => {
      //redirect login page
      window.location.replace("login.html");
    });
  }
  else{
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "User Signed Up successfully",
      showConfirmButton: false,
      timer: 1500,
    })
  }
 
 
});

function resetForm() {
  userNameInp.value = "";
  userEmailInp.value = "";
  userPasswordInp.value = "";
  userConfirmPassInp.value = "";
}
