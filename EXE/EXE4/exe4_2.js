const myFunc  = (n) =>{
    if(n >= 90 && n <= 100){
        return 'A'
    }
    else if(n>=80 && n<=89 ){
    return 'B'
    }
    else if( n>=70 && n <=79){
    return "C"
   }
   else if( n>=65 && n<= 69){
       return 'D'
   }
   else{
       return 'F'
   }
}
console.log(myFunc(65));