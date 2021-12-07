
const printToN = (n)=>{
    for(let i =0; i< n ;i++){
        console.log(i);
    }
}
// printToN(11);

const countx = (n,t)=>{
    for(let i=0; i< n; i= i+t){
            console.log(i);
    }
};
// countx(15,3);

const countEven = (n)=>{
    if (n < 10) return n
    return countEven(n % 10 + countEven(Math.floor(n / 10)))
     
}
// console.log(countEven(1541));

const countEven1 = (num)=>{
    let ctr = 0;
    while (num) {
      ctr += num % 2 === 0;
      num = Math.floor(num / 10);
    }
    return ctr;
  }
// console.log(countEven1(14562));


const printReverse =()=>{
    for(let i=100; i>-1;i=i-2){
        console.log(i);
    }

}
// printReverse();


const countEvenOnRange =(n)=>{
    for(let i=111; i< n ;i++){
        if(i%2===0){
            console.log(i);
        }
    }

}
// countEvenOnRange(200);
const countEvenOnRange1 =(n)=>{
    for(let i=112; i< n ;i+=2){
       console.log(i)
    }

}
// countEvenOnRange1(200);


const quadratic =(a,b,c)=>{
    let x1 =(-1*b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    let x2 =(-1*b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    return `x1:${x1}, x2:${x2}`;
}
console.log(quadratic(1, 1, -2));

const countABC = (sentece)=>{
    let arr =[];
    let str= sentece.toLowerCase().split('');
    str.forEach((x)=>{
        if(!arr[x]){
            arr[x] =1 
        }
        else{
            arr[x]++
        }
    })
  return arr;
}

// console.log(countABC('aviyaAMAR'));


function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("A man, a plan, a canal. Panama"));

  function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
  console.log( palindrome("A man, a plan, a canal. Panama"));