var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  // created an IF statment to direct response to status and then document location href
  if(response.status === 404) {
    // document.location.href = '404.html'
    // can use either of these to get to that 404 html as it is still refereing to the same html
    document.location.href = 'redirectUrl'
  }

});
