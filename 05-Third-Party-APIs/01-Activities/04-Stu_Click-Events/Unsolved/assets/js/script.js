// changed from looking for class to ID instead (. changed to #)
var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}
// Changed double click feature as read me wants to have a single click
passwordBtnEl.on('click', function () {
  var newPassword = passwordGenerator(15);
  console.log (newPassword);
  passwordDisplayEl.text(newPassword);
});
