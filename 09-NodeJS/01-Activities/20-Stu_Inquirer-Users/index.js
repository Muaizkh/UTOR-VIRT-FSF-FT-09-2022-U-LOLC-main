const inquirer = require('inquirer');
const fs = require('fs');
// FS stands for file system
// add prompts to FS and stringigy 
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your  name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'preferred',
    },
  ])
//   JSON stringy to add data into a seperate file
  .then((response) => {
    // $ is the way to JSON stringify the file and responses
fs.writeFile('file.text', `${response.name}, ${response.languages}, ${response.preferred}`, (error) =>
error ? console.error(error) : console.log('Written to file'))
  }
  )