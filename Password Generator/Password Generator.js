const passwordInput = document.querySelector(".password-box input"),
  copyIcon = document.querySelector(".password-box .copy-icon"),
  rangeInput = document.querySelector(".range-box input"),
  rengeNumber = document.querySelector(".range-box .renge-number"),
  generateBtn = document.querySelector(".generate-btn");

let allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

rangeInput.addEventListener("input", () => {
  rengeNumber.innerText = rangeInput.value;
  generatePassword();
});

const generatePassword = () => {
  let newPassword = "";

  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumbers = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumbers];
  }

  console.log(newPassword);

  passwordInput.value = newPassword;
  copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
};

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
});

generatePassword();
generateBtn.addEventListener("click", generatePassword);
