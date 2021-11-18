let arr=["boo", "doooo", "hoo","ro"];
let arr2 = [];

// const sumOfArray = (arr) =>{
//     for (let i=0;i<arr.length;i++){
//         let sumOfArray = 0;
//         sumOfArray =arr[i].length;
//           arr2[i] = sumOfArray;
// }
// return arr2;
// }

// console.log(sumOfArray(arr));



const sumOfArrayWhile = (arr) =>{
    let i=0;
    let wordLength = [];
    while(i < arr.length ){
    wordLength[i] = arr[i].length;
    i++;
   }
return wordLength;
}
console.log(sumOfArrayWhile(["boo", "doooo", "hoo","ro"]));