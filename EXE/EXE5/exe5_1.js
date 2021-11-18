
let countryToLiveIn = (language, isIsalnd, population, country) => {
 

    if(language==='English' && isIsalnd === false && population<=50){
        console.log(`you need to live id ${country}`);
    }
    else{
        console.log(`${country} does not meet your critiea`);

    }

};
console.log(countryToLiveIn('English', false, 30, 'island'));