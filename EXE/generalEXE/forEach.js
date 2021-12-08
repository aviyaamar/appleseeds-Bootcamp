const word = ['one', 'two', 'three', 'four', 'five']
word.forEach((el)=>{
    console.log(`the element is:${el}`)
})

const ToNumber =(arr)=>{
    let toNum = []
    arr.forEach((element, index) => {
        toNum.push(index +1);    
    });
    return toNum;
}

console.log(ToNumber(word));

const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((element)=> {
    if(element === 'apple'){
        console.log(`i am eating an ${element}`)
    }
    else{
        console.log(`i am eating a ${element}`);
}
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((element, index)=>{
    fruits[index]= element * 2;


});
console.log(fruits);