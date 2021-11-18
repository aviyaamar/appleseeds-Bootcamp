const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];



   const getNames = (arr) =>{
       return arr.map((user) =>{
           return user.name;
       });
   };
   console.log(getNames(data));

   const bornDate = (arr) =>{
       let newArr = [];
       arr.forEach((birth) =>{
           let year = birth.birthday.slice(5,9);
           if(year < 1990)
           newArr.push(birth);
       });
       return newArr;
   };

   console.log(bornDate(data));

const food = (arr) =>{
    const obj = {}
    arr.forEach((ff) =>{
        ff.favoriteFoods.meats.forEach((meat) =>{
            if(obj[meat]){
                obj[meat] +=1
            }
            else{
                obj[meat] =1
            }
        })
        ff.favoriteFoods.fish.forEach((fish) =>{
            if(obj[fish] ){
                obj[fish] +=1;
            }
            else {
                obj[fish]= 1;
            }
        })
        
    })
    return obj

}

console.log(food(data));


