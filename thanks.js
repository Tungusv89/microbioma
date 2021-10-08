//thanks

function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
ibg();

$(document).ready(function () {
    if ($(window).width() < 768) {
        console.log($('.thanks__column').eq(1));
        $('.thanks__column').eq(0).append($('.thanks__krug'))
        $('.thanks__column').eq(1).prepend($('.thanks__info'))
    } 
})

$(document).ready(function () {    
            
            $('.thanks__title').css('position', 'interit');
            $('.thanks__title').css('top', '0');
            $('.thanks__title').css('opacity', '1');
            $('.thanks__title').css('transition', '0.5s');
            
        


});