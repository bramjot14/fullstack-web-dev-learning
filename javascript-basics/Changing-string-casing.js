/****************************************************
 Challenge: Changing String Casing

 Instructions:
 1. Ask the user to enter their name using a prompt.
 2. Capitalize only the first letter of the name.
 3. Convert the remaining letters of the name to lowercase.
 4. Combine the capitalized first letter with the rest of the name.
 5. Greet the user using an alert with the correctly formatted name.

 Example:
 Input:  aNgElA
 Output: Hello, Angela

 ****************************************************/

// Ask user for their name
var name = prompt("What is your name?");

// Extract the first character
var firstChar = name.slice(0, 1);

// Convert first character to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

// Extract the rest of the name
var restOfName = name.slice(1, name.length);

// Convert the remaining characters to lowercase
restOfName = restOfName.toLowerCase();

// Combine the formatted parts
var capitalisedName = upperCaseFirstChar + restOfName;

// Display greeting
alert("Hello, " + capitalisedName);
