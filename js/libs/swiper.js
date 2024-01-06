window.addEventListener('load', () => {

    new Swiper('.slider', {

        // Кнопки "влево/вправо"
        navigation: {
            prevEl: '.prev',
            nextEl: '.next',
        },

        // Пагинация
        pagination: {
            el: '.pagination',
            clickable: true,
        },

        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,

        // Клавиатура
        // keyboard: {
        //     enabled: true,
        //     onlyInViewport: true,
        //     pageUpDown: true,
        // },

        // Брейкпоинты
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 0,
        //         autoHeight: true,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //         spaceBetween: 10,
        //     },
        //     1500: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        // },

        // События
        on: {

        }

        //touchRatio: 0,
        //simulateTouch: false,
        //loop: true,
        //preloadImages: false,
        //lazy: true,

        // Эффекты
        // effect: 'fade',
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

        // Скроллбар
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     draggable: true,
        // },

    });

});