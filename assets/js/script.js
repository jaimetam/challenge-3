// Assignment Code
var generateBtn = document.querySelector("#generate");



// function for the user too choose the password size , and an alert for the user to choose 100 or less characters 
function passWordLength(){

  let index = prompt("enter the size of your password mut be less than 100 characters");
  
  while (isNaN(index) || parseInt(index) > 100) {
    alert("Please enter a valid number less than 100.");
    index = prompt("Enter the size of your password (must be less than 100 characters):");
  }
  return parseInt(index); 
}

function generatePassword () {
  var passwordSize = passWordLength();


 // logic to get the user confirmation so we can see witch parameters they want
 var includeNumbers = confirm("Do you want to include numbers?");
var includeUpperCase = confirm ( "would you like to add Capital letters ");
var includeLowerCase = confirm( " would you like to add lower cases ");
var includeSpecialCharacters  = confirm( " would you like to add special characters");

var allCharacters="";


var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var UpperCaseLetters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ' ;
var numbers = '0123456789';
var specialCharacters = '!@#$%^&*()_-+=<>?/';


if (includeNumbers){
  allCharacters += numbers;
}

if (includeUpperCase){
  allCharacters += UpperCaseLetters;

}

if(includeLowerCase){

allCharacters += lowerCaseLetters;
}

if(includeSpecialCharacters){

  allCharacters += specialCharacters;

}

if (!includeNumbers && !includeUpperCase && !includeLowerCase && !includeSpecialCharacters){

  alert("You must include at least one type of character. Defaulting to include lowercase letters.");
  allCharacters = lowerCaseLetters ;
}
 

var passwordArray = [];

for ( let i= 0 ;  i <passwordSize; i++ ){
var randomChar = allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
passwordArray.push(randomChar);
}

//function to make the password as random ass possible
for (let i = passwordArray.length - 1 ; i > 0 ; i-- ){
  var j = Math.floor(Math.random() * ( i +1 ));
  [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

 return passwordArray.join('');

}


 //Write password to the #password input
function writePassword() {

var generatedPassword = generatePassword();

 var passwordText = document.querySelector("#password");
 passwordText.textContent = generatedPassword;

 }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


