// create an area which will allow me to reference the libratry of congress
// I want a button and event litener
// I need a fetch of data as it is searched 
// add variables that allow me to interact with the page 
// add a  fucntion where I can get actaully serach results
var searchNameEl = document.querySelector('#search-name');
var resultsContainerEl = document.querySelector('#results-container');

var getSearchNames = function () {
    var queryString = document.location.search;
    var searchName = queryString.split('=')[];
    if (searchName){
        searchNameEl.textContent = searchName;

        getSearchResults(searchName);
    } else {
        document.location,replace('./index.html');
    }
};
var getSearchResults = function(search) {
    var apiUrl = 'https://www.loc.gov/' + search +
}