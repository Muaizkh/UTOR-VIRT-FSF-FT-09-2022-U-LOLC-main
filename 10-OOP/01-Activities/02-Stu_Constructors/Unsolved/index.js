// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech){
    this.name,
    this.tech

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
// adding this introduction is straight forward as it is adding the sentence to when node runs.
this.introduction = () => {
    console.log(`Hi, my name is ${name} and I enjoy ${tech}`)
}
}
// TODO: Create a new object using the 'Developer' constructor
// need to add a const of someone being added to acuatlly run the introduction aspect of this code
const muaiz = new Developer("muaiz", "node.js")
// TODO: Call the 'introduction()' method on the new object
muaiz.introduction()