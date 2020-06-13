// Assignment Code
var generateBtn = document.querySelector("#generate");

// need to create a bunch of arrays that represent each of the different type of characters,numbers, letters, etc.
// you can use the .split(), or lowercase method, or uppercase method, etc

// (special characters)
var specChar = ["!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@","^","_","~"];
// (numbers)
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
// (lowercase)
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// (uppercase)
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var possibleCharacters=[];


// Create generatePassword
  // prompt user for password strength
var passwordLengthInput = prompt("How many characters do you want in your password? Enter a number between 8 - 128.");
// console.log(passwordLength);
// convert user input passwordLength from a string to an integer
passwordLengthInput = parseInt(passwordLengthInput);
// console.log(passwordLength);
// if passwordLengthinput is a number between 8-128, store passwordLengthInput as variable passwordLength. If not a valid numerical input, prompt user for valid number until true.
if (passwordLengthInput >= 8 && passwordLengthInput <= 128) {
    var specCharInput = confirm("Would you like special characters in your generated password?");
  } else {while (passwordLengthInput < 8 || passwordLengthInput > 128) {
    passwordLengthInput = prompt("Please enter a valid number between 8 - 128");
    if (passwordLengthInput >= 8 && passwordLengthInput <= 128) {
      var specCharInput = confirm("Would you like special characters in your generated password?");
    }
}
}
// console.log(specCharInput)
// confirm whether user wants special characters in password
if (specCharInput == true) {
    possibleCharacters = possibleCharacters.concat(specChar);
}
// console.log(possibleCharacters);
// confirm whether user wants numbers in password
var numInput = confirm("Would you like numbers included your generated password?");
if (numInput == true) {
    possibleCharacters = possibleCharacters.concat(numbers);
}
// console.log(possibleCharacters);
// confirm whether user wants lower case letters in password
var lowerCaseInput = confirm("Would you like lower case letters included in your generated password?");
if (lowerCaseInput == true) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
}
// console.log(possibleCharacters);
// confirm whether user wants upper case letters in password
var upperCaseInput = confirm("Would you like upper case letters included in your generated password?");
if (upperCaseInput == true) {
    possibleCharacters = possibleCharacters.concat(upperCase);
}
console.log(possibleCharacters);

// when possibleCharacters array completed, build a password

var passwordStr=""

// return passwordStr

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
