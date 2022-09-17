// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let sourcestring =""
  // window.alert (selection);
let selection = window.prompt ("Choose your password length (8-128 characters)");
let numericselection = Number(selection);
console.log(typeof Number(selection));
console.log (selection);
window.alert ('you selected ' + numericselection);
//If number is greater than 8 and less than 128 then the seletion would be valid
if((numericselection >= 8) && (numericselection <= 128)) {
  window.alert("Valid Selection")
}
//if number is less than 8 and greater than 128 then selection would be invalid
else {
  window.alert("Invalid Selection")
  //when return null function is exectued in this fuction it will stop the rest and return "null" (not a string quotes used to tell message that would be sent back)
  return null;
}
//prompt with validation 
let uppercase = window.prompt ("Would you like uppercase characters?");
console.log (uppercase);

if ((uppercase =="Yes") || (uppercase =="yes")|| (uppercase=="Y") || (uppercase=="y")) {
  window.alert ("Selected yes")
 sourcestring = sourcestring + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
else {
  window.alert("You didn't select yes")
}
//prompt with validation 
let lowercase= window.prompt ("Would you like lowercase characters?");
console.log (lowercase);

if((lowercase =="Yes") || (lowercase =="yes")|| (lowercase=="Y")|| (lowercase=="y")) {
  window.alert ("Selected yes")
  sourcestring = sourcestring + "abcdefghijklmnopqrstuvwxyz"
}
else {
  window.alert("You didn't select yes")
}
//prompt with validation 
let numeric= window.prompt ("Would you like numeric characters?");
console.log(numeric);

if((numeric =="Yes") || (numeric =="yes")|| (numeric=="Y")|| (numeric=="y")) {
  window.alert ("Selected yes")
  sourcestring = sourcestring + "0123456789"
}
else {
  window.alert("You didn't select yes")
}
//prompt with validation 
let special= window.prompt ("Would you like special characters?");
console.log (special);

if((special =="Yes") || (special =="yes")|| (special=="Y")|| (special=="y")) {
  window.alert ("Selected yes")
  sourcestring = sourcestring + "!@#$%^&*()"
}
else {
  window.alert("You didn't select yes")
}
if ((sourcestring.length ==0)){
  window.alert ("Can not generate password")
}
//console.log (sourcestring);ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789, abcdefghijklmnopqrstuvwxyz!@#$%^&*()

let password="";
//run a for loop to help pick all characters that need to be picked by the selection var
//in the below for loop it will run to check to see if the value of i is zero and then go through the loop and keep checking the values in succession of each case ie. checking to see if numercialselection is greater than i and then stopping once at that value
for (var i = 0; i < numericselection; i++) {
  console.log ("This is the current value of i" + i);
  //max would be the sourcestring.length because we wouldn't want to fetch a character outside of the sourcestring that we implemented
  //the -1 would be needed becuase we are using the random number to access the index from an array and due to the fact that length doesn't start from zero
 let random= Math.floor(Math.random() * (sourcestring.length -1));
 console.log(random)
 //the reason its sourcestring [random] is because of the fact that it would be selecting random characters from the sourestring aka going through the prompts
 let selectedchar= sourcestring[random];
 console.log (selectedchar);
 //I would need to "Fetch" "[]" the values of sourcestring to allow for the for loop to add characters
 //this allows us to save the characters already selected and passwords already created
 password= password + selectedchar;
}
console.log (sourcestring);
console.log (password);

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
