// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // arrays that represent each of the different types of characters,numbers, letters, etc:
  // (special characters)
  var specChar = ["!","#","$","%","&","<",">","?","@","~"];
  // (numbers)
  var numChar = ["0","1","2","3","4","5","6","7","8","9"];
  // (lowercase)
  var lowerChar =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // (uppercase)
  var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var possibleChar=[];


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
    possibleChar = possibleChar.concat(specChar);
  }
  // console.log(possibleCharacters);
  // confirm whether user wants numbers in password
  var numInput = confirm("Would you like numbers included your generated password?");
  if (numInput == true) {
    possibleChar = possibleChar.concat(numChar);
  }
  // console.log(possibleCharacters);
  // confirm whether user wants lower case letters in password
  var lowerCaseInput = confirm("Would you like lower case letters included in your generated password?");
  if (lowerCaseInput == true) {
    possibleChar = possibleChar.concat(lowerChar);
  }
  // console.log(possibleCharacters);
  // confirm whether user wants upper case letters in password
  var upperCaseInput = confirm("Would you like upper case letters included in your generated password?");
  if (upperCaseInput == true) {
    possibleChar = possibleChar.concat(upperChar);
  }
  // console.log(possibleChar);

  if (specCharInput == false && numInput == false && lowerCaseInput == false & upperCaseInput == false)

  // when possibleCharacters array completed, build a password

  var passwordStr=""

  for (var i=0; i<passwordLengthInput; i++) {
    var randomNum = Math.floor(Math.random() * (possibleChar.length+1));
    // console.log(randomNum)
    var randomCharacter = possibleChar[randomNum]
    // console.log(randomCharacter)
    passwordStr += randomCharacter
    // console.log(passwordStr)
  }
  console.log(passwordStr)
  return passwordStr
}

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
