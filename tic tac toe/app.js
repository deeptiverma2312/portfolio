let enter = document.querySelector("form");
let name = document.querySelector(".input");
let symbol = document.querySelector(".choose");
let player2 = "Computer";
let player1;
let player1symbol = "O";
let player2symbol = "O";
let status = "running";
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let btn = document.querySelector(".btn");
let current = "p";
enter.addEventListener("submit", start);
symbol.addEventListener("click", game);
btn.addEventListener("click", function() {
  location.reload();
});
function start(e) {
  player1 = name.value;
  player1 = player1.charAt(0).toUpperCase() + player1.slice(1);
  document.querySelector(".first").textContent = player1;
  document.querySelector(".second").textContent = player2;
  document.querySelector(".name").style.display = "none";
  document.querySelector(".card").style.display = "inline";
  e.preventDefault();
}
function game(e) {
  if (e.target.className == "symbol X") {
    player1symbol = "X";
  } else {
    player2symbol = "X";
  }
  document.querySelector(".choice").style.display = "none";
  document.querySelector(".arina").style.display = "flex";
  document.querySelector(".first").style.background = "#0affff";
  document.getElementById("click").className = "click";
  gameOn();
}
function gameOn() {
  document.querySelector(".click").addEventListener("click", player);
}

function player(e) {
  if (
    e.target.classList.contains("clickable") &&
    current == "p" &&
    status == "running"
  ) {
    current = "c";
    if (player1symbol == "X") {
      e.target.style.backgroundImage = "url(./X3.png)";
    } else {
      e.target.style.backgroundImage = "url(./O.png)";
    }
    e.target.classList.remove("clickable");
    e.target.classList.add(player1symbol);

    setTimeout(function() {
      checkStatus(player1symbol);
    }, 1000);
    document.querySelector(".first").style.background = "white";
    document.querySelector(".second").style.background = "#0affff";
    setTimeout(computer, 1000);
  }
}
function checkStatus(cls) {
  if (status == "running") {
    if (
      one.classList.contains(cls) &&
      two.classList.contains(cls) &&
      three.classList.contains(cls)
    ) {
      status = "over";
      one.style.backgroundColor = "#0affff";
      two.style.backgroundColor = "#0affff";
      three.style.backgroundColor = "#0affff";
    }

    if (
      four.classList.contains(cls) &&
      five.classList.contains(cls) &&
      six.classList.contains(cls)
    ) {
      status = "over";
      four.style.backgroundColor = "#0affff";
      five.style.backgroundColor = "#0affff";
      six.style.backgroundColor = "#0affff";
    }
    if (
      seven.classList.contains(cls) &&
      eight.classList.contains(cls) &&
      nine.classList.contains(cls)
    ) {
      status = "over";
      seven.style.backgroundColor = "#0affff";
      eight.style.backgroundColor = "#0affff";
      nine.style.backgroundColor = "#0affff";
    }
    if (
      one.classList.contains(cls) &&
      four.classList.contains(cls) &&
      seven.classList.contains(cls)
    ) {
      status = "over";
      one.style.backgroundColor = "#0affff";
      four.style.backgroundColor = "#0affff";
      seven.style.backgroundColor = "#0affff";
    }
    if (
      two.classList.contains(cls) &&
      five.classList.contains(cls) &&
      eight.classList.contains(cls)
    ) {
      status = "over";
      two.style.backgroundColor = "#0affff";
      five.style.backgroundColor = "#0affff";
      eight.style.backgroundColor = "#0affff";
    }
    if (
      three.classList.contains(cls) &&
      six.classList.contains(cls) &&
      nine.classList.contains(cls)
    ) {
      status = "over";
      three.style.backgroundColor = "#0affff";
      six.style.backgroundColor = "#0affff";
      nine.style.backgroundColor = "#0affff";
    }
    if (
      one.classList.contains(cls) &&
      five.classList.contains(cls) &&
      nine.classList.contains(cls)
    ) {
      status = "over";
      one.style.backgroundColor = "#0affff";
      five.style.backgroundColor = "#0affff";
      nine.style.backgroundColor = "#0affff";
    }
    if (
      three.classList.contains(cls) &&
      five.classList.contains(cls) &&
      seven.classList.contains(cls)
    ) {
      status = "over";
      three.style.backgroundColor = "#0affff";
      five.style.backgroundColor = "#0affff";
      seven.style.backgroundColor = "#0affff";
    }
    if (
      !(
        one.classList.contains("clickable") ||
        two.classList.contains("clickable") ||
        three.classList.contains("clickable") ||
        four.classList.contains("clickable") ||
        five.classList.contains("clickable") ||
        six.classList.contains("clickable") ||
        seven.classList.contains("clickable") ||
        eight.classList.contains("clickable") ||
        nine.classList.contains("clickable")
      )
    ) {
      status = "complete";
    }
    if (status == "over") {
      document.querySelector(".arina").style.display = "none";
      current = "over";
      if (cls == player2symbol) {
        document.querySelector(".won").textContent = "You Lose";
        btn.style.display = "inline";
      } else if (cls == player1symbol) {
        document.querySelector(".won").textContent = "You Win";
        btn.style.display = "inline";
      }

      document.querySelector(".won").style.display = "inline";
    } else if (status == "complete") {
      document.querySelector(".arina").style.display = "none";
      document.querySelector(".won").textContent = "Game draw";
      document.querySelector(".won").style.display = "inline";
      btn.style.display = "inline";
    }
  }
}

function computer() {
  if (current == "c") {
    /*to win*/
    if (
      ((two.classList.contains(player2symbol) &&
        three.classList.contains(player2symbol)) ||
        (four.classList.contains(player2symbol) &&
          seven.classList.contains(player2symbol)) ||
        (five.classList.contains(player2symbol) &&
          nine.classList.contains(player2symbol))) &&
      one.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        one.style.backgroundImage = "url(./X3.png)";
      } else {
        one.style.backgroundImage = "url(./O.png)";
      }
      one.classList.remove("clickable");
      one.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player2symbol) &&
        three.classList.contains(player2symbol)) ||
        (five.classList.contains(player2symbol) &&
          eight.classList.contains(player2symbol))) &&
      two.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        two.style.backgroundImage = "url(./X3.png)";
      } else {
        two.style.backgroundImage = "url(./O.png)";
      }
      two.classList.remove("clickable");
      two.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player2symbol) &&
        two.classList.contains(player2symbol)) ||
        (five.classList.contains(player2symbol) &&
          seven.classList.contains(player2symbol)) ||
        (six.classList.contains(player2symbol) &&
          nine.classList.contains(player2symbol))) &&
      three.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        three.style.backgroundImage = "url(./X3.png)";
      } else {
        three.style.backgroundImage = "url(./O.png)";
      }
      three.classList.remove("clickable");
      three.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player2symbol) &&
        seven.classList.contains(player2symbol)) ||
        (five.classList.contains(player2symbol) &&
          six.classList.contains(player2symbol))) &&
      four.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        four.style.backgroundImage = "url(./X3.png)";
      } else {
        four.style.backgroundImage = "url(./O.png)";
      }
      four.classList.remove("clickable");
      four.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player2symbol) &&
        nine.classList.contains(player2symbol)) ||
        (three.classList.contains(player2symbol) &&
          seven.classList.contains(player2symbol)) ||
        (four.classList.contains(player2symbol) &&
          six.classList.contains(player2symbol)) ||
        (two.classList.contains(player2symbol) &&
          eight.classList.contains(player2symbol))) &&
      five.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        five.style.backgroundImage = "url(./X3.png)";
      } else {
        five.style.backgroundImage = "url(./O.png)";
      }
      five.classList.remove("clickable");
      five.classList.add(player2symbol);
    } else if (
      ((three.classList.contains(player2symbol) &&
        nine.classList.contains(player2symbol)) ||
        (four.classList.contains(player2symbol) &&
          five.classList.contains(player2symbol))) &&
      six.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        six.style.backgroundImage = "url(./X3.png)";
      } else {
        six.style.backgroundImage = "url(./O.png)";
      }
      six.classList.remove("clickable");
      six.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player2symbol) &&
        four.classList.contains(player2symbol)) ||
        (three.classList.contains(player2symbol) &&
          five.classList.contains(player2symbol)) ||
        (eight.classList.contains(player2symbol) &&
          nine.classList.contains(player2symbol))) &&
      seven.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        seven.style.backgroundImage = "url(./X3.png)";
      } else {
        seven.style.backgroundImage = "url(./O.png)";
      }
      seven.classList.remove("clickable");
      seven.classList.add(player2symbol);
    } else if (
      ((two.classList.contains(player2symbol) &&
        five.classList.contains(player2symbol)) ||
        (seven.classList.contains(player2symbol) &&
          nine.classList.contains(player2symbol))) &&
      eight.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        eight.style.backgroundImage = "url(./X3.png)";
      } else {
        eight.style.backgroundImage = "url(./O.png)";
      }
      eight.classList.remove("clickable");
      eight.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player2symbol) &&
        five.classList.contains(player2symbol)) ||
        (seven.classList.contains(player2symbol) &&
          eight.classList.contains(player2symbol)) ||
        (three.classList.contains(player2symbol) &&
          six.classList.contains(player2symbol))) &&
      nine.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        nine.style.backgroundImage = "url(./X3.png)";
      } else {
        nine.style.backgroundImage = "url(./O.png)";
      }
      nine.classList.remove("clickable");
      nine.classList.add(player2symbol);
    } /*prevent lose*/ else if (
      ((two.classList.contains(player1symbol) &&
        three.classList.contains(player1symbol)) ||
        (four.classList.contains(player1symbol) &&
          seven.classList.contains(player1symbol)) ||
        (five.classList.contains(player1symbol) &&
          nine.classList.contains(player1symbol))) &&
      one.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        one.style.backgroundImage = "url(./X3.png)";
      } else {
        one.style.backgroundImage = "url(./O.png)";
      }
      one.classList.remove("clickable");
      one.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player1symbol) &&
        three.classList.contains(player1symbol)) ||
        (five.classList.contains(player1symbol) &&
          eight.classList.contains(player1symbol))) &&
      two.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        two.style.backgroundImage = "url(./X3.png)";
      } else {
        two.style.backgroundImage = "url(./O.png)";
      }
      two.classList.remove("clickable");
      two.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player1symbol) &&
        two.classList.contains(player1symbol)) ||
        (five.classList.contains(player1symbol) &&
          seven.classList.contains(player1symbol)) ||
        (six.classList.contains(player1symbol) &&
          nine.classList.contains(player1symbol))) &&
      three.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        three.style.backgroundImage = "url(./X3.png)";
      } else {
        three.style.backgroundImage = "url(./O.png)";
      }
      three.classList.remove("clickable");
      three.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player1symbol) &&
        seven.classList.contains(player1symbol)) ||
        (five.classList.contains(player1symbol) &&
          six.classList.contains(player1symbol))) &&
      four.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        four.style.backgroundImage = "url(./X3.png)";
      } else {
        four.style.backgroundImage = "url(./O.png)";
      }
      four.classList.remove("clickable");
      four.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player1symbol) &&
        nine.classList.contains(player1symbol)) ||
        (three.classList.contains(player1symbol) &&
          seven.classList.contains(player1symbol)) ||
        (four.classList.contains(player1symbol) &&
          six.classList.contains(player1symbol)) ||
        (two.classList.contains(player1symbol) &&
          eight.classList.contains(player1symbol))) &&
      five.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        five.style.backgroundImage = "url(./X3.png)";
      } else {
        five.style.backgroundImage = "url(./O.png)";
      }
      five.classList.remove("clickable");
      five.classList.add(player2symbol);
    } else if (
      ((three.classList.contains(player1symbol) &&
        nine.classList.contains(player1symbol)) ||
        (four.classList.contains(player1symbol) &&
          five.classList.contains(player1symbol))) &&
      six.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        six.style.backgroundImage = "url(./X3.png)";
      } else {
        six.style.backgroundImage = "url(./O.png)";
      }
      six.classList.remove("clickable");
      six.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player1symbol) &&
        four.classList.contains(player1symbol)) ||
        (three.classList.contains(player1symbol) &&
          five.classList.contains(player1symbol)) ||
        (eight.classList.contains(player1symbol) &&
          nine.classList.contains(player1symbol))) &&
      seven.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        seven.style.backgroundImage = "url(./X3.png)";
      } else {
        seven.style.backgroundImage = "url(./O.png)";
      }
      seven.classList.remove("clickable");
      seven.classList.add(player2symbol);
    } else if (
      ((two.classList.contains(player1symbol) &&
        five.classList.contains(player1symbol)) ||
        (seven.classList.contains(player1symbol) &&
          nine.classList.contains(player1symbol))) &&
      eight.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        eight.style.backgroundImage = "url(./X3.png)";
      } else {
        eight.style.backgroundImage = "url(./O.png)";
      }
      eight.classList.remove("clickable");
      eight.classList.add(player2symbol);
    } else if (
      ((one.classList.contains(player1symbol) &&
        five.classList.contains(player1symbol)) ||
        (seven.classList.contains(player1symbol) &&
          eight.classList.contains(player1symbol)) ||
        (three.classList.contains(player1symbol) &&
          six.classList.contains(player1symbol))) &&
      nine.classList.contains("clickable")
    ) {
      if (player2symbol == "X") {
        nine.style.backgroundImage = "url(./X3.png)";
      } else {
        nine.style.backgroundImage = "url(./O.png)";
      }
      nine.classList.remove("clickable");
      nine.classList.add(player2symbol);
    } else if (five.classList.contains("clickable")) {
      /*general steps*/
      if (player2symbol == "X") {
        five.style.backgroundImage = "url(./X3.png)";
      } else {
        five.style.backgroundImage = "url(./O.png)";
      }
      five.classList.remove("clickable");
      five.classList.add(player2symbol);
    } else if (three.classList.contains("clickable")) {
      if (player2symbol == "X") {
        three.style.backgroundImage = "url(./X3.png)";
      } else {
        three.style.backgroundImage = "url(./O.png)";
      }
      three.classList.remove("clickable");
      three.classList.add(player2symbol);
    } else if (seven.classList.contains("clickable")) {
      if (player2symbol == "X") {
        seven.style.backgroundImage = "url(./X3.png)";
      } else {
        seven.style.backgroundImage = "url(./O.png)";
      }
      seven.classList.remove("clickable");
      seven.classList.add(player2symbol);
    } else if (one.classList.contains("clickable")) {
      if (player2symbol == "X") {
        one.style.backgroundImage = "url(./X3.png)";
      } else {
        one.style.backgroundImage = "url(./O.png)";
      }
      one.classList.remove("clickable");
      one.classList.add(player2symbol);
    } else if (two.classList.contains("clickable")) {
      if (player2symbol == "X") {
        two.style.backgroundImage = "url(./X3.png)";
      } else {
        two.style.backgroundImage = "url(./O.png)";
      }
      two.classList.remove("clickable");
      two.classList.add(player2symbol);
    } else if (four.classList.contains("clickable")) {
      if (player2symbol == "X") {
        four.style.backgroundImage = "url(./X3.png)";
      } else {
        four.style.backgroundImage = "url(./O.png)";
      }
      four.classList.remove("clickable");
      four.classList.add(player2symbol);
    } else if (six.classList.contains("clickable")) {
      if (player2symbol == "X") {
        six.style.backgroundImage = "url(./X3.png)";
      } else {
        six.style.backgroundImage = "url(./O.png)";
      }
      six.classList.remove("clickable");
      six.classList.add(player2symbol);
    } else if (eight.classList.contains("clickable")) {
      if (player2symbol == "X") {
        eight.style.backgroundImage = "url(./X3.png)";
      } else {
        eight.style.backgroundImage = "url(./O.png)";
      }
      eight.classList.remove("clickable");
      eight.classList.add(player2symbol);
    } else if (nine.classList.contains("clickable")) {
      if (player2symbol == "X") {
        nine.style.backgroundImage = "url(./X3.png)";
      } else {
        nine.style.backgroundImage = "url(./O.png)";
      }
      nine.classList.remove("clickable");
      nine.classList.add(player2symbol);
    }
    setTimeout(function() {
      checkStatus(player2symbol);
    }, 1000);
    current = "p";
    document.querySelector(".second").style.background = "white";
    document.querySelector(".first").style.backgroundColor = "#0affff";
  }
}
