    let text = document.querySelector("input");
    let btn = document.querySelector("button");
    let imgSmiley = document.querySelector(".smiley");
    let img = document.createElement("div");

    btn.addEventListener("click", () => {
      while (imgSmiley.firstChild) {
        imgSmiley.removeChild(imgSmiley.firstChild);
      }
      for (let i = 0; i < text.value; i++) {
        img[i] = document.createElement("img");
        img[i].setAttribute("src", "/EXE/EXE21/exe21_5/emoji.jpg");
        imgSmiley.appendChild(img[i]);
      }
    });