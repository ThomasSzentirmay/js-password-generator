// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// put the needed charsets into 4 arrays so they can be referenced through-out the code

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];

function (userInput) {

// we store the return value from the user in variables (amount, includeLowercase)

  while(true) {
    var amount = parseInt(prompt('Please provide charcter length'));
  if (amount < 8 || amount > 128) {
    alert('Please enter a character length between 8 and 128!');
    continue;
  }
  var includeLowercase = confirm('Click OK to include lowercase letters');
  var includeUppercase = confirm('Click OK to include uppercase lertters');
  var includeNumbers = confirm('Click OK to include numbers');
  var includeSpecial = confirm('Click OK to include special characters');
  break;
  }

  // return the value of the userInput function into an array

  return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial];

}

function writePassword() {
  // we then store that userInput function into a variable called 'choices'. 'userInput' value is replaced by the value of return, which is an array
  var choices = userInput();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
