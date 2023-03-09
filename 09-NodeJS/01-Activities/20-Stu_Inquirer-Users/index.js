let inquirer=require('./node_modules/inquirer');
const fs = require('fs');
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
      },
      {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'Languages',
        choices:['HTML','CSS','JAVASCRIPT', 'MYSQL'],
      },
      {
        type: 'list',
        message: 'What is your preferrered method of communication',
        name: 'communication',
        choices: ['email','text','phonecall']
      },
])
.then((data) => {
    const filename = `${data.username.toLowerCase().split(' ').join('')}.json`;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });