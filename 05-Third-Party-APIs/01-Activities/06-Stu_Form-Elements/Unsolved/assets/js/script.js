var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
// created fuction to handle the submission form
function handleFormSubmit(event) {
    event.preventDefault();

    // select form element by its 'name' attribute and get its value
    // input name = shopping-input is doun on line 18 of the HTML code and is used in this way and $ is used to define/find a selector 
    var shoppingItem = $('input[name ="shopping-input"]').val();

    // if there's nothing in the form entered, don't print to page
    if (!shoppingItem) {
console.log('No shopping items filled out in form!')
return;
    }

    // print to the page
    // this appends information from the list to the page and then also closes that list as we need to stop the list at some point
    shoppingListEl.append('<li>' + shoppingItem + '</li>');

    // clear the form input element 
// the '' put into the val or value item is to make sure that it is clear 
    $('input[name = "shopping-input"]').val('');
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
// looking at the JQuery item list we can see that .on adds an event listener rather than typing eventlistener 

shoppingFormEl.on('submit', handleFormSubmit);