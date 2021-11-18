// var arr = ["boo", "doooo", "hoo","ro"] ;

// console.log(arr);

// const resultArray = arr.map((element) => {
//    return element.length;
// });

// console.log(resultArray);

let arr=["boo", "doooo", "hoo","ro"];
let arr2 = [];

const sumOfArray = (arr) =>{
    for (let i=0;i<arr.length;i++){
        let sumOfArray = 0;
        sumOfArray =arr[i].length;
          arr2[i] = sumOfArray;
}
return arr2;
}

console.log(sumOfArray(arr));