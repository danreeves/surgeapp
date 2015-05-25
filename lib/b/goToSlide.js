
module.exports = function goToSlide (num) {

    var slider = document.querySelector('#slider');

    if (num == null) num = 0;

    slider.setAttribute('class', '');
    slider.classList.add('slider--' + num);

}
