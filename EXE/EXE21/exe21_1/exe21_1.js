let input = document.querySelector('input');
let btn = document.querySelector('button');
let h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
    if (input.value >= 18) {
      h1.innerText = "you can drink appear";
    } else {
      h1.innerText = "you’re too young";
    }
  });