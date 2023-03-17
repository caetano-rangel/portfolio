var rgb = document.querySelector('#rgb');

rgb.addEventListener('click', function(){
    var txt = document.querySelector('.h1-edu');
    var txt2 = document.querySelector('.h1');
    var txt3 = document.querySelector('.h2');
    var txt4 = document.querySelector('#h1proj.h1');
    var txt5 = document.querySelector('#h2edu.h2');
    var txt6 = document.querySelector('.home-light');
    var footer = document.querySelector('.footer');
    var slide = document.querySelector('.slider');
    var caetano = document.querySelector('.caetano');
    var edu = document.querySelector('.img-edu');
    var nav = document.querySelector('.nav-light');

    txt.classList.toggle('rgb-txt');
    txt2.classList.toggle('rgb-txt');
    txt3.classList.toggle('rgb-txt');
    txt4.classList.toggle('rgb-txt');
    txt5.classList.toggle('rgb-txt');
    txt6.classList.toggle('rgb-txt');
    footer.classList.toggle('rgb-border-footer');
    slide.classList.toggle('rgb-border');
    caetano.classList.toggle('rgb-border');
    edu.classList.toggle('rgb-border');
    nav.classList.toggle('rgb-border-nav');
})