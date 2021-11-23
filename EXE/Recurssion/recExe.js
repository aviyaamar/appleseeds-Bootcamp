
// function countDown(number){
//     for(let i=5; i> 0;i--)
//     console.log(i);

// }
// countDown(5);

function countDownRec(number){
    if(number===0) return;
    console.log(number);
    countDownRec(number-1);
}
countDownRec(5);

function countDownRec1(number){
    if(number>0)
    countDownRec1(number-1);
    console.log(number);
}
countDownRec1(5);