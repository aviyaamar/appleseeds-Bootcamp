let btn = document.querySelector('.btn')
let output = document.querySelector('.output')
let titleOfJoke = document.createElement('h3')
let bodyOfJoke = document.createElement('p');
btn.addEventListener('click', getJoke);

async function getJoke(){
    try{
    let req = await fetch("https://api.jokes.one/jod");
    let data = await req.json()
    const joke = data.contents.jokes[0].joke;
    titleOfJoke.innerText = joke.title;
    bodyOfJoke.innerText = joke.text;
    output.appendChild(titleOfJoke);
    output.appendChild(bodyOfJoke);
  
}
catch{
    console.log('err');
    titleOfJoke.innerText = 'not found';
    output.appendChild(titleOfJoke);

}
}