const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
   }

   function getCandy(candyStore, id){
     return candyStore.candies.find(candy => candy.id === id)
    } 

    console.log(getCandy(candyStore,'5hd7y' ));

    function getPrice(candyStore, id) {
    return candyStore.candies.find(candy => candy.id === id).price;
}
console.log(getPrice(candyStore, "as12f"));

function addCandy(candyStore, id, name, price){
    candyStore.candies.push({
        id : id, 
        name: name, 
        price: price, 
        amount: 1, })
    }


    console.log(addCandy(candyStore, '56fyz7', 'mars', 5));
    console.log(candyStore);


    const buy =(candyStore, id) =>{
        let candy = candyStore.candies.find(candy => candy.id === id)
        if(candy.amount > 0){
            candyStore.cashRegister += candy.price;
            candy.amount--;
        }
    }
    buy(candyStore, '5hd7y');
    console.log(candyStore);



    let candy = candyStore.candies.find(candy =>  candy.price ===5)
    console.log(candy);