/*

1. Кнопка, которая открывает попап, должна иметь дата атрибут data-open-popup,
ктороый должен содержать имя идентификатора попапа.

2. Серой облости попапа задаем id, который должен совпадать со значением дата отрибута
data-open-popup той ссылки, которая его открывает.

3. Самому попапу (выподающему блоку) задаем дата атрибут data-popup-content.

4. Элементам, которые закрывают попап, задаем дата атрибут data-close-popup.

Пример:
<button class="button" data-open-popup="first-popup">Открыть</button>
<div class="popup" id="first-popup">
    <div class="popup__content" data-popup-content>
        <button class="popup__close" data-close-popup>Закрыть</button>
    </div>
</div>

*/



const timePopup = 300;

document.addEventListener('keydown', closePopupEscape);
function closePopupEscape(e) {
    if (e.key === 'Escape') {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            closePopup(popup);
        });
    }
}

document.addEventListener('click', actionElement);
function actionElement(e) {
    if (e.target.closest('[data-open-popup]')) {
        openPopup(e.target.closest('[data-open-popup]'));
    }
    if (e.target.closest('[data-close-popup]')) {
        closePopup(e.target.closest('.popup'));
    }
}

function bodyLock() {
    const scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    document.querySelector('header').style.paddingRight = scrollWidth;
    document.querySelector('body').style.paddingRight = scrollWidth;
    document.querySelector('body').classList.add('_lock');
}

function bodyShow() {
    document.querySelector('header').style.paddingRight = 0;
    document.querySelector('body').style.paddingRight = 0;
    document.querySelector('body').classList.remove('_lock');
}

function openPopup(link) {
    bodyLock();
    const namePopup = link.getAttribute('data-open-popup');
    const popup = document.getElementById(namePopup);
    if (popup) {
        popup.classList.add('_open');
        popup.addEventListener('click', function (event) {
            if (!event.target.closest('[data-popup-content]')) {
                closePopup(popup);
            }
        });
    }
}

function closePopup(popup) {
    popup.classList.remove('_open');
    setTimeout(() => {
        bodyShow();
    }, timePopup);
}
