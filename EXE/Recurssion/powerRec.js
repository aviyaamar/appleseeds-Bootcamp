function power(b,n){
 return  Math.log(n)/ Math.log(b);
     
}

console.log(power(4,16));

function powerRec(b,n){
    if(n===0){
        return 1;
    }
    else{
    return   b* powerRec(b,n-1);
    }
}
console.log(powerRec(4,2));