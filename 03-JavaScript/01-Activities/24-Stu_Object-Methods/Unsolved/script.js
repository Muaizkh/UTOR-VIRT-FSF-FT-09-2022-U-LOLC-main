var chosenPet = "Lulu";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//Debug the code below 
function dogMessage() {
  //got rid of chosenPet name as it was not neccessary
   console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!");
   // added shelter so .apptMessage could pull information from the var
   shelter.apptMessage();
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage();
}

if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
  //added shelter to .cats to make sure it references the var info
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  //added shelter to .dogs to source the var
  console.log("Check out our featured dog, " + shelter.dogs[0] + ". or our featured cat, " + shelter.cats[1]);
}
  
