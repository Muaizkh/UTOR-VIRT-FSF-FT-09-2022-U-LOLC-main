fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
// each parameter before the question mark is an end point. After the ? the parameter is the page which the information is stored and from their the state tells the page what to do with the information such as in this case it opens and sorts the information 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

// the fetch parameter 