const numbers = [7,20,35, 60, 9, 4, 50, 200, 23, 67,73];

const MaxNum = numbers.reduce((max, currentVal) =>{
    return Math.max(max, currentVal);
});
console.log(MaxNum);

const MaxNumDiffWay =  numbers.reduce((max,currentVal) =>{
    if(currentVal > max) return  currentVal;
    else{
        return max;
    }
});
console.log(MaxNumDiffWay);


const evenSum = numbers.reduce((sum, evenVal)=>{
    return evenVal % 2 ===0 ? sum + evenVal : sum;

},0);

console.log(evenSum);


const average = numbers.reduce((sum, courentval)=>{
   return (sum + courentval) ;
});
const averageSum = average/ numbers.length

console.log(averageSum);