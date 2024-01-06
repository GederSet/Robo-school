document.addEventListener('click', menuBurger);

function menuBurger(e) {
    if (e.target.closest('.menu-burger')) {
        document.querySelector('body').classList.toggle('_lock');
        document.querySelector('.menu').classList.toggle('_active');
        document.querySelector('.menu-burger').classList.toggle('_active');
    }
}