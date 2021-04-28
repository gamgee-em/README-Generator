console.log('js connected / node.js working')
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Title of your Project?',
                name: 'projectTitle'
            }
        ]).then((response) => {
            console.log(typeof(response.projectTitle));
        })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', '# Hello', (err) => {
        console.log('Writing file...');
        console.log('File Written!');
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
