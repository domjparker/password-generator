// Assignment Code
var generateBtn = document.querySelector("#generate");

// need to creat a bunch of arrays that represent each of the different type of
// input categories (special characters, lowercase, uppercase, etc,..)
// you can use the .split(), or lowercase method, or uppercase method, etc

var possibleCharacters=[];

//TODO: Create generatePassword

  //TODO: Prompt the user for password length
    //TODO: store password length in the variable
  // confirm whether user wants special characters
    // store in includeSpecial (booleans)
  // confirm if the user wants numbers
    // store in includeNumbers
  // confirm whether user wnats lowercase
    // store in includeLower
  // confirm whether user wants uppercase
    // store in includeUpper

// if character Boolean is true, add that array to the possible

// remember to use concatenation to combine arrays, or spread in.
// 
// then we have completed possibleCharacters array, build a pas

var passwordStr=""

return passwordStr

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
