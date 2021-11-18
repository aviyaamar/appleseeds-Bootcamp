/*
--Delete the wrong answers--
1. Which of the following is/are strings?

c) '4'
2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4
3. Which of the following is/are booleans?
a) true
b) false
4. What is the result of 80 + 71.2?
a) 151.2
5. What is the result of "80" + 71.2?
c) "8071.2"
6. Does 100 + 30 produce a number or a string?
a) number
7. Does "100" + 30 produce a number or a string?
b)string
*/

//------Submit your answers under the question------//

//create three different ways to declare variables
var num1 = 5;
let num2 = 5;
const num3 = 7

//declare a variable and reassign a value to it
num1=10;
console.log(num1);

//create a variable and after that assign a string with its value being: He's got it!
let str1;
str1 ='He\'s got it';
console.log(str1)

/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
let acoountResturant= 450;
let tax =1.17;
let result = (acoountResturant * tax) ;
console.log(result);
// Round the number 50.6 to its nearest integer

let foo = 50.6;
let baz  = Math.round(50.6);
console.log(baz);

let boo;
console.log(boo);

//Create a variable that is undefined