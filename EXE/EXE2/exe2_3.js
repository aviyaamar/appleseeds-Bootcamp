let circel = (raduis) =>{
let area =Math.PI*(Math.pow(raduis,2));
return area;
}
let areaCircel = circel(5);
console.log(Math.round(areaCircel*100)/100);
console.log(Math.floor(areaCircel*100)/100);