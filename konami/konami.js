const keyPressedArray = [];
const code = "trainee";
const codeLength = code.length;

const keyUpHandler = (e) => {
  //   console.log(e);
  keyPressed = e.key;
  lowerKey = keyPressed.toLowerCase();
  keyPressedArray.push(lowerKey);
  keyPressedArray.splice(
    //   empieza a buscar desde el ultimo indice
    -codeLength - 1, //si no pongo el menos 1 diria que son 7 letras el tamano pero el splice toma indices entonces seria hasta el indice 6, de 0 a 6
    keyPressedArray.length - codeLength // va a eliminar lo que ingrese el usuario menos el lago del codigo (7)
  );
  let keyPressedString = keyPressedArray.join("");
  let keyPressedStringLength = keyPressedString.length;
  if (codeLength === keyPressedStringLength && keyPressedString != code) {
    location.reload();
  } else if (
    codeLength === keyPressedStringLength &&
    keyPressedString === code
  ) {
    console.log("DONE");
    konamiStatus("success");
  }
  console.log(keyPressedString);
  //   console.log(keyPressedArray);
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
