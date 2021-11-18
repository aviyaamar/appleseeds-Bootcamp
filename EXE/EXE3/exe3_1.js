/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions

function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
const welcomeExs = () =>'welcome to Appleseeds Bootamp!'
console.log(welcomeExs());

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
const powerExt = (a) => Math.pow(a, 2);
console.log(powerExt(4));

function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
const addExt = (a, b=5) => a + b;
console.log(addExt(2));



// From function expressions to function declarations
const hello = () => "Hello!";
function helloDeclar(){
    let result = 'Hello'
    return result
}
console.log(helloDeclar());

const squareRoot = a => Math.sqrt(a);
function squareRootDeclar(a){
    let num = a;
    num = Math.sqrt(a)
    return num;
}
console.log(squareRootDeclar(64));


const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbersDeclar(a,b){
    let num1 = a;
    let num2 = b;
    let result =  Math.random() * (a-b)+b;
    return result
}
console.log(randomNumbers(5,7));
console.log(randomNumbersDeclar(5,7));

