// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
var rootEl = $("#root");
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var pEl = $('<p>');
pEl.text('Muaiz Khan');
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
pEl.append('~Carol Dweck');
// TODO: Add the class `plain` to the author element
pEl.attr('class', 'plain');
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
// make sure to add <> while creating elements to store stuff so it actually reads
var h1El = $('<h1>');
h1El.text('');
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
h1El.append("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning");
// TODO: Apply the class `fancy` to the quote element
h1El.attr('class', 'fancy');
// TODO: Append the author element to the quote element
h1El.append(pEl);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootEl.append(h1El);