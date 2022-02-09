let btn = document.querySelector('.btn');
let body = document.body;
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',()=> {
    // let random = Math.floor(Math.random() * hex.length -1);
    // console.log(random);
    let hexcolor = '#';
    for (let i = 0; i<6; i++) {
        hexcolor+= hex[random()];
    }
    console.log(hexcolor);
    body.style.background = hexcolor;
})
const random = ()=> {
      return Math.floor(Math.random() * hex.length)  
    }