/*

Блоку, по которому будут вести мышкой для параллакс эффекта, добавляем атрибут data-parallax-container.
Движущимся элементам добавляем атрибут data-parallax-element.
Что бы указать скорость движения элементов, движущемуся элементу также добавляется атрибут data-parallax-speed.

Пример:

<div class="parallax" data-parallax-container>
    <div class="parallax__element" data-parallax-element data-parallax-speed="0.18"></div>
    <div class="parallax__element" data-parallax-element data-parallax-speed="0.18"></div>
    <div class="parallax__element" data-parallax-element data-parallax-speed="0.50"></div>
</div>

Уровень вложенности дотчернего элемента не влияет на работу параллакса.

*/



window.onload = function () {

    const parallaxContainers = document.querySelectorAll('[data-parallax-container]');

    if (parallaxContainers) {
        for (let parallaxContainer of parallaxContainers) {
            parallaxContainer.addEventListener('mousemove', coordMouse);
            parallaxContainer.addEventListener('mouseleave', stopParallax);
        }

        function getParallaxElements(parallaxContainer) {

            const parallaxElements = parallaxContainer.querySelectorAll('[data-parallax-element]');
            return parallaxElements;

        }

        function coordMouse(event) {

            const parallaxElements = getParallaxElements(this);

            const clientX = event.clientX;
            const clientY = event.clientY;

            const parallaxLeftOffset = this.getBoundingClientRect().left;
            const parallaxTopOffset = this.getBoundingClientRect().top;

            const coordX = clientX - parallaxLeftOffset - 0.5 * this.offsetWidth;
            const coordY = clientY - parallaxTopOffset - 0.5 * this.offsetHeight;

            parallaxElements.forEach((element) => {
                const speed = element.dataset.parallaxSpeed;
                const x = - (coordX * speed).toFixed(2);
                const y = - (coordY * speed).toFixed(2);
                element.style.transform = `translate(${x}px, ${y}px)`;
            });

        }

        function stopParallax() {

            const parallaxElements = getParallaxElements(this);

            parallaxElements.forEach((element) => {
                element.style.transform = `translate(0px, 0px)`;
            });

        }
    }

}