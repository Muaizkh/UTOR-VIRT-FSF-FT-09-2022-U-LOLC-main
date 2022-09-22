// added var to some of the id's that have been added to the HTML to allow use in the javascript

let startbutton = document.getElementById("startbutton");
let questionerEl = document.getElementById("questioner");
let starterEl = document.getElementById ("starter");
let scoresEl = document.getElementById("scores");

let timeLeft = 75;
let score = 0;
let currentQuestion = 0;
let currentHighScore =JSON.parse(localStorage.getItem("highscore"));
// added questions from memeory as well as the exmaples and google search
// added brackets to make sure that they are setup as strings. let/var allows me to create the questions and answer/answers allows for selection of the things
let questions = [
    {
    Question: "What is used to access the workings of an HTML page?",
    correctAnswer: "Inspect",
    answers: ["Print", "Cast", "Save", "Inspect"],
},
{
    Question: "What does HTML stand for?",
    correctAnswer: "HyperText Markup Language",
    answers: ["HighText Machine Language", "HyperText and Links Markup Language", "HyperText Markup Language", "none"],
},
{
    Question: "Is an Array a collection of items and data stored in contagious memory?", 
    correctAnswer: "True",
    answers: ["True", "False"],
},
{ 
    Question: "What can be used to log information that can be opened in inspect, in a browser?",
    correctAnswer: "console.log",
    answers: ["console.log", "console.information", "console.what", "console.why"],
},
{
    Question: "What is a subsitute of a variable?",
    correctAnswer: "let",
    answers: ["let", "cry", "try", "lid"],
},
{
    Question: "Commonly used data types DO NOT include?",
    correctAnswer: "alerts",
    answers: ["Numbers", "Strings", "Booleans", "Alerts"],
},
];
// adding fuctions to start the quiz and timer and will also have to add if statements to them to make sure that the things will work accordingly such as quiz ending, storing score and also writing the questions
function startTimer() {
    let testTimer = setInterval(function() {
timeLeft--;
    if (timeLeft <=0) {
        timeLeft = 0;
        finishQuiz();
        clearInterval(testTimer);
    }
    // create let that allows use to interact with testTimer and then assign it text content and an amount left for the quiz
let timerEl = document.getElementById ("testTimer");
timerEl.textContent = timeLeft;
    }, 1000);
}

function startQuiz () {
    clearSections ();
    questionerEl.setAttribute("style", "display: block");
    starterEl.setAttribute("style", "display: none");
    score = 0;
    startTimer(75);
    startQuestion();
}
function finishQuiz () {
    clearSections()
    questionerEl.setAttribute("style", "display: none");
    starterEl.setAttribute("style", "display: block");
    displayScore();
}
function displayScore() {
    let player ={
        name:"muaiz",
        score: score,
    };
    let playerScoreEl = document.getElementById("playerScoreEl");
    let highScoreEl = document.getElementById("highScore");
    currentHighScore = JSON.parse (localStorage.getElementById("highScore"));
    playerScoreEl.textContent = player.score;
    if (!currentHighScore || player.score > currentHighScore.score) {
        localStorage.setItem("highscore", JSON.stringify(player));
        highScoreEl.textContent = `${player.score} Brand New High Score`;
    }else{
        highScoreEl.textContent = currentHighScore.score;
    }
}
function startQuestion (){
    let questionEl = document.getElementById("question");
    if (currentQuestion <questions.length) {
        let questionReal = questions [currentQuestion];
        questionEl.textContent = questionReal.question;
        
        let answerEl = document.getElementById ("answers");
        answerEl.innerHTML = "";
        for (let i = 0; i < questionReal.answers.length; i++){
            answerEl.textContent = questionReal.answers[i];
            answerEl.addEventListener ("click", () => {
                answerChoice (questionReal.answers [i], currentQuestion);
                currentQuestion++;
                startQuestion();
            });
            answerEl.appendChild (answerEl);
        }

    } else {
        timeLeft = 0;
    }
}

function answerChoice (answer, questionList) {
    let resultsEl = document.getElementById ("answerResults");
    if (questions [questionList].correctAnswer === answer) {
    resultsEl.textContent = `${answer} - Correct`;
    score++
} else {
    resultsEl.textContent = `${answer} -Incorrect`;
    timeLeft -=10;
}
}

// add event listen to allow for quiz to actually start
startbutton.addEventListener("click", startQuiz);