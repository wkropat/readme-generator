// Import
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generatemarkdown');
const util = require('util');

// Array of questions for user input
const questions = [
    { // Project Title
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    { // Project Description
        type: 'input',
        name: 'description',
        message: 'What will this project do?',
    },
    { // Install instructions
        type: 'input',
        name: 'install',
        message: 'How do you install this application?',
    },
    { // Usage instructions
        type: 'input',
        name: 'instructions',
        message: 'How do you use this application?',
    },
    { // Contributions
        type: 'input',
        name: 'contributions',
        message: 'Can other developers contribute to this application?',
    },
    { // Test
        type: 'input',
        name: 'test',
        message: 'How do you test this application?',
    },    
    { // Screenshot
        type: 'input',
        name: 'screenshot',
        message: 'Is there a screenshot to include? Input relative file path:',
    },
    { //checkbox that allows license choice
        type: 'checkbox',
        name: 'license',
        message: 'What license will your application use?',
        choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'MIT License', 'The Unlicense'],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Selection required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'How should people contact you?'
        
    }];

// Write README file 
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log('error:' + error);
        }
    })
}

const generateReadme = util.promisify(writeFile);

// Initialization function
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log('Readme data:', answers)
        const readMe = generateMarkdown(answers);
        await generateReadme('README.md', readMe);
    } catch (error) {
        console.log('error:' + error);
    }

};

//Initialize app
init();




