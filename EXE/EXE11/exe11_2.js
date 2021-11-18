const arrayInteger = [10,20,30,40,50,60];

const doubleValue = (arr) =>{
    return  doubleArray = arr.map(function(n) {
           return n*2;  
    
    });

};
console.log(doubleValue(arrayInteger));

const evenArray = [1,2,3,4,5,6,7,8,9,10,14,15,19,20];
const onlyEvenValues = (arr) => {
    return oddValue = arr.filter((n)=>{
        return n%2==0;
    });
};
console.log(onlyEvenValues(evenArray));

const onlyEvenValuesMap = (arr) => {
  let res =[];
  arr.forEach((n)=> {
      if(n%2==0){
          res.push(n);
      } 
  });
  return res;
   
}

console.log(onlyEvenValuesMap(evenArray));


const strArr = ['hanital','aviya','israel', 'niv', 'shirel'];
const showFirstAndLast = (arr) =>{
    let res= []
    arr.forEach((n) =>{
        if(arr[arr.length-1]===n)
        res.push(n);
        else if(arr[0]===n){
            res.push(n);
        }   
    });
    return res;
};
console.log(showFirstAndLast(strArr));

const vowelCount = (str) =>
{
    let splitArr = str.toLowerCase().split("");
    let obj = {};
    let vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
};

console.log(vowelCount('aviya'));

const capitalize = (str) =>{
    let spiltArr = str.split("");
    spiltArr = spiltArr.map((letter) => {
        return letter.toUpperCase();

    });
    return spiltArr.join('');
};

console.log(capitalize('israel'));


const shiftLetter = (str) =>{
    let splitArr = str.split("");

    let arr =splitArr.map((letter) =>{
        letter = letter.charCodeAt()+1;
        letter = String.fromCharCode(letter);
        return letter;
    })
    return arr.join('');
}
console.log(shiftLetter('aviya'));

const swapCase = (str)