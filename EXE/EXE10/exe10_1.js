
function isString(str , callback){
    if(typeof str ===  typeof String()){
        callback(str);
    }
}
const callback = (str1)=>{
    console.log(str1);
};

console.log(isString('aviya', callback));

const firstWordUpperCase = (str,callback1)=>{
    let strArr = str.split(' ')
    strArr[0] = strArr[0].toUpperCase();
    return callback1(strArr);
  }
  
  const putDashBetween = (arr) =>{
    return arr.join('-');
  }
console.log(firstWordUpperCase('aviya hazan', putDashBetween)) ; 

const longestStr = (str, callback3) =>{
    let arrStr = str.split('');
    arrStr[0] = arrStr[0].toLowerCase();
    return callback3(arrStr);
 
 };
 const logStr = (str) =>{
     return str.join('');
 }

 console.log(longestStr('aviya HAZAN', logStr));
