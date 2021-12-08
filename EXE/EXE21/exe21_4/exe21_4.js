const img = document.querySelector("img");



img.addEventListener('mouseover', ()=>{
    img.style.filter='invert(50%)';
});
img.addEventListener('mouseleave', ()=>{
    img.style.filter ="invert(0%)";
});