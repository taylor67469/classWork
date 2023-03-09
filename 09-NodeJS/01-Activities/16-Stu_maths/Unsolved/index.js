// TODO: Import `maths.js`
const { sum, difference, product, quotient } = require('./maths');
const maths =require('./maths');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
let operation=argv[2];
let numOne= parseInt(argv[3]);
let numTwo= parseInt(argv[4]);

switch (operation(numOne,numTwo)){
    case 'sum':
    console.log(sum(numOne,numTwo));
    break;
    case 'difference': 
    console.log(difference(numOne,numTwo));     
    break;
    case 'product':
    console.log(product(numOne,numTwo));
    case 'quotient':
    console.log(quotient(numOne,numTwo));
}
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
