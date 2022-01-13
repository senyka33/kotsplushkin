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

// Появление элементов
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('active');
        }
    });
}

let options = {
    threshold: [0.1]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.delivery-item, .price-item, .order-item, .splushkin-news, .splushkin-gallery');

for (let elm of elements) {
    observer.observe(elm);
}

