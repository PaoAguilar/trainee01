const form = document.querySelector(".form");
const fields = [
  "name",
  "lastname",
  "age",
  "checkbox",
  "phone",
  "experience",
  "website",
  "email",
  "password",
  "password_confirmation",
];

const validateOnSubmit = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fields.forEach((field) => {
      const input = document.querySelector(`#${field}`);

      //   console.log("HI");
      // console.log(age.value);

      validateFields(input);
      // const answer = document.querySelector(`.${field}`).values;
      // console.log(answer);
    });
  });
};

const validateOnEntry = () => {
  fields.forEach((field) => {
    const input = document.querySelector(`#${field}`);
    input.addEventListener("input", (event) => {
      validateFields(input);
    });
  });
  console.log("si llega");
};

const validateFields = (field) => {
  // Check is not an empty values

  if (field.value.trim() === "") {
    setStatus(
      field,
      `${field.previousElementSibling.innerText} cannot be blank`,
      "error"
    );
  } else {
    setStatus(field, null, "success");
  }
  //   check the name is not a number
  if (field.id === "name") {
    const re = /^[A-Za-z]\w+/;
    if (field.value.trim() === "") {
      setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      );
    } else if (re.test(field.value)) {
      setStatus(field, null, "success");
    } else {
      setStatus(field, "Numbers are not allowed", "error");
    }
  }
  //   check the lastname is not a number
  if (field.id === "lastname") {
    const re = /^[A-Za-z]\w+/;
    if (field.value.trim() === "") {
      setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      );
    } else if (re.test(field.value)) {
      setStatus(field, null, "success");
    } else {
      setStatus(field, "Numbers are not allowed", "error");
    }
  }

  // check for a valid age
  if (field.id === "age") {
    if (field.value > 17 && field.value < 96) {
      setStatus(field, null, "success");
    } else {
      setStatus(
        field,
        "Please enter an integer number greater than 17",
        "error"
      );
    }
  }

  // check for a valid phone
  if (field.id === "phone") {
    const re = /(?:^\d{4}[- ]?\d{4}$)/;
    if (re.test(field.value)) {
      setStatus(field, null, "success");
    } else {
      setStatus(field, "Please enter a valid phone number", "error");
    }
  }

  // check for a valid website
  if (field.id === "website") {
    const re = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/;
    if (re.test(field.value)) {
      setStatus(field, null, "success");
    } else {
      setStatus(field, "Please enter a valid url", "error");
    }
  }

  // check for a valid email address
  if (field.id === "email") {
    const re = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
    if (re.test(field.value)) {
      setStatus(field, null, "success");
    } else {
      setStatus(field, "Please enter a valid email address", "error");
    }
  }

  // Password confirmation edge case
  if (field.id === "password_confirmation") {
    const passwordField = form.querySelector("#password");

    if (field.value.trim() == "") {
      setStatus(field, "Password confirmation required", "error");
    } else if (field.value != passwordField.value) {
      setStatus(field, "Password does not match", "error");
    } else {
      setStatus(field, null, "success");
    }
  }

  // checkbox validation
  if (field.type === "checkbox") {
    if (!checkbox.checked) {
      setStatus(field, "Please accept the terms", "error");
    } else {
      setStatus(field, null, "success");
    }
  }
};

const setStatus = (field, message, status) => {
  const successIcon = field.parentElement.querySelector(".icon-success");
  const errorMessage = field.parentElement.querySelector(".error-message");

  if (status === "success") {
    if (errorMessage) {
      errorMessage.innerText = ""; // If success, then remove de error message
    }
    successIcon.classList.remove("hidden");
    // field.classList.add("input-success");
    field.classList.remove("input-error");
  }

  if (status === "error") {
    if (successIcon) {
      successIcon.classList.add("hidden"); // If error, the remove the success icon
    }
    field.parentElement.querySelector(".error-message").innerText = message;
    field.classList.add("input-error");
  }
};

validateOnSubmit();
validateOnEntry();
