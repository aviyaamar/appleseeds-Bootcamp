function tellFortune(jobTitle, location, partnerName, numberOfChildren ){
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`
}

let  myLife = tellFortune('programmer', 'Tel-Aviv', 'Israel', 7 );
console.log(myLife)