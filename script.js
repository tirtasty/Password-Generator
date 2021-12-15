// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array

var lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz");
var upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numeric = Array.from("1234567890");
var symbol = Array.from(".,<>/?;:[{]}\|=+-_)(*&^%$#@!~`");

//RANDOM FUNCTION
function randomLower(){
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function randomUpper(){
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function randomNumber(){
  return numeric[Math.floor(Math.random() * numeric.length)];
}
function randomSymbol(){
  return symbol[Math.floor(Math.random() * symbol.length)];
}

//CHECKLIST

function optionChar(){
  var askCharacter = window.prompt("Please, input charcter between 8 - 128");
  if (askCharacter < 8){
    window.alert("Minimum Character is 8 !");
  }
  else if (askCharacter > 128){
    window.alert("Maximum Character is 128 !");
  }
  var askLower = window.confirm("Include lowercase letter?");
  var askUpper = window.confirm("Include uppercase letter?");
  var askSymbol = window.confirm("Include symbol?");
  var askNumber = window.confirm("Include number?");
}

optionChar();




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
