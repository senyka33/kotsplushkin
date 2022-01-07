//Бургер меню 

let burger = document.querySelector('.bgmenu');
let menu = document.querySelector('.topnav');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

//Модальное окно Оформить заказ 

let modal = document.getElementsByClassName("popup")[0];
let btn = document.getElementsByClassName("common-button btn")[0];
let close = document.getElementsByClassName("popup-close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Кнопка вверх
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY > 500);
})
function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}