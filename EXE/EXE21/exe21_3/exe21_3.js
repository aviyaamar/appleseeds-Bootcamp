let submit = document.querySelector(".submit");
let message = document.querySelector("h2");
let textarea = document.querySelector("textarea");


console.log(textarea.value.length);

submit.addEventListener("click", () => {
  if (textarea.value.length < 100) {
    message.style.display = "block";
    message.innerText='you need to write 100 character';
  } else {
    textarea.value = "Send";
  }
});

