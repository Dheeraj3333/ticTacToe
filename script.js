let button = document.querySelectorAll(".box");
let newGame = document.querySelector(".newgame");
let input = document.querySelectorAll(".input");
const winner = document.querySelector("#winner");
const suar = document.querySelector("#suar");
let image = document.querySelectorAll("img");
let player = 1;
let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
button.forEach((box) => {
  box.addEventListener("click", () => {
    if (player == 1) {
      box.innerText = "X";
      player = 2;
      box.style.color = "red";
      box.disabled = true;
      console.log(input[0].value);
    } else {
      box.innerText = "O";
      player = 1;
      box.style.color = "green";
      box.disabled = true;
      console.log(input[1].value);
    }
    checkWinner();
  });
});

let checkWinner = () => {
  for (let pattern of patterns) {
    let pos1value = button[pattern[0]].innerText;
    let pos2value = button[pattern[1]].innerText;
    let pos3value = button[pattern[2]].innerText;
    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        console.log("winner");
        if (pos1value === "X") {
          winner.style.display = "block";
          image[1].style.transform = "scale(1) translateY(0px)";
        } else if (pos1value === "O") {
          suar.style.display = "block";
          image[0].style.transform = "scale(1) translateY(0)";
        }
        button.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  }
};
newGame.addEventListener("click", () => {
  button.forEach((box) => {
    box.disabled = false;
    winner.style.display = "none";
    suar.style.display = "none";
    input[0].value = null;
    input[1].value = null;
    image[0].style.transform = "scale(0) translateY(-100px)";
    image[1].style.transform = "scale(0) translateY(-100px)";
    box.innerText = "";
  });
});
