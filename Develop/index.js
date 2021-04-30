console.log('js connected / node.js working')
const { Console } = require('console');
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { url } = require('inspector');
const { type } = require('os');
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
        message: 'Please list any dendencies your application may have:',
        name: 'dependencies'
    },
    {
        type: 'input',
        message: 'Please list the installation commands:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please explain the usage of your application:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter file path to image to display Screenshot of application:',
        name: 'image'
    },
    {
        type: 'input',
        message: 'Please enter the year of copyright:',
        name: 'copyright_year'
    },
    {
        type: 'input',
        message: 'Please enter the name of the copyright holder:',
        name: 'copyright_holder'
    },
    {
        type: 'input',
        message: 'Please enter the type of license use for your project',
        name: 'license_type'
    },
    {
        type: 'input',
        message: 'Please provide your licence badge URL?',
        name: 'license_url'
    },
    {
        type: 'input',
        message: 'Please list all contributors to the project:',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Enter your GitHub address where potential contributors/users can contact you with questions regarding your repo:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter a valid e-mail where potential contributors/users can contact you with questions regarding your repo:',
        name: 'email'
    }
];

const getAnswers = (answers) => {
    inquirer.prompt(questions, answers)
        .then((response) => {
            renderMarkUp(response);
    });
};



const renderMarkUp = (response) => {
const markUp = 
`# __${response.projectTitle}__

## __Description__
${response.description}

## __Table of Contents__

* [Dependencies](#dependencies)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [ScreenShot](#screenshot)
* [License](#license)
* [Badges](#badges)
* [Contributors](#contributors)
* [Contact Information](#questions)
* [Demo](#demo)

## __Dependencies__

## __Tests__

## __Installation__
\`\`\`
${response.installation}
\`\`\`

## __Usage__
    ${response.usage}

## __ScreenShot__
![Screenshot of Application](${response.image})

## __License__
__Copyright ${response.copyright_year} ${response.copyright_holder}__

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## __Badges__
![License: ${response.license_type}](${response.license_url})

## __Contributors__
${response.contributors}

## __Questions / Contact__
If you would like to contribute to the project please contact me below: 
* [GitHub](https://github.com/${response.github})
* [E-mail](mailto:${response.email})

## __Demo__
![Application Demo](link to image / GIF)`

 
    writeToFile(markUp);
};

const writeToFile = (markUp) => {
    fs.writeFile('README.md', markUp.toString(), (err) => {
        err ? console.log(err) : console.log('File Written!')
    });
}

// Function call to initialize app
// TODO: Create a function to initialize app
function init() {
    getAnswers();
}

init();
