const lowercaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "`",
  "~",
  "[",
  "]",
  "{",
  "}",
  "",
  "|",
  ":",
  ";",
  "<",
  ">",
  ",",
  ".",
  "/",
  "?",
];

console.log(lowercaseChar.length);
console.log(uppercaseChar.length);
console.log(numberChar.length);
console.log(specialChar.length);
console.log("specialChar.length");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const generatePassword = () => {
  const passLength = window.prompt(
    "How many characters would you like your password to be?\nEnter a number between 8 and 128"
  );

  const lowercase = window.confirm("Would you like to include lowercase?");

  const uppercase = window.confirm("Would you like to include uppercase?");

  const numeric = window.confirm("Would you like to include numbers?");

  const special = window.confirm(
    "Would you like to include special characters?"
  );

  let charTypes;

  if (lowercase || uppercase || numeric || special) {
    if (lowercase) {
      charTypes = lowercaseChar;
      console.log(charTypes);
    }
    if (uppercase) {
      charTypes = charTypes.concat(uppercaseChar);
      console.log(charTypes);
    }
    if (numeric) {
      charTypes = charTypes.concat(numberChar);
      console.log(charTypes);
    }
    if (special) {
      charTypes = charTypes.concat(specialChar);
      console.log(charTypes);
    }
  } else {
    window.alert("You have to choose at least one.\n\nRestarting...");
    generatePassword();
  }

  // console.log(specialChar.length);

  // let randomChar = Math.floor(Math.random() * charTypes.length);
  // console.log(randomChar);
};
