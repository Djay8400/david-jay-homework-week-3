// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
/*
generateBtn.addEventListener("click", writePassword);
*/

generateBtn.addEventListener("click", function() {
  question1();
  question2();
  question3();
  question4();
  question5();
})

function question1() {
  var howMany = prompt("How many characters would you like it to be? Enter any number from 8 - 128");
}

function question2() {
  var whichKind = prompt("Pick a type of character to use. Your choices are Uppercase, Lowercase, Numbers, or Special Characters");
}

function question3() {
  var extra1 = prompt("Would you like to include (1)");
}

function question4() {
  var extra2 = prompt("Would you like to include (2)");
}

function question5() {
  var extra3 = prompt("Would you like to include (3)");
}
