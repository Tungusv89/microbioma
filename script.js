function ibg() {
    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
ibg();

//header_menu

$('.header-menu__icon').click(function(event) {
    console.log('test');
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body,html').scrollTop(parseInt($('body').data('scroll')))
    }
});

//Клик вне области
$(document).on('click touchstart', function(e) {
    if (!$(e.target).is(".select *")) {
        $('.select').removeClass('active');
    }
});


// анимация 
$(document).ready(function() {
    $('.mainblock__maintitle').css('position', 'interit');
    $('.mainblock__maintitle').css('top', '0');
    $('.mainblock__maintitle').css('opacity', '1');
    $('.mainblock__maintitle').css('transition', '0.5s');

    $('.mainblock__title').css('position', 'interit');
    $('.mainblock__title').css('left', '0');
    $('.mainblock__title').css('opacity', '1');
    $('.mainblock__title').css('transition', '0.5s');

    $('.mainblock__subtitle').css('position', 'interit');
    $('.mainblock__subtitle').css('left', '0');
    $('.mainblock__subtitle').css('opacity', '1');
    $('.mainblock__subtitle').css('transition', '0.5s');

    $('.mainblock__btn').css('position', 'interit');
    $('.mainblock__btn').css('bottom', '0');
    $('.mainblock__btn').css('opacity', '1');
    $('.mainblock__btn').css('transition', '0.5s');



});

$(document).ready(function() {
    var $element = $('.from-whom__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.from-whom__title').css('position', 'interit');
            $('.from-whom__title').css('left', '0');
            $('.from-whom__title').css('opacity', '1');
            $('.from-whom__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});

$(document).ready(function() {

    $('.blockOne__wrapper strong').children('').addClass('.from-whom-item__title');
    var $element = $('.program__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        // var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.program__title').css('position', 'interit');
            $('.program__title').css('left', '0');
            $('.program__title').css('opacity', '1');
            $('.program__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});

$('.program__btn-other').click(function() {
    if ($('.block-hidden').hasClass('active')) {
        $('.block-hidden').removeClass('active');
        $(this).children().html('Показать еще')
    } else {
        $('.block-hidden').addClass('active');
        $(this).children().html('Скрыть');
    }

})


$(document).ready(function() {
    var $element = $('.autor__description');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.autor__description').css('position', 'interit');
            $('.autor__description').css('right', '0');
            $('.autor__description').css('opacity', '1');
            $('.autor__description').css('transition', '0.5s');
            counter = 1;
        }
    });


});

$(document).ready(function() {
    var $element = $('.autor-subtitle');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.autor-subtitle').css('position', 'interit');
            $('.autor-subtitle').css('top', '0');
            $('.autor-subtitle').css('opacity', '1');
            $('.autor-subtitle').css('transition', '0.5s');
            counter = 1;
        }
    });


});
$(document).ready(function() {
    var $element = $('.autor__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.autor__title').css('position', 'interit');
            $('.autor__title').css('top', '0');
            $('.autor__title').css('opacity', '1');
            $('.autor__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});

$(document).ready(function() {
    if ($(window).width() < 1452) {
        $('.slider__item').children('img').attr('style', 'width:320px');
    }
    if ($(window).width() < 1200) {
        var title = $('.title-adapteve');
        var list = $('.autor__body-list')
        var slider = $('.autor__slider');
        console.log('1200');
        $('.autor-body').eq(0).prepend(title);
        $('.block-adaptive').append(list);
        list.addClass('column');
        $('.autor__expert').addClass('column');
        $('.autor-item-adaptive').append(slider);
        $('.slider__item').children('img').attr('style', 'width:310px');
    }
    if ($(window).width() < 988) {
        $('.autor-body__column').eq(1).append(slider);
    }

    if ($(window).width() < 988) {
        $('.slider__item').children('img').attr('style', 'width:380px');
    }
    if ($(window).width() < 768) {
        $('.slider__item').children('img').attr('style', 'width:300px');
    }
    if ($(window).width() < 480) {
        $('.slider__item').children('img').attr('style', 'width:200px');
    }
})

// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.textAlign = "center";
    }
    slides[slideIndex - 1].style.display = "block";
}

//rates


$(document).ready(function() {
    var $element = $('.rates__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.rates__title').css('position', 'interit');
            $('.rates__title').css('top', '0');
            $('.rates__title').css('opacity', '1');
            $('.rates__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});

$(document).ready(function() {
    var $element = $('.down-column__buy');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.down-column__buy').css('position', 'interit');
            $('.down-column__buy').css('bottom', '0');
            $('.down-column__buy').css('opacity', '1');
            $('.down-column__buy').css('transition', '0.5s');
            counter = 1;
        }
    });


});

//рассрочка

$(document).ready(function() {
    var $element = $('.presentation__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.presentation__title').css('position', 'interit');
            $('.presentation__title').css('left', '0');
            $('.presentation__title').css('opacity', '1');
            $('.presentation__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});

$('.installment-presentation__how').click(function() {
    if ($('.installment__steps').hasClass('active')) {
        $('.installment__steps').removeClass('active');
        $(this).children().html('Как оформить рассрочку?')
    } else {
        $('.installment__steps').addClass('active');
        $(this).children().html('Скрыть');
    }

})


//паралакс
let bg = document.querySelector('.presentation__iphone');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});

//sert

$(document).ready(function() {
    var $element = $('.sert__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.sert__title').css('position', 'interit');
            $('.sert__title').css('left', '0');
            $('.sert__title').css('opacity', '1');
            $('.sert__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});

//feedback


//Slider
var slideIndex = 1;
showSlidesTwo(slideIndex);

function plusSlides(n) {
    showSlidesTwo(slideIndex += n);
}

function currentSlide(n) {
    showSlidesTwo(slideIndex = n);
}

function showSlidesTwo(n) {
    var i;
    var slides = document.getElementsByClassName("feet-back__slider-item");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.textAlign = "center";
    }
    slides[slideIndex - 1].style.display = "block";
}

$(document).ready(function() {
    if ($(window).width() < 602) {
        $('.feet-back__slider-item').children('img').attr('style', 'width:324px');;
    }
    // if ($(window).width() < 478) {
    //     $('.feet-back__slider-item').children('img').attr('style', 'width:224px');;
    // } 
})

$(document).ready(function() {
    var $element = $('.feet-back__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.feet-back__title').css('position', 'interit');
            $('.feet-back__title').css('left', '0');
            $('.feet-back__title').css('opacity', '1');
            $('.feet-back__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});

//quest

$(document).ready(function() {
    $('.questions-row__column').click(function() {
        if ($(this).parent().find('.questions-row__hidden').hasClass('active')) {
            $(this).parent().find('.questions-row__hidden').removeClass('active');
            $(this).find('.questions-row__arrow').css('transform', 'rotate(45deg)')
            $(this).find('.questions-row__arrow').css('transition', '0.5s')

        } else {
            $(this).parent().find('.questions-row__hidden').addClass('active');
            $(this).find('.questions-row__arrow').css('transform', 'rotate(0deg)')
            $(this).find('.questions-row__arrow').css('transition', '0.5s')
        }
    })
})

$(document).ready(function() {
    var $element = $('.questions__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.questions__title').css('position', 'interit');
            $('.questions__title').css('left', '0');
            $('.questions__title').css('opacity', '1');
            $('.questions__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});

//footer

$(document).ready(function() {
    var block = $('.footer__info');
    if ($(window).width() < 988) {
        $('.footer__pay').before(block);
    }
    if ($(window).width() < 624) {
        $('.footer__logo').after(block);
    }
});

$(document).ready(function() {
    var $element = $('.footer__title');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        // var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {

            $('.footer__title').css('position', 'interit');
            $('.footer__title').css('left', '0');
            $('.footer__title').css('opacity', '1');
            $('.footer__title').css('transition', '0.5s');
            counter = 1;
        }
    });


});
$(document).ready(function() {
    if (button.hasClass('.selected')) {

    } else {

    }
})