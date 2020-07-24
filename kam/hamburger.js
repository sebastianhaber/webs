var hamburger = document.querySelector('#hamburger');
var menu = document.querySelector('#hamburger-menu');
var body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('active');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('active');
});
