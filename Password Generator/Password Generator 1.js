const passwordInput = document.querySelector(".password-input"),
  copyIcon = document.querySelector(".copy-icon"),
  rangeInput = document.querySelector(".range-box input"),
  rangeNumber = document.querySelector(".range-box .range-number"),
  generateBtn = document.querySelector(".generate-btn");

let num = "1234567890";
let abc = "abcdefghijklmnopqrstuvwxyz";
let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let etc = "^!$%&|[](){}:;.,*+-#@<>~";

let allCharacters = "";

const updateAllCharacters = () => {
    allCharacters = "";
    
    if (document.querySelector(".numbers").checked) {
        allCharacters += num;
    }
    
    if (document.querySelector(".abbc").checked) {
        allCharacters += abc;
    }
    
    if (document.querySelector(".ABBC").checked) {
        allCharacters += ABC;
    }
    
    if (document.querySelector(".ETC").checked) {
        allCharacters += etc;
    }
    
    if (allCharacters === "") {
        allCharacters = "Please select at least one option";
    }
};

document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        updateAllCharacters();
        generatePassword();
    });
});

rangeInput.addEventListener("input", () => {
    rangeNumber.innerText = rangeInput.value;
    generatePassword();
});

const generatePassword = () => {
    let newPassword = "";

    if (allCharacters === "Please select at least one option") {
        newPassword = allCharacters;
    } else {
        for (let i = 0; i < rangeInput.value; i++) {
            let randomNumbers = Math.floor(Math.random() * allCharacters.length);
            newPassword += allCharacters[randomNumbers];
        }
    }
    
    console.log(newPassword);

    passwordInput.value = newPassword;
    copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //replace icon
};

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
});

updateAllCharacters();
generatePassword();
generateBtn.addEventListener("click", generatePassword);