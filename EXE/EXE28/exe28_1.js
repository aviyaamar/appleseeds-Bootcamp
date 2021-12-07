document.getElementById('getJoke').addEventListener('click', getJoke);


function getJoke(){
    fetch('https://api.jokes.one/jod') 
  .then((res) => res.json())
  .then((data) => {
    const joke = data.contents.jokes[0].joke
    document.querySelector('#title').innerText = joke.title;
    document.querySelector('#output').innerText = joke.text;
  })
  .catch((err) => console.log(err))
}