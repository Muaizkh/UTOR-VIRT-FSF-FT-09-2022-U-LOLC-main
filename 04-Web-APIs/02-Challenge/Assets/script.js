var body = document.body; 
var h1El = document.createElement("h1");
var imgEl =document.createElement ("img");
var infoEl = document.createElement("div");
var quizEl = document.createElement("div");

body.appendChild(h1El);
body.appendChild(infoEl);
body.appendChild(quizEl);

h1El.textContent = "Coding Quiz Time!";
infoEl.textContent = "The following timed quiz is to test your knowledge of HTML, CSS, and JavaScript so far.";

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "")
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");

