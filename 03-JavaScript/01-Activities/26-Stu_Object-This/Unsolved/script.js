// TODO: What does 'this' refer to?
// this refers to an object, in this case it would be window
console.log(this);

// TODO: What does 'this' refer to?
// helloThis refers to the global window as it isn't in an object
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
//this will refer to a value as it is in a var, in this case it is age
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// this will log the investment outcome
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
