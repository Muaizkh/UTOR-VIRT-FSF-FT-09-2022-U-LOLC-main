fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
// to reoload chace we must use this 
cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
