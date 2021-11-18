
const filled =  Array(100).fill({key:'1'});
console.log(filled);
const arr =   Array.from(Array(100).keys());
console.log(arr);

console.log(Object.entries(filled));

console.log(Object.assign({}, arr));

console.log(Array.isArray(arr));
let copyArr = arr.slice(0);
console.log(copyArr);
let copyArr1 = [...arr];
console.log(copyArr1);