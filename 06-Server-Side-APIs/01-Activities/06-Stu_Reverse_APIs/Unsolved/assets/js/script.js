var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// Ajax first starts by requesting the url and then binding it so it can be called when the property is looked up while using a third party
// it then uses a function to activate the ajax as a response and then console logs what is being shown or taken
// lays out information neatly but calls upon a third party to utilize it
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// fetch takes the information straight with javascript and displays it neatly and preceisely (the most used version of this way of getting informatoin as it is the easiest)
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// XMLHttpRequest reuturns all the information in random order and doesn't put it in an array
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
