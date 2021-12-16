// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array

var lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz");
var upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numeric = Array.from("1234567890");
var symbol = Array.from(".,<>/?;:[{]}\|=+-_)(*&^%$#@!~`");
var storePassword = [];
var generatePass = "";

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

//OBJECT RANDOM
var randomFunc = {
  lower: randomNumber,
  upper: randomUpper,
  symbol: randomSymbol,
  number: randomNumber
};

// CHECK IF FUNCTION IS WORKING
console.log(randomLower());
console.log(randomUpper());
console.log(randomSymbol());
console.log(randomNumber());

//CHECKLIST

var characterAmount = window.prompt("Please, input charcter between 8 - 128");
  if (characterAmount < 8){
    window.alert("Minimum Character is 8 !");
  }
  else if (characterAmount > 128){
    window.alert("Maximum Character is 128 !");
  }
//CHECK THE VALUE EITHER STRING OR NUMBER
console.log("value" , characterAmount)

var askLower = window.confirm("Include lowercase letter?");
var askUpper = window.confirm("Include uppercase letter?");
var askSymbol = window.confirm("Include symbol?");
var askNumber = window.confirm("Include number?");



//FILTER FOR PASSWORD
if (askLower === true){
  storePassword = storePassword.concat(randomLower())
}
if (askUpper === true){
  storePassword = storePassword.concat(randomUpper())
}
if (askNumber === true){
  storePassword = storePassword.concat(randomNumber())
}
if (askSymbol === true){
  storePassword = storePassword.concat(randomSymbol())
}
//ARRAY OPTION
//CONCAT FILTER CHECKING
console.log(storePassword);


//LOOPING TO GET PASSWORD
var counting = function(){
  for (i = 0; i < characterAmount ; i++){
    console.log("value" , characterAmount)
  }
}

counting();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
