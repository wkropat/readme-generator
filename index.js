const inquirer = require('inquirer');
const fs = require('fs');
// const generateReadme = require('./generatereadme');


//Get command line user inputs via inquirer

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is this project called?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What will this project do?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install this application?',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'How do you use this application?',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Can other developers contribute to this application?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do you test this application?',
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
                    console.log('Please select a license.');
                    return false;
                }}},
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
        }
    ]);
};

// Initialize app 
async function init() {
    try {
      const userAnswers = await inquirer.prompt(questions);
      console.log(userAnswers);
      const readMe = generateReadme(userAnswers);
      console.log(readMe);      
    } catch (error) {
      console.log('error:' + error);
    }
  };
  
// Function call to initialize app
init();