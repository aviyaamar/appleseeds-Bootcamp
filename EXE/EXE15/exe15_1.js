
/** 
 * 1.line 8, 18 - this is const and const never be change, 
 * array should be seperate with a comma therefore length is a undefine
 * vs code debugger
 **/
function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    console.log(sum);
    }
   
  getSum([1,2,3], [5,66,23]);
