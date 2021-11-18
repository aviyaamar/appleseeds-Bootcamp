function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str.charAt ( i ) === char ){
    counter ++ ;
    }
    }
    return counter ;
    }
   console.log( countOccurrences ( "ini mini miny moe" , "n" ));

   //line 5, 
   // vs code debbuger
  // counter +1 not incremnt, therefore this is change 