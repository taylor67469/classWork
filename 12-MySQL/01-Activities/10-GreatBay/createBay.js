const inquirer = require('inquirer'); 
const mysql=require('mysql');
// create writeFile function using promises instead of a callback function
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'password',
    database: 'greatBay_DB',
  });
const promptUser = () => {
([  inquirer
    .prompt({
        type: 'list',
        name: 'option',
        message: 'Choose an option?',
        choices: ['POST AN ITEM', 'BID ON AN ITEM'],
      },)
    .then(function(value){
        let myValue=value.option;
        switch (myValue){
            case'POST AN ITEM':
            postBay();
            break;
            case'BID ON AN ITEM':
            bidBay();
            break;
        }
    })
  ])
}
promptUser();
function postBay(){
    inquirer
    .prompt([{
        type: 'input',
        name: 'bayName',
        message: 'Choose a name?',
      },
      {
        type: 'input',
        name: 'category',
        message: 'Choose a category?',
      }]
      )
      .then(function(value){
        let bayName=value.bayName;
        let category=value.category;
        createProduct(bayName,category)
      })
}
function bidBay(){

}
const createProduct = (bayName,category) => {
    console.log('Inserting a new product...\n');
    const query = connection.query(
      'INSERT INTO auctions SET ?',
      {
        item_name: bayName,
        category: category,
      },
      (err, res) => {
        if (err) throw err;
      }
      
    );
    connection.end();
};