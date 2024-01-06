/*

1. Добавляем кнопкам дата атрибут data-counter-change
2. Добавляем блоку с минусом дата атрибут data-counter-button="minus"
3. Добавляем блоку с плюсом дата атрибут data-counter-button="plus"
4. Добавляем блоку с числом дата атрибут data-counter-number
5. Добавляем блоку с числом value="1" и type="text"
6. Добавляем блоку с числом ограничитель с помощью атрибута max
7. В CSS приписываем стили для заблокированных кнопок с помощью класса ._disabled

Пример:

<div class="counter">
    <button class="counter__button" data-counter-change data-counter-button="minus"></button>
    <input class="counter__number" data-counter-number type="text" value="1" max="100" inputmode="numeric">
    <button class="counter__button" data-counter-change data-counter-button="plus"></button>
</div>

.counter__button._disabled{
    background-color: grey;
}

*/

window.onload = function () {
    disabledMinus();

    document.addEventListener('click', changeCount);
    function changeCount(e) {

        if (e.target.closest('[data-counter-change]')) {

            const button = e.target.closest('[data-counter-change]');
            const status = button.dataset.counterButton;
            const input = button.parentElement.querySelector('[data-counter-number]');
            const maxValue = +input.getAttribute('max');
            const buttonMinus = button.parentElement.querySelector('[data-counter-button="minus"]');
            const buttonPlus = button.parentElement.querySelector('[data-counter-button="plus"]');

            let countProduct = parseInt(input.value);

            if (status === 'plus' && countProduct < maxValue && countProduct + 1 != maxValue) {
                countProduct++;
                input.setAttribute('value', countProduct);
                buttonMinus.classList.remove('_disabled');

            } else if (status === 'plus' && countProduct + 1 === maxValue) {
                countProduct++;
                input.setAttribute('value', countProduct);
                buttonPlus.classList.add('_disabled');

            } else if (status === 'minus' && countProduct - 1 === 1) {
                countProduct--
                input.setAttribute('value', countProduct);
                buttonMinus.classList.add('_disabled');

            } else if (status === 'minus' && countProduct > 1) {
                countProduct--
                input.setAttribute('value', countProduct);
                buttonPlus.classList.remove('_disabled');
            }

            input.value = countProduct;
        }

    }

    const inputCounts = document.querySelectorAll('[data-counter-number]');
    inputCounts.forEach(inputCount => {
        inputCount.addEventListener('input', deleteStringCounter);
    });


    function deleteStringCounter() {
        const maxValue = parseInt(this.getAttribute('max'));
        const counter = this;
        counter.value = counter.value.replace(/\D/g, '');

        if (counter.value == 0 || counter.value == 1) {
            counter.value = 1;
            counter.setAttribute('value', counter.value);
            counter.nextElementSibling.classList.remove('_disabled');
            counter.previousElementSibling.classList.add('_disabled');

        } else if (counter.value >= maxValue) {
            counter.value = maxValue;
            counter.setAttribute('value', counter.value);
            counter.nextElementSibling.classList.add('_disabled');

        } else if (counter.value > 1 && counter.value < maxValue) {
            counter.setAttribute('value', counter.value);
            counter.nextElementSibling.classList.remove('_disabled');
            counter.previousElementSibling.classList.remove('_disabled');
        }
    }

    function disabledMinus() {

        const counters = document.querySelectorAll('[data-counter-number]');
        counters.forEach(counter => {

            const count = parseInt(counter.getAttribute('value'));
            const maxValue = parseInt(counter.getAttribute('max'));
            if (count === 1) {
                const button = counter.previousElementSibling;
                button.classList.add('_disabled');
            } else if (count === maxValue) {
                const button = counter.nextElementSibling;
                button.classList.add('_disabled');
            }

        });

    }
}