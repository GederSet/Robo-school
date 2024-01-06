/*

Отображает иконки (блоки) только на устройствах с тачскрином.
Для этого нужно просто добавить нужной иконке класс _schowIcon.

*/

document.addEventListener("DOMContentLoaded", showIcon);

function showIcon() {

    let isMobile = {
        Android: function () { return navigator.userAgent.match(/Android/i); },
        BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
        iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
        Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
        Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
        any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
    };



    // schow icon if touch
    if (isMobile.any()) {
        let iconMobile = document.querySelectorAll('._schowIcon');
        for (let i = 0; i < iconMobile.length; i++) {
            iconMobile[i].style.cssText = `
                    opacity:1;
                    visibility: visible;
                `;
        }
    }

}