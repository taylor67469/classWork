const fs = require('fs');
const inquirer = require('./node_modules/inquirer');
const html = require('./utils/htmlCreator');
function writeToFile(fileName,data){
    fs.writeFile(fileName,data,function(err){
        if (err)
            return console.log(err);
            console.log(data)
    })
}
function getData(){
    inquirer
    .prompt(myQuestions)
    .then((response) =>
        writeToFile('index.html',html(response)));
}
const myQuestions = [
    {
        type: 'input',
        name: 'urName',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'Location',
        message: 'What is your location?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'What is an interesting fact about you?',
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your LinkedIn URL?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub URL?',
    }
]
//prompts user
getData();  