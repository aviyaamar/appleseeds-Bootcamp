
const makeAllCaps  = (wordArray) =>{
    return new Promise((resolve, reject)=>{
        if(wordArray.every(word => (typeof word === "string"))){
            let uppercased = wordArray.map(word => word.toUpperCase())
           resolve(uppercased)
        }
        else{
            reject('worng data');
        }
    })
}

const sortWord = (wordArray) =>{
    return new Promise((resolve, reject)=>{
        wordArray.sort();
        resolve(wordArray);
       
    })
}
const wordArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
const wordArrayWorng = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 1 ];

makeAllCaps(wordArray).then((data)=>sortWord(data).then((data)=> console.log(data)).catch((error)=> console.log(error)));
makeAllCaps(wordArrayWorng).then((data)=>sortWord(data).then((data)=> console.log(data)).catch((error)=> console.log(error)));