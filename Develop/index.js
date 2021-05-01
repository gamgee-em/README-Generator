const { Console } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const { url } = require('inspector');
const { type } = require('os');
const { title } = require('process');
const renderLicenseBadge = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is the Title of your Application/Project? ',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Provide a brief description of your application: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'List any dependencies your application may have:',
        name: 'dependencies'
    },
    {
        type: 'input',
        message: 'Provide a brief explaination of any tests you have written for your application:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'List any installation commands needed to run your application:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide a brief explaination of your applications usage:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter the year of copyright:',
        name: 'copyright_year'
    },
    {
        type: 'input',
        message: 'Enter the name of the copyright holder:',
        name: 'copyright_holder'
    },
    {
        type: 'list',
        message: 'Provide your licence badge URL?',
        name: 'license',
        choices: ['Apache', 'MIT', 'Modzilla', 'None']
    },
    {
        type: 'input',
        message: 'Enter the file path to image to display Screenshot of application:',
        name: 'image'
    },
    {
        type: 'input',
        message: 'List all contributors to the project:',
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
        .then((response) => renderMarkUp(response));
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
* [License](#license)
* [Badges](#badges)
* [ScreenShot](#screenshot)
* [Contributors](#contributors)
* [Contact Information](#questions)
* [Demo](#demo)
## __Dependencies__
${response.dependencies}
## __Tests__
${response.tests}
## __Installation__
    ${response.installation}
## __Usage__
${response.usage}
## __License__
__Copyright ${response.copyright_year} ${response.copyright_holder}__
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## __Badges__
${renderLicenseBadge(response.license)}
## __ScreenShot__
![Screenshot of Application](${response.image})
## __Contributors__
${response.contributors}
## __Questions__
If you would like to contribute to the project please contact me below: 
* [GitHub](https://github.com/${response.github})
* [E-mail](mailto:${response.email})
## __Demo__
![Application Demo](link to image / GIF)`

    writeToFile(markUp);
};

const writeToFile = (markUp) => {
    fs.writeFile('../README.md', markUp.toString(), (err) => {
        err ? console.error(err) : console.log('File Written!')
    });
};

// Function call to initialize app
const init = () => getAnswers();

init();