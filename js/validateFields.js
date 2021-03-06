import { setStatus } from "./setStatus.js";
const form = document.querySelector(".form");
export const validateFields = (field) => {
  let isValid = false;

  //   check the name is not a number
  if (field.id === "name") {
    const re = /^[A-ZÀ-ÿa-z\ ]+$/;
    if (field.value === "") {
      setStatus(field, `${field.id} cannot be blank`, "error");
    } else if (re.test(field.value)) {
      setStatus(field, null, "success");
      isValid = true;
    } else {
      setStatus(field, "Numbers are not allowed", "error");
    }
  }

  //   check the lastname is not a number
  if (field.id === "lastname") {
    const re = /^[A-ZÀ-ÿa-z\ ]+$/;
    if (field.value === "") {
      setStatus(field, `${field.id} cannot be blank`, "error");
    } else if (re.test(field.value)) {
      setStatus(field, null, "success");
      isValid = true;
    } else {
      setStatus(field, "Numbers are not allowed", "error");
    }
  }

  // check for a valid age
  if (field.id === "age") {
    if (field.value > 17 && field.value < 96) {
      setStatus(field, null, "success");
      isValid = true;
    } else {
      setStatus(
        field,
        "Please enter an integer number between 18 and 95",
        "error"
      );
    }
  }

  // check for a valid phone
  if (field.id === "phone") {
    const re = /(?:^\d{4}[- ]?\d{4}$)/;
    if (re.test(field.value)) {
      setStatus(field, null, "success");
      isValid = true;
    } else {
      setStatus(field, "Please enter a valid phone number", "error");
    }
  }

  // check level experience
  if (field.id === "experience") {
    setStatus(field, null, "success");
    isValid = true;
  }

  // check for a valid website
  if (field.id === "website") {
    const re = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/;
    if (re.test(field.value)) {
      setStatus(field, null, "success");
      isValid = true;
    } else {
      setStatus(field, "Please enter a valid url", "error");
    }
  }

  // check for a valid email address
  if (field.id === "email") {
    const re = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
    if (re.test(field.value)) {
      setStatus(field, null, "success");
      isValid = true;
    } else {
      setStatus(field, "Please enter a valid email address", "error");
    }
  }

  // check password
  if (field.id === "password") {
    const re = /[a-z0-9_-]{6,18}/;
    if (field.value === "") {
      setStatus(field, `${field.id} cannot be blank`, "error");
    } else if (re.test(field.value)) {
      setStatus(field, null, "success");
      isValid = true;
    } else {
      setStatus(field, "Password length at least 6 ", "error");
    }
  }

  // Password confirmation
  if (field.id === "password_confirmation") {
    const passwordField = form.querySelector("#password");

    if (field.value == "") {
      setStatus(field, "Password confirmation required", "error");
    } else if (field.value != passwordField.value) {
      setStatus(field, "Password does not match", "error");
    } else {
      setStatus(field, null, "success");
      isValid = true;
    }
  }

  // checkbox validation
  if (field.type === "checkbox") {
    if (!checkbox.checked) {
      setStatus(field, "Please accept the terms", "error");
    } else {
      setStatus(field, null, "success");
      isValid = true;
    }
  }

  return isValid;
};
