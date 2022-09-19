console.log("Document Body: ")
console.log(document.body);
// the children of this document are whats inside the body (h1, ul, script) as it is a child of the parent which is body
console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("Second child of body: ")
console.log(document.body.children[1]);

console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
// this element will look through the HTML to find any objects with the ID of "first-child-ul"
var firstChildUl = document.getElementById("first-child-ul");

// Setting style of element
firstChildUl.style.color = "#e97451";
