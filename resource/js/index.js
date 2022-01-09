$(document).on('click', '#footerApp', function(){
  $('.footer__app').addClass('on')
})

$(document).on('click', '.header__menu', function(){
  $('.side').addClass('on')
  $('.side__container').addClass('on')
})

$(document).on('click', '.side__bg, .side__close', function(){
  $('.side').removeClass('on')
  $('.side__container').removeClass('on')
})