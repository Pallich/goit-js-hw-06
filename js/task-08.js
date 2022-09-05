const myForm = document.querySelector(".login-form");

myForm.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const result = {};
  const emailValue = event.currentTarget.elements.email.value;
  const passValue = event.currentTarget.elements.password.value;

  if (emailValue == "" || passValue == "") {
    alert("Слава Україні!");
  } else {
    result.email = emailValue;
    result.password = passValue;
    event.currentTarget.reset();
  }
  console.log(result);
}

// const myForm = document.querySelector(".login-form");

// myForm.addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   const result = {};
//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     if ((name == "email") & (value != "")) {
//       result.email = value;
//       event.currentTarget.reset();
//     } else if ((name == "password") & (value != "")) {
//       result.password = value;
//       event.currentTarget.reset();
//     } else alert("Слава Україні!");
//   });
//   console.log(result);
// }
