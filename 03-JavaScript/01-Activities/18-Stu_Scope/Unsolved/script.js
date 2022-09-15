// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
// added global var of shout 
var shout = "shout";

function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  var animal = "Lions";
  console.log(animal);
  return;
}
//added var animal tigers so function can locate it locally
function sayTigers() {
  var animal = "Tigers";
  console.log("and " + animal + " and "); 
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 
var bears = "Bears";
//var is declared globally so we removed the local var that stated Pandas
function sayBears() {
    console.log(bears + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
//removed global scope of variable
function singAlong() {
  //added local scope of var "sing" to be accessed by both functions
  var sing = "Sing";
  console.log(sing + ",");
  var singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}
singAlong();
