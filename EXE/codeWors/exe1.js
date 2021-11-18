function array(arr){
    let data = arr.split(',');
    data.pop();
    data.shift();
    return data.length  ? data.join(' ') : null;
    }

   console.log( array('1, 2'));

  
   
