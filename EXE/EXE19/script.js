
let parent = document.querySelector('.start-here');
parent.innerText = 'main-title';
console.dir(parent);

const ulFather = document.querySelectorAll('ul')[1];
let newLi = document.createElement('li');
console.dir(ulFather);


newLi.innerText= 'sub title 4';
console.dir(newLi);
ulFather.appendChild(newLi);

const removeme = ulFather.querySelectorAll('li')[3];
const deleted = ulFather.removeChild(removeme);

const ChangeText = document.querySelectorAll('ul')[0];
console.dir(ChangeText);
const ChangeText1 = ChangeText.querySelectorAll('li')[6];
console.dir(ChangeText1)
ChangeText1.innerText ='Master Of The Dom';

const ChangeText2 = document.querySelectorAll('title');
console.dir(ChangeText2)
ChangeText2.innerText ='Master Of The Dom';


const p = document.querySelector('p');
console.dir(p);
p.innerText='my name is Aviya';


