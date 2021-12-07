let text = document.querySelector('.text');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

plus.addEventListener('click',()=>{
    text.style.fontSize ='30px';

});
minus.addEventListener('click', ()=>{
    text.style.fontSize='10px';
})
