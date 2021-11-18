const MyCountry ={
    counry:'israel', 
    capital:'Jerusalem', 
    language: 'Hebrow', 
    population: 9, 
    neighbours: ['gaza', 'Levanon', 'soria'], 
    describe(){
        console.log(`${this.counry} has ${this.population} million people, thier mother tongue is ${this.language}
        they hav ${this.neighbours.length} neighbouring and a capital called ${this.capital}`);
    },
    checkedIsland(){
     this ['isIsland'] = this.neighbours.length == 0 ? true : false;
    }
}

console.log(MyCountry.describe());
console.log(MyCountry.checkedIsland());
MyCountry.checkedIsland();
console.log(MyCountry.isIsland);