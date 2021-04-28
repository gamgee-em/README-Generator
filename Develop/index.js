console.log('js connected / node.js working')
const { Console } = require('console');
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your Project? ',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please list the installation commands:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter a valid e-mail where potential contributors can contact you with questions regarding your repo:',
        name: 'email'
    }
];

const getAnswers = (answers) => {
    inquirer.prompt(questions, answers)
        .then((response) => {
            console.log(response);
            //writeToFile(response);
            renderMarkUp(response);
    });
};




const renderMarkUp = (response) => {
const markUp = `
# **${response.projectTitle}**

## **Description**
* ${response.description}

## Table of Contents

* Installation(#installation)
* Usage(#usage)
* Credits(#credits)
* License(#license)

## Installation
* ${response.installation}

## Usage
* ${response.usage}

## ScreenShot
${response.screenshot}

## Licence

## Contributing

## Tests

## Questions

If you would like to contribute to the project please contact me @ 
* [GitHub](https://github.com/${response.github})
* [Email](mailto:${response.email})
` 
writeToFile(markUp);
};

const writeToFile = (markUp) => {
    fs.writeFile('README.md', markUp.toString(), (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log(`File Written!`);
        }
    });
}


// Function call to initialize app
// TODO: Create a function to initialize app
function init() {
    getAnswers();
}

init();
