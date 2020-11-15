// This is about counter

let counter = document.querySelector('.Counter');
let minusbutton = document.querySelector('.Minus');
let plusbutton = document.querySelector('.Plus');

plusbutton.addEventListener('click', function(){
    target = Number(counter.innerText);
    target++;
    counter.innerText = target.toString();
});

minusbutton.addEventListener('click', function() {
    let target = Number(counter.innerText);
    target--;
    counter.innerText = target.toString();
});