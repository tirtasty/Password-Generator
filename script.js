// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array

var lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz");
var upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numeric = Array.from("1234567890");
var symbol = Array.from(".,<>/?;:[{]}\|=+-_)(*&^%$#@!~`");
var storePassword = [];

//CHECKLIST

var characterAmount = window.prompt("Please, input character between 8 - 128");
  if (characterAmount < 8 || characterAmount > 128 ){
    window.alert("Number is Invalid");
    characterAmount = 8;
  };
//CHECK THE VALUE EITHER STRING OR NUMBER
console.log("value" , characterAmount)

var askLower = window.confirm("Include lowercase letter?");
var askUpper = window.confirm("Include uppercase letter?");
var askSymbol = window.confirm("Include symbol?");
var askNumber = window.confirm("Include number?");

//FILTER FOR PASSWORD
if (askLower === true){
  storePassword = storePassword.concat(lowerCase)
}
if (askUpper === true){
  storePassword = storePassword.concat(upperCase)
}
if (askNumber === true){
  storePassword = storePassword.concat(numeric)
}
if (askSymbol === true){
  storePassword = storePassword.concat(symbol)
}

//CONCAT FILTER CHECKING
console.log(storePassword);


var generatePass = [];
//LOOPING TO GET PASSWORD
for (var i = 0; i < characterAmount ; i ++){
  
  var random = storePassword[Math.floor(Math.random() * storePassword.length)]
  generatePass.push(random)
}

// Write password to the #password input
function writePassword() {
  var password = generatePass.join('')
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
