const people = ["Greg", "Mary", "Devon", "James"];

for(let i = 0; i< people.length; i++){
    console.log(people[i]);
}
people.shift();
console.log(people);
people.pop();
console.log(people);
people.unshift('Matt');
console.log(people);
people.push('Aviya');
console.log(people);

for(let i =0; i<people.length;i++){

}
console.log(people);
people.slice(1,3);
console.log(people);

console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));

const people1 = ["Greg", "Mary", "Devon", "James"];
people1.splice(2, 1, 'Elizabeth');
console.log(people1);
people1.splice(3, 0, 'Artie');
console.log(people1);

const withBob =['BOB'];

console.log(people1.concat(withBob));