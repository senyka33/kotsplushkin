//Burger Menu

let burger = document.querySelector('.bgmenu');
let menu = document.querySelector('.topnav');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

//Modal window Checkout

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

//Button Up
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

// Submit Order

const form = document.querySelector('form');

function retrieveFormValue(event) {
    event.preventDefault();
    const fname = form.querySelector('[name="fname"]'),
        lname = form.querySelector('[name="lname"]'),
        phone = form.querySelector('[name="phone"]'),
        colorcat = form.querySelector('[name="colorcat"]'),
        textincat = form.querySelector('[name="textincat"]'),
        colortext = form.querySelector('[name="colortext"]'),
        eggs = form.querySelector('[name=eggs]'),
        eyelashes = form.querySelector('[name=eyelashes]');
    const values = {
        fname: fname.value,
        lname: lname.value,
        phone: phone.value,
        colorcat: colorcat.value,
        textincat: textincat.value,
        colortext: colortext.value,
        eggs: eggs.checked,
        eyelashes: eyelashes.checked
    };
    console.log('OREDER', values);
    form.reset();
}

form.addEventListener('submit', retrieveFormValue);

