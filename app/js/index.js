$(document).ready(function(){
    mainHeight();
    $('.header__menu__list__link').mPageScroll2id();
    $('.footer__menu__list__link').mPageScroll2id();
});
$(window).resize(function(){
    this.mainHeight();
});
$(window).scroll(function() {
    if($(window).scrollTop() != 0) {
        $('.lg__header').addClass('header__shadow');
    }
    else {
        $('.lg__header').removeClass('header__shadow');
    }
});
function mainHeight() {
    $('.main').css("height", $(window).height() - 55);
}