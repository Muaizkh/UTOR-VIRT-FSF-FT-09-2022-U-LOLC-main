var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// the purpose of this function is to renders and show the TODOs on the browser
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // if speaking of length its talking about an array and or list
  // the functionality of this is to clear the input box
  todoList.innerHTML = "";
  // changes the number of items in the todo list
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // it loops over the todo array and then for each item it creates a list item and complete button next to it and then appends the list to the item and to the bigger list
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// the purpose of this is to initailize the render to do function
// this function starts the code  
function init() {
  // TODO: What is the purpose of the following line of code?
  // this code is to put the items into spereate list items 
  // it converts the todo which is a JSON ojbect to a string
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // the if statment checks to see if the data is empty or not and assings it to, todos
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // 
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// listening for someone to hit submit on text box and save the info
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // it looks at the value so if its empty it will restart and do nothing
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
//  if todo text is not blank it will push the new entry to the end of the todo array and set text box back to nothing
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // it stores information in local storage and the renders the info on the screen
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// when clicked on it will add the element that was clicked on
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // it changes regra
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    // splice removes the index you want to remove it from and the number is how many you want to move
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // this stroes it and re renders it the info 
    storeTodos();
    renderTodos();
  }
});

init();
