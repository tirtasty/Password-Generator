// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array

var lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz");
var upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numeric = Array.from("1234567890");
var symbol = Array.from(".,<>/?;:[{]}\|=+-_)(*&^%$#@!~`");
var storePassword = [];


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
  lower: randomLower(),
  upper: randomUpper(),
  symbol: randomSymbol(),
  number: randomNumber()
};

// CHECK IF FUNCTION IS WORKING
console.log(randomLower());
console.log(randomUpper());
console.log(randomSymbol());
console.log(randomNumber());

//CHECKLIST

var characterAmount = window.prompt("Please, input character between 8 - 128");
  if (characterAmount < 8 || characterAmount > 128 ){
    window.alert("Number in Invalid");
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


//ARRAY OF OPTION
var arrayQuestion = [{askLower}, {askUpper}, {askNumber}, {askSymbol}].filter
(
  item => Object.values(item)[0]
)
console.log(arrayQuestion);



//CONCAT FILTER CHECKING
console.log(storePassword);

//LOOPING TO GET PASSWORD
for (var i = 0; i < characterAmount ; i += optionCount){
  arrayQuestion.forEach(type => {
    var random = Object.keys(type)[0];
    console.log('random:', random);

    generatePass += randomFunc[random];
  });
  }



// Write password to the #password input
function writePassword() {
  generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
