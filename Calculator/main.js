let btn = document.querySelectorAll(".btn");
let screen = document.querySelector("#screen");
let submit = document.querySelector(".btn-equal");
let clear = document.querySelector('.btn-clear');
btn.forEach((val) => {
  // console.log(val);
  val.addEventListener("click", (e) => {
    // console.log(e.target);
    let store = e.target.dataset.num;
    // console.log(store);
    screen.value += store;
    console.log(screen);
  });
});
submit.addEventListener("click", (e) => {
  if (screen.value === "") {
    screen.value = "Please Enter a No.";
    setTimeout(() => {
      screen.value = "";
    }, 2000);
  }
  else {
      let answer = eval(screen.value);
      screen.value = answer;
  }
});
clear.addEventListener('click',()=> {
    screen.value = '';
})