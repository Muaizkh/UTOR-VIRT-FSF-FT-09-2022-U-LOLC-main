function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  let newString = "";
  for(let i = str.length -1; i>=0; i --){
    newString += str[i];
  }
return newString;
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  let array1 = [];
  for(let i =0; i< str.length; i++){
    array1.push(str[str.length - i -1]);
  }
  return (array1.join('') === str);
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  return (str.replace(/^(.)/, function(b) {
    return b.toUpperCase();
  }) .replace(/\s(.)/g, function(a){
    return a.toUpperCase();
  }))
    
};

module.exports = Algo;
