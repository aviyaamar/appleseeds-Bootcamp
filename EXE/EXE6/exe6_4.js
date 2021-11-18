const populations = [50, 9, 10, 12];
let percentages = [];

const populationPercentages = (populations) =>{
    for(let i=0; i< populations.length; i++){
        let result =0;
        result= (populations [i]/ 7900 )*100;
        percentages[i]= result; 

    }
    return percentages;

};


console.log(populationPercentages(populations));