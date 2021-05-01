const inquirer = require('inquirer');
const renderMarkUp = require('./utils/renderMarkdown');
const questions = require('./utils/questions');

// IIFE
(answers => inquirer.prompt(questions, answers)
    .then((response) => renderMarkUp(response)))();