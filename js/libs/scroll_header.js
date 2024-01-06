let lastScroll = 0;
const headerContainer = document.querySelector('header');

let scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
let hideHeader = () => headerContainer.classList.contains('_hide');

// Скрытие при каждой прокрутке
// window.addEventListener('scroll', () => {

//     if (scrollPosition() > lastScroll && !hideHeader()) {
//         let headerHeight = headerContainer.offsetHeight;
//         headerContainer.style.top = `-${headerHeight}px`;
//         headerContainer.classList.add('_hide');
//     }

//     else if (scrollPosition() < lastScroll && hideHeader()) {
//         headerContainer.style.top = `0px`;
//         headerContainer.classList.remove('_hide');
//     }

//     lastScroll = scrollPosition();

// });

// Скрытие только при одной прокрутке
// window.addEventListener('scroll', () => {

//     if (scrollPosition() > 0 && !hideHeader()) {
//         headerContainer.classList.add('_hide');
//     }

//     else if (scrollPosition() === 0 && hideHeader()) {
//         headerContainer.classList.remove('_hide');
//     }

//     lastScroll = scrollPosition();

// });