const min = 0,
  max = 10;
let guesses = 2;
let winnum = Math.floor(Math.random() * 11);
const i = document.querySelector("#input");
const btn = document.querySelector("form");
btn.addEventListener("submit", gameStart);
btn.addEventListener("click", function(e) {
  if (e.target.className == "submit replay") {
    location.reload();
  }
});
function gameStart(e) {
  if (i.value < 0 || i.value > max || i.value == "") {
    i.style.border = "3px solid #ff69d2";
    setMessage("Please enter between 0 and 10");
    i.value = "";
  } else {
    load();
    setTimeout(function() {
      if (i.value == winnum) {
        win();
        gameover();
      } else if (guesses != 0) {
        if (i.value > winnum) {
          setMessage("number is bigger, try a smaller number ");
          guesses -= 1;
          document.querySelector(".guess").textContent =
            "No of guesses left-" + guesses;
        } else if (i.value < winnum) {
          setMessage("number is smaller, try a bigger number");
          guesses -= 1;
          document.querySelector(".guess").textContent =
            "No of guesses left-" + guesses;
        }
      } else {
        lose();
        gameover();
      }
      i.value = "";
    }, 3000);
  }

  e.preventDefault();
}
function setMessage(mes) {
  document.querySelector(".message").textContent = mes;
  document.querySelector(".message").style.color = "#ff69d2";
}
function win() {
  setMessage("YOU WON");
  document.querySelector(".win").style.display = "inline";
  document.querySelector(".container").style.backgroundImage =
    "url(./wingif.gif)";
}
function gameover() {
  document.querySelector(".guess").style.display = "none";
  input.disabled = true;
  document.querySelector(".submit").value = "Play Again";
  document.querySelector(".submit").className = "submit replay";
}
function load() {
  setMessage("");
  document.querySelector(".loading").style.display = "inline";
  document.querySelector(".loadimg").style.display = "inline";
  setTimeout(function() {
    document.querySelector(".loading").style.display = "none";
  }, 3000);
}

function lose() {
  document.querySelector(".lose").style.display = "inline";
  setMessage("YOU LOSE");
}
