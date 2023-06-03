// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// put the needed charsets into 4 arrays so they can be referenced through-out the code

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];

function userInput() {

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

  // create an empty string within a variable where the randomised characters will be stored. That variable is the one we will be display in the browser box. Also create an empty array so that we can use conditionals to .concat the user's choices into a new array
  var pass = "";
  var allPossibleChars = [];

  // get all the user choices that are now inside the 'choices' variable, by assigning each item from the choices array to a variable

  var charAmount = choices[0]
  var includeLowercase = choices[1]
  var includeUppercase = choices[2]
  var includeNumbers = choices[3]
  var includeSpecial = choices[4]

  // we need to use conditionals so that we can create a new array with the updated user choices. This can be done with if statements, and then if true, .concat that char set into the new array
  if (includeLowercase) {
    allPossibleChars = allPossibleChars.concat(lowercase);
  }
  if (includeUppercase) {
    allPossibleChars = allPossibleChars.concat(uppercase);
  }
  if (includeNumbers) {
    allPossibleChars = allPossibleChars.concat(numbers);
  }
  if (includeSpecial) {
    allPossibleChars = allPossibleChars.concat(specialChars);
  }
  
  // create a for loop with the new array, that loops for the length of the amount user input, and that will generate a random character from the user chosen char sets each time into our empty string
  for (var count = 0; count < charAmount; count++) {
    var randomNum = Math.random();
    var randomIndex = Math.floor(randomNum * charAmount.length);

    pass += allPossibleChars[randomIndex];
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
