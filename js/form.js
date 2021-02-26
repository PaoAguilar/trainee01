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

let registerButton = (document.querySelector(".button").disabled = true);

const validateForm = () => {
  let validForm = true;
  for (const fieldKey in fields) {
    validForm = validForm && fields[fieldKey];
  }
  registerButton = document.querySelector(".button").disabled = !validForm;
};

const validateOnSubmit = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (const fieldKey in fields) {
      const input = document.querySelector(`#${fieldKey}`);
      console.log(`Field: ${fieldKey} Value: ${input.value}`);
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
