let img = document.querySelector('img')
let checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('change', (e) => {
if(e.target.checked){
    img.style.display='block';
}
else{
    img.style.display='none';
}
   
});
