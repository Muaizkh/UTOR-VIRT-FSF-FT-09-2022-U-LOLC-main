//created an object
//array of choices
//best practice is declaring everything at the top
var choices = ["R", "P", "S"];
         window.alert ("I want to play Rock, Paper, Scissors.");
var win =0
var lose =0
var draw =0

//call function to allow to start the game
// first prompt user
//then save game into variable, will all be in the functions
//defining the function and creating it
function playgame() {
    var randomnumber = Math.floor(Math.random() * 3);
    var computer =choices[randomnumber] 
    var user =window.prompt ("What is your choice? R,P, or S");   
    //gives the user the message of what the computer chose
    window.alert("computer chose " + computer)
    // if statment that allows user to win/lose/draw "in this case == is to && is what its comparing the choice to
if ((user== "R"&& computer=="S") ||(user== "S"&& computer=="P")||(user== "P"&& computer=="R")) {
    window.alert("Congrats!")
    win ++
}
else if (user==computer){
    window.alert("Draw")
    //will take the draw value to add to what is on the left of the equation
    draw ++
}
//else is the end of the if statment if the other conditions are not met
else {
    window.alert("Loser")
    lose ++
} 
    window.confirm("R, P, or S")
    window.prompt("wins" +win , "loses" +lose, "draws" +draw)
}


// if you're statment its an alert
//if you're asking for input its a prompt
// if you're asking a yes or no question
//calling the function so it starts
playgame ()