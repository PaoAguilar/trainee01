const keyPressedArray = [];
const code = "trainee01";
const codeLength = code.length;

const keyUpHandler = (e) => {
  keyPressed = e.key;
  lowerKey = keyPressed.toLowerCase();
  keyPressedArray.push(lowerKey);
  keyPressedArray.splice(-codeLength - 1, keyPressedArray.length - codeLength);
  let keyPressedString = keyPressedArray.join("");
  if (keyPressedString === code) {
    konamiStatus("success");
  }
};

const konamiStatus = (status) => {
  const success = document.querySelector(".gif");
  const instructions = document.querySelector(".instructions");
  const tryAgain = document.querySelector(".try-again");
  if (status === "success") {
    instructions.style.visibility = "hidden";
    success.classList.remove("hidden");
    tryAgain.classList.remove("hidden");
  }
};
window.addEventListener("keyup", keyUpHandler);
