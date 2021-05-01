module.exports = questions = [
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