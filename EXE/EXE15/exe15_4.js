function calcAverage (arr){
    var sum=0;
    for ( var i = 0 ; i < arr .length; i ++ ){
        sum += arr[i];
    }
    return sum/arr.length ;
    }
console.log(calcAverage ([ 85 , 90 , 92 ]));


//line 6,
//vs code debugger
//return sum=> not the average, therefor adding the divide by arr.length that mean the length of the array
