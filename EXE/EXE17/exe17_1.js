/**
 * the output is 5 
 */
var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;
 }
 b = 5;
 return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

//the output is a 1 

var a = 1;
function b2() {
 a = 10;
 return ;
 function a() { }
}
b2();
console.log(a);
/**
 * the output is 3 3 3 beacuse the setTimeOut
 */
let i;
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 1000);
}