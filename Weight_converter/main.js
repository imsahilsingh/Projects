let value = document.querySelector("form");
let value1 = document.querySelector("#kg");
let result = document.querySelector(".result");
value.addEventListener("submit", (e) => {
  e.preventDefault();
  let store = value1.value;
  if (isNaN(store) || store < 0) {
    result.innerHTML = "Enter a Vaild Number";
  } else {
    let answer = Number(store) * 2.20462;
    result.innerHTML = answer.toFixed(2);
  }
});
