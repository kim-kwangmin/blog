let text = document.querySelector('.Counter');
let button = document.querySelector('.Darkmode');
let body = document.querySelector('body');

let isWhite = true;

button.addEventListener('click', function () { 
    body.style.backgroundColor = isWhite ? 'black' : '#ecf0f1';
    button.style.backgroundColor = isWhite ? 'white' : '#34495e';
    button.innerText = isWhite ? '☀️' : '🌙';
    text.style.color = isWhite ? 'white' : 'black';
    isWhite = !isWhite;
});