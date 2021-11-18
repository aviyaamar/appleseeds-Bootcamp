const food = ["Noodle", "Pasta", "Ice-cream", "Meat","Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives","Hamburgers"];

const compaerArray = (food, food1) =>{
    let ans = []
    for(let i = 0; i< food.length; i++){
        // console.log(food[i]);
    for(let j = 0; j< food.length; j++){
        if(food[i] === food1[j]){
            ans.push(food[i])
    }
}
    }
    return ans
};
console.log(compaerArray(food, food1));