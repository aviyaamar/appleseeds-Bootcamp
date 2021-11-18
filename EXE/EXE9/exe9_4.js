
const posIntger = (n) =>{
    for (let i = n; i >= 1; i--) {
        var str = "";
        for (let j = i; j <= n; j++) {
        str += "#";
           }
       console.log(str);
      }
}


console.log(posIntger(4));