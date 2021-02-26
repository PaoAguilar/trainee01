import { validateFields } from "./validateFields.js";
const form = document.querySelector(".form");
const fields = {
  name: false,
  lastname: false,
  age: false,
  checkbox: false,
  phone: false,
  experience: false,
  website: false,
  email: false,
  password: false,
  password_confirmation: false,
};

let registerButton = document.querySelector(".disabled-button");
registerButton.disabled = true;
const validateForm = () => {
  let validForm = true;
  for (const fieldKey in fields) {
    validForm = validForm && fields[fieldKey];
  }
  console.log(`Valid Form ${validForm}`);
  if (validForm === true) {
    registerButton.disabled = false;
    registerButton.classList.remove("disabled-button");
    registerButton.classList.add("button");
  } else {
    registerButton.disabled = true;
  }
};

const validateOnSubmit = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warningText = document.querySelector(".warning");
    let thanksText = document.querySelector(".thanks");
    warningText.style.visibility = "hidden";
    thanksText.classList.remove("hidden");

    for (const fieldKey in fields) {
      const input = document.querySelector(`#${fieldKey}`);
      console.log(`${fieldKey}: ${input.value}`);
    }
    console.log("WELL DONE!");
  });
};

const validateOnEntry = () => {
  for (const fieldKey in fields) {
    const input = document.querySelector(`#${fieldKey}`);
    input.addEventListener("input", (event) => {
      let isValid = validateFields(input);
      fields[fieldKey] = isValid;
      validateForm();
      console.log(fields);
    });
  }
};

validateOnSubmit();
validateOnEntry();
