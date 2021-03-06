const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];

const descending = foods.slice().sort().reverse();
const ascending = foods.slice().sort();
console.log(descending);
console.log(ascending);

const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple",];
const descendingToUpperCase = foodsWithUpperCase.slice().sort((a,b)=> b.localeCompare(a));
const ascendingToUpperCase = foodsWithUpperCase.slice().sort((a,b)=> a.localeCompare(b));

console.log(ascendingToUpperCase);
console.log(descendingToUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];
const longestWordDesc = words.slice().sort((a,b) => b.length - a.length);
const longestWordAsc = words.slice().sort((a,b) => a.length - b.length);

console.log(longestWordAsc);
console.log(longestWordDesc);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  items.sort(function (a, b) {
    return a.value - b.value;
  });

  console.log(items)
  
items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  console.log(items);


   