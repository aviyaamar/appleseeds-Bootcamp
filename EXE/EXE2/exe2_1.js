function describeCountry(country ,population, capitalCity){
    // country = 'Finland'
    // population = 6;
    // capitalCity = 'Helsinki'

    return `${country} has ${population} million people and capital city is ${capitalCity}`
}
let foo = describeCountry('Finlad', 6, 'Helisinki')
console.log(foo);
let baz = describeCountry('israel', 8, 'jeruslem')
console.log(baz);
let italy = describeCountry('italy', 59, 'Roma')
console.log(italy);
let France = describeCountry('France', 67, 'Paris')
console.log(France);