let screen = document.querySelector('.screen');
let dec = document.querySelector('.decrease');
let inc = document.querySelector('.increase');
let counter = 0;

let increase = () => {
    counter++;
    screen.innerHTML = counter;
}

let decrease = () => {
    counter--;
    if (counter < 0) {
        counter = 0;
    }
    screen.innerHTML = counter;

}
let reset = ()=> {
    counter = 0;
    screen.innerHTML = counter;
}