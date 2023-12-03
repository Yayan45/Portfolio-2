//about
$(window).on('load', function(){
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});

//paralax
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
//JUMBOTRON
  //untukimg
  $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  //untukh1
  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
});

//untuk p
$('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/.5 +'%)'
});


//portfolio
if( wScroll > $('.portfolio').offset().top - 250 ) {
    $('.portfolio .thumbnail').each(function(i){
      setTimeout(function(){
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 160 * (i+1));
    });
    
}



});