const numberPromise = (number) =>{
     const myPromise = new Promise((resolve,reject)=>{
       if(number > 10){
           resolve('number is OK')
       }
       else{
           reject('Bad Number')
       }
       return myPromise
    }).then((result)=>{
        console.log(`${result} the number  ${number} grater then 10`)
    }).catch((err)=>{
        console.log(`${err} the number  ${number} smaller then 10`)
    })
}

numberPromise(11);
numberPromise(5);