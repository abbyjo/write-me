//Required packages 
const md = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


//Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: `What is your project's title?`,
    },
    {
        type: 'input',
        name: 'description',
        message: `Please describe your project:`,
      },
      {
        type: 'input',
        name: 'install',
        message: `How can others install this?`,
      },
      {
        type: 'input',
        name: 'usage',
        message: `How can your project be used?`,
      },
      {
        type: 'input',
        name: 'contribution',
        message: `What are the contribution guidelines for this project?`,
      },
      {
        type: 'input',
        name: 'test',
        message: `How can others test your project?`,
      },
      {
        type: 'list',
        message: 'What license is your project under?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'MPL', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: `What is your GitHub username?`,
      },
      {
        type: 'input',
        name: 'email',
        message: `What is your email address?`,
      },
];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, md.generateMarkdown(data), function (err){
       if (err) throw err;
       console.log("README written!") 
    })
}

//Function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", answers)
    })
}

// Function call to initialize app
init();
