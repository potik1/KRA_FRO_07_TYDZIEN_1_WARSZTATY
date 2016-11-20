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


    var pictOne = document.querySelector('.second-article-div1');
    var pictTwo = document.querySelector('.second-article-div2');


    pictOne.addEventListener('mouseover', function () {

        this.firstElementChild.style.visibility = 'hidden';

    });
    pictOne.addEventListener('mouseout', function () {

        this.firstElementChild.style.visibility = 'visible';

    });

    pictTwo.addEventListener('mouseover', function () {

        this.firstElementChild.style.visibility = 'hidden';

    });
    pictTwo.addEventListener('mouseout', function () {

        this.firstElementChild.style.visibility = 'visible';

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

    //--------------------KALKULATOR------------------------//


    //----------------rozwinięta lista-----------------------//

    var greenArrows = document.querySelectorAll('.list_arrow');


    greenArrows.forEach(function (greenArrow) {
        greenArrow.addEventListener('click', function () {

            if (this.nextElementSibling.style.display != 'block') {
                this.nextElementSibling.style.display = 'block';
            }
            else {
                this.nextElementSibling.style.display = 'none';
            }
        });
    });

    //------wybieranie elementów z list i przypisanie ich do zmiennych----------//

    var chairType = document.querySelector('#chair_type');
    var title = document.querySelector('.title');
    var titleValue = document.querySelector('.panel_right').firstElementChild;
    var color = document.querySelector('.color');
    var colorValue = document.querySelector('.panel_right').children[1];
    var chairColor = document.querySelector('#color');
    var pattern = document.querySelector('.pattern');
    var material = document.querySelector('#material');
    var patternValue = document.querySelector('.panel_right').children[2];
    var idTransport = document.querySelector('#transport');
    var transport = document.querySelector('.transport');
    var transportValue = document.querySelector('.panel_right').children[3];
    var sum = document.querySelector('.sum');

    
    for (var i = 0; i < chairType.children.length; i++) {
        chairType.children[i].addEventListener('click', function () {
            title.innerText = this.innerText;
            titleValue.innerText = this.dataset.price;
            sum.innerText = TotalValue();
        });

    }
    for (var i = 0; i < chairColor.children.length; i++) {
        chairColor.children[i].addEventListener('click', function () {
            color.innerText = this.innerText;
            colorValue.innerText = this.dataset.price;
            sum.innerText = TotalValue();
        });
    }
    for (var i = 0; i < material.children.length; i++) {
        material.children[i].addEventListener('click', function () {
            pattern.innerText = this.innerText;
            patternValue.innerText = this.dataset.price;
            sum.innerText = TotalValue();
        });
    }

    idTransport.addEventListener('click', function () {
        if (transport.innerText != 'Transport') {
            transport.innerText = 'Transport';
            transportValue.innerText = idTransport.dataset.transportPrice;
        }
        else {
            transport.innerText = '';
            transportValue.innerText = '';
        }
        sum.innerText = TotalValue();
    });


    function TotalValue()
    {
        var colorValueInt = parseInt(colorValue.innerText) || 0;
        var patternValueInt = parseInt(patternValue.innerText) || 0;
        var transportValueInt = parseInt(transportValue.innerText) || 0;
        var titleValueInt = parseInt(titleValue.innerText) || 0;

        var summary = colorValueInt + patternValueInt + transportValueInt + titleValueInt;
        return summary;
    }


});