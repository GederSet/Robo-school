/*

1. Добавляем элементу класс _anim-items
2. В CSS сначала прописываем смещение элемента до анимации,
а при наличии класса _active задаем конечную позицию, прописанную в макете

Пример:

<div class="block _anim-items"></div>

.block {
    width:100px;
    height:100px;
    opacity:0;
    transform: translateY(-120%);
    transition: all 0.3s ease 0s;
}

.block._active {
    opacity:1;
    transform: translateY(0);
}

Если объект долэен анимироваться только 1 раз, то добавляем ему класс _anim-no-hide:

<div class="block _anim-items _anim-no-hide"></div>

*/

window.onload = function () {

    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        // Функция, для присвоения 
        // элементам классов
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                // анимация начинается, при пересечении
                // 1/4 высоты элемента
                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                // Если элемент большой, то анимация начинается
                // при пересечении 1/4 высоты окна браузера
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                }
                else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }


        // Получаем координаты элемента
        function offset(el) {
            // Получаем в переменную
            // размеры объекта
            // и его координаты
            const rect = el.getBoundingClientRect(),

                // Определяем колличество
                // прокрученных пикселей
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Получаем координаты 
            // положения объекта
            return { top: rect.top + scrollTop }
        }


        // Устанавливаем задержку
        // для анимации
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
}