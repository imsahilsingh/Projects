let text = document.getElementById('text');
text.addEventListener('input',function (e) {
    let store= this.value;
    // console.log(store);
    document.getElementById('char').innerHTML = store.length;
    let array = store.split(' ');
    let clean = array.filter((val)=> {
        return val != '';
    } )
    // console.log(array);
    document.getElementById('word').innerHTML = clean.length;
    console.log(array.length);
    // if (array.length == ) {
    //     document.getElementById('word').innerHTML = 0;
    // }
    // char.innerHTML = storee.length;
})