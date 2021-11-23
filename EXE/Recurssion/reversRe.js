function reverse(str){  
    let reversed = "";      
     for (var i = str.length - 1; i >= 0; i--){         
       reversed += str[i];  
     }     
    return reversed;
  }
console.log(reverse('aviyw'));

function fibbRevers(str){
    if(str === '')
    {
        return '';
    }
    else{
        return fibbRevers(str.slice(1))+str.charAt(0);
    }
}
console.log(fibbRevers('aviywo'));