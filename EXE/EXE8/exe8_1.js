let obj = {name:'aviya'};
let obj1 = {name: 'israel'};
let obj2 = {name:'ddklvm'};

let map =  new Map();
map.set(1, obj);
map.set(2, obj1);
map.set(3, obj2);

for(let i of map){
    console.log(i[0], i[1]["name"]);
}

