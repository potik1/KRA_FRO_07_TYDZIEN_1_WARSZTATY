document.addEventListener('DOMContentLoaded', function () {

    // ---------------WYSUWANIE PODMENU Z HEADERA-------------//

    var hovMenu = document.querySelector('#hov_menu');
    var lista = document.querySelector('#lista').lastElementChild;


    lista.addEventListener('mouseover', function () {

        hovMenu.style.visibility = 'visible';
    });

    lista.addEventListener('mouseout', function () {

        hovMenu.style.visibility = 'hidden';
    });


    //---------CHOWANIE BLOKU Z NAZWĄ------------------//


    var pictOne =document.querySelector('.second-article-div1');
    var pictTwo = document.querySelector('.second-article-div2');

    console.log(pictOne);

   pictOne.addEventListener('mouseover', function () {

        this.firstElementChild.style.visibility='hidden';

    });
    pictOne.addEventListener('mouseout', function () {

        this.firstElementChild.style.visibility='visible';

    });

    pictTwo.addEventListener('mouseover', function () {

        this.firstElementChild.style.visibility='hidden';

    });
    pictTwo.addEventListener('mouseout', function () {

        this.firstElementChild.style.visibility='visible';

    });


//-------------------SLIDER---------------------------//
    var nextBtn = document.querySelector('#next-btn');
    var prevBtn = document.querySelector('#prev-btn');
    var slides = document.querySelectorAll('.slider li');


    var actualSlide = 0;

    slides[actualSlide].classList.add('visible');


    nextBtn.addEventListener('click', function () {
        slides[actualSlide].classList.remove('visible');

        actualSlide++;

        if (actualSlide >= slides.length) {
            actualSlide = 0;
        }
        slides[actualSlide].classList.add('visible');
    });

    prevBtn.addEventListener('click', function () {
        slides[actualSlide].classList.remove('visible');

        actualSlide--;
        if (actualSlide < 0) {
            actualSlide = slides.length - 1;
        }

        slides[actualSlide].classList.add('visible');

    });
});