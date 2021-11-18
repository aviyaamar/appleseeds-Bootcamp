const numbers = [1, -5, 666, 2, 400, 11];

const descending = numbers.slice().sort((a,b)=> b-a);
const ascending = numbers.slice().sort((a,b)=> a-b);
console.log(descending);
console.log(ascending);
console.log(numbers);