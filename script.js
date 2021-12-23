// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var resetButton = document.getElementById("reset")


//Array

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "12345678901234567890"
var symbol = ".<>/?;:[{]}\|=+-_)(*&^%$#@!~`"
var generatePass = [];

//CHECKLIST

function generatePassword(){
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
  var storePassword = "";
  if (askLower){
  storePassword = storePassword + lowerCase;
}
  if (askUpper){
  storePassword = storePassword + upperCase;
}
  if (askNumber){
  storePassword = storePassword + numeric;
}
  if (askSymbol){
  storePassword = storePassword + symbol;
}
  //CONCAT FILTER CHECKING
  console.log(storePassword); 

  ;
//LOOPING TO GET PASSWORD
  for (var i = 0; i < characterAmount ; i ++){
    var random = storePassword[Math.floor(Math.random() * storePassword.length)]
    generatePass.push(random);
    console.log(random)
    var password = generatePass.join('')
    passwordText.value = password;
}
};

function clearArea(){
  passwordText.value = "";
}

resetButton.addEventListener('click', clearArea, false)

// Write password to the #password input
function writePassword() {
  clearArea();                     
  generatePassword();
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
