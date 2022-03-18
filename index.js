// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const renderLicense = require('./utils/generateLicense');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
        // Name of the project
        {
            type: 'input',
            name: 'name',
            message: 'Project Name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Come on, come up with a project name');
                    return false;
                }
            }
        },

        // Description of the project
        {
            type: 'input',
            name: 'description',
            message: 'Project Description?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Enter a project description')
                    return false;
                }
            }
        },

        // How to install the application
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions to install and run the app'
        },

        // How the application is designed to be used
        {
            type: 'input',
            name: 'usage',
            message: 'Enter app usage/functionality for end users'
        },

        // license information
        {
            type: 'list',
            name: 'license',
            Message: 'Select a License',
            choices: [
                'MIT',
                'Apache',
                'ISC'
            ]
        },

        // How to make contributions to the project
        {
            type: 'input',
            name: 'contributing',
            message: 'Describe how to make your own contributions to the project'
        },

        // How to make tests for the app
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing instructions/setup for the project'
        },

        // Where to direct questions about the app
        {
            type: 'input',
            name: 'email',
            message: 'Enter and email for questions to be sent'
        },

        // Name of github repository
        {
            type: 'input',
            name: 'github',
            message: 'Enter the name of the github repo'
        },

        // Screenshot of readme
        {
            type: 'input',
            name: 'screenshot',
            message: 'enter the relative pathway to a screenshot of your app (using the readme file in the root directory)'
        },

        // Command for running application 
        {
            type: 'input',
            name: 'runApplication',
            message: 'enter command prompt input to start project locally'
        },

        // link to deployed application
        {
            type: 'input',
            name: 'liveLink',
            message: 'Enter the link to your deployed app, if applicable'
        },
    ])
}


promptUser()
    .then((data) =>{
        return renderLicense(data);
    })
    .then((data) =>{
        return markdownGenerator(data);
    })
    .then(markdown => {
        readmeGenerator(markdown);
    })