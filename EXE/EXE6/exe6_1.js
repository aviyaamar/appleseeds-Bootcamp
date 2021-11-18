const arr = [1,7, 3, 0, -5, 7, 3, 9];

for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}


const arrayLength = (arr) =>{
    
    let length =0;
   while(arr[length] !==undefined){
   length++;
   }
   return length;
};
console.log(arrayLength(arr));



const arraySum  = (arr) =>{
    let sum = 0;
    for(let i =0; i< arr.length; i++){
      sum += arr[i];
    }
    return sum;
};
console.log(arraySum(arr));

const arr1 = [1,2,3,4];

const arrayMulti  = (arr1) =>{
    let muli = 1;
    for(let i =0; i< arr1.length; i++){
    muli=  muli *= arr1[i];
    }
    return muli;
};
console.log(arrayMulti(arr1));