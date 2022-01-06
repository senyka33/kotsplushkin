let burger = document.querySelector('.bgmenu');
let menu = document.querySelector('.topnav');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

let popups = document.querySelector('.popup');
let btn = document.querySelector('.common-button btn');
btn.addEventListener('click', function () {
    popups.classList.toggle('show');
})

