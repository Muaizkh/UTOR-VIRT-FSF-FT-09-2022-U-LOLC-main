// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
// changed the children number from 2 to 0
articlesDiv.children[0].style.fontSize = '50px';
// added children [0] as it was missing and needed to make sure that the right child was selected from the header section
headerDiv.children[0].style.color ="white";
