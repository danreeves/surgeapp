var appState = require('./appState');
var slider = document.querySelector('#slider');
var slides = document.querySelector('.slides');

var legend = document.querySelector('#project');
var domain = document.querySelector('#domain');
var domainEmpty = document.querySelector('.js-domain-empty');
var cnameDetected = document.querySelector('.js-cname-detected');

module.exports = function surgeForm () {
    if (slider.classList.contains('slider--3')) {
        slides.style.opacity = 0;
        setTimeout(setForm, 197);
        setTimeout(function () {
            slides.style.opacity = 1;
        }, 400);
    } else {
        setForm();
        goTo(3);
    }
};

function setForm () {
    legend.innerHTML = appState.project;
    if (appState.CNAME != null) {
        domain.value = appState.CNAME;
        cnameDetected.style.display = 'block';
        domainEmpty.style.display = 'none';
    } else {
        cnameDetected.style.display = 'none';
        domainEmpty.style.display = 'block';
        domain.value = '';
    }
}
domain.addEventListener('keyup', function () {
    console.log(domain.value + ' ' + appState.CNAME)
    if (domain.value.length) {
        domainEmpty.style.display = 'none';
        cnameDetected.style.display = 'none';
    } else {
        domainEmpty.style.display = 'block';
        cnameDetected.style.display = 'none';
    }
    if (domain.value.trim() === appState.CNAME.trim()) {
        cnameDetected.style.display = 'block';
        domainEmpty.style.display = 'none';
    }
});
