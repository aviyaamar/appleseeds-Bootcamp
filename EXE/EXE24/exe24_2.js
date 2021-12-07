function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }


Pokemon.prototype.callPokemon = function(){
   return`I choose you : ${this.name}`;
}

Pokemon.prototype.attack = function(num){
  return `${this.name} used ${this.attackList[num]}`
 
}

let misti =  new Pokemon('Misty', 'monster',['a','b','c', 'd'])
let pikachu =  new Pokemon('pickachu', 'electric',['a','b','c', 'd'])



console.log(misti.callPokemon())
console.log(misti.attack(2))