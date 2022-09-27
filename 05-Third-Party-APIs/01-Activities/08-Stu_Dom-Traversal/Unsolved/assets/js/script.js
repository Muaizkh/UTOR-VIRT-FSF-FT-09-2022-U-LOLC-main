// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
// // rootEl and $ are interchangable
// rootEl.children("ul").css("background-color","white");
// in this way we are selecting the children inside the specific child and adding css this way
$('#root').children('ul').children().css('background-color', 'white');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
// we are adding text to the specfic child inside the ul
$('#root').children("ul").children(".item-a3").text("0")
$('#root').children("ul").children(".item-a1").text("0")

// rootEl.children("ul").children(".item-a3").text("0")
// rootEl.children("ul").children(".item-a1").text("0")