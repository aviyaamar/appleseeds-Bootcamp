let MikeScore1 = 94;
let MikeScore2 = 116
let MikeScore3 = 120
let avgMike = (MikeScore1+MikeScore2)/2

let JohnScore1= 89;
let JohnScore2 = 103;
let JohnScore3= 120;
let avgJohn = (JohnScore1+JohnScore2+JohnScore3)/3


let MaryScore1 = 97
let MaryScore2 = 134
let MaryScore3 = 105
let avgMary =(MaryScore1 + MaryScore2 + MaryScore3)/3
console.log(avgMary, avgJohn, avgMary)

if(avgMike > avgJohn && avgMike >avgMary){
    prompt('the winner group is:Mike Team '+ avgMike)
}
else if( avgJohn> avgMike &&  avgJohn >avgMary){
    prompt('the winner group is: John Team'+ avgJohn)
}
else if( avgMary === avgMike === avgJohn){
    prompt('this is draw')
}
else {
    prompt('the winner group is: Mary Team'+ avgMary)
}