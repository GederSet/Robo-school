let placeholder = null;
document.addEventListener('click', changePlaceholder);

function changePlaceholder(e) {

    const element = e.target;

    if (document.querySelector('[placeholder=""]') && (!element.closest('[placeholder]') || element.placeholder != '')) {
        document.querySelector('[placeholder=""]').placeholder = placeholder;
    }

    if (element.closest('[placeholder]') && element.placeholder != '') {
        placeholder = element.placeholder;
        element.placeholder = '';
    }

}
