let body = document.querySelector('body');
let toggle = document.querySelector('.toggle');
toggle.addEventListener('click',()=> {
    body.classList.toggle('active');
})