let formONE = document.querySelector("#loan-form");
let amt = document.querySelector("#amount");
let interest = document.querySelector("#interest");
let year = document.querySelector("#years");
let warn = document.querySelector(".alert");
formONE.addEventListener("submit", calcu);

function calcu(e) {
  e.preventDefault();
  document.querySelector("#result").style.display = "none";
  if (amt.value === "" || year.value === "" || interest.value === "") {
    warn.style.display = "inline";
    setTimeout(function() {
      warn.style.display = "none";
    }, 2500);
  } else {
    document.querySelector("#loading").style.display = "inline";
    setTimeout(function() {
      document.querySelector("#loading").style.display = "none";
      document.querySelector("#result").style.display = "inline";
      showResult(amt.value, interest.value, year.value);
    }, 2500);
  }
}
function showResult(a, i, t) {
  let li = i / 1200;
  let lt = t * 12;
  let ld = ((1 + li) ** lt - 1) / (li * (1 + li) ** lt);
  let p = a / ld;
  document.querySelector("#monthly-payment").value =
    Math.round(p * 1000) / 1000;
  document.querySelector("#total-payment").value =
    Math.round(p * lt * 1000) / 1000;
  document.querySelector("#total-interest").value =
    Math.round((p * lt - a) * 1000) / 1000;
}
