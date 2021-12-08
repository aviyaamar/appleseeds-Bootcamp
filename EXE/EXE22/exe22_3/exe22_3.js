
let letterOFCheck = '';
RandomLetter();
let geussStore= [];

const container = document.querySelector('.container');
const geusses = document.querySelector('.geusses');
const letter = document.querySelector('h4');
const message = document.querySelector('h3');
const letterGeuss = document.querySelector('h2');


const yesButton = document.createElement('button');
yesButton.innerText = 'yes';


function RandomLetter(){
    letterOFCheck = String.fromCharCode((Math.floor(Math.random()*26)+97)); 
    }

function isLetter(AsciCode){
  return (AsciCode > 64 &&  AsciCode <91) || (AsciCode >96 &&  AsciCode < 123);
}


window.addEventListener('keypress', (e) =>{
    let tempLetter = '';
    
    if(!isLetter(e.keyCode)){
        message.innerText = 'please enter to valid letter';
    }
    else{
        tempLetter = e.key.toLowerCase();
    }
    if(tempLetter!==letterOFCheck){
        
        if(!geussStore.includes(tempLetter)){
            geussStore.push(tempLetter);
            geusses.innerText += `${tempLetter},`;
            message.innerText = 'Nope, wrong letter';
            message.style.color = 'red';

        }else{
            message.innerText = `${tempLetter} has already been guessed!`;
            message.style.color = 'red';

        }
      }else{
        message.innerText = "Right letter";
        message.style.color = 'green';
        letter.innerText = tempLetter;
        letterGeuss.innerText = 'whould you loke to play again?';
        geussStore = [];
        geusses.innerText = '';
        container.removeChild(geusses);
        e.preventDefault();
        container.appendChild(yesButton);

        yesButton.addEventListener('click',()=>{
        container.appendChild(geusses);
        letterGeuss.innerText = 'Keys guessed';
        message.innerText = 'Guess a letter';
        message.style.color = 'black';
        letter.innerText = '?';
        RandomLetter();
        container.removeChild(yesButton);
    
    
        });
    }
});




