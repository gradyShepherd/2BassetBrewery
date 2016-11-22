/*
$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() > ($('.banner').height()+100)) {
      $('.navBar').addClass('menuBar-fixed');
    }
    if ($(window).scrollTop() < ($('.banner').height()+50)) {
      $('.navBar').removeClass('menuBar-fixed');
    }
  });
});
*/
$(window).load(function(){
      $(".xsHeader").sticky({ topSpacing: 0 });
    });
	
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'disableScrolling':true,
})

function openFacebook(){
	event.preventDefault();
	if(!window.open('fb://facewebmodal/f?href=https://www.facebook.com/2BassetBrewery/?fref=ts'))
		setTimeout(function () { window.open("https://www.facebook.com/2BassetBrewery/?fref=ts"); }, 500);
}