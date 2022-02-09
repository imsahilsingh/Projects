let slide = document.querySelectorAll(".slide");
let container = document.querySelector(".container");
let counter = 0;
let pbtn = document.querySelectorAll(".pag-btn");
let pagination = document.querySelector("pag-container");
let next = () => {
  console.log(counter);
  counter++;
  if (counter > slide.length - 1) {
    counter = 0;
  }
  navigator();
};
let prev = () => {
  console.log(counter);
  counter--;
  if (counter < 0) {
    counter = slide.length - 1;
  }
  console.log(counter);
  navigator();
};
let navigator = () => {
  slide.forEach((val) => {
    val.style.display = "none";
  });
  pbtn.forEach((val) => {
    val.classList.remove("active");
  });
  pbtn[counter].classList.add("active");
  slide[counter].style.display = "block";
};
window.addEventListener("DOMContentLoaded", () => {
  pbtn[counter].classList.add("active");
});
// if (!pagination) {
//     pagination = document.createElement('div');
//     pagination.className = 'pag-container';
//     container.append(pagination);
// }
// let items = [];
// for (let i = 0; i<slide.length; i++) {
//     items.push('<button class="pag-btn" data-index="'+i+'"></button>');
//     pagination.innerHTML = items.join('')
// }
// console.log(items);
