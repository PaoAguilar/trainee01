export const setStatus = (field, message, status) => {
  const successIcon = field.parentElement.querySelector(".icon-success");
  const errorMessage = field.parentElement.querySelector(".error-message");

  if (status === "success") {
    if (errorMessage) {
      errorMessage.innerText = "";
    }
    successIcon.classList.remove("hidden");
    field.classList.remove("input-error");
  }

  if (status === "error") {
    if (successIcon) {
      successIcon.classList.add("hidden");
    }
    field.parentElement.querySelector(".error-message").innerText = message;
    field.classList.add("input-error");
  }
};
