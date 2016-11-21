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
	uriSchemeWithHyperlinkFallback('fb://page/1469884123304503', 'https://www.facebook.com/2BassetBrewery/?fref=ts');
	event.preventDefault();
}

function openFacebook(uri, href) {
    if(!window.open(uri)){
        window.location = href;
    }
}
$('a.intent').on('click', function (event) {
    uriSchemeWithHyperlinkFallback('fb://page/1469884123304503', 'https://www.facebook.com/2BassetBrewery/?fref=ts');
    // we don't want the default browser behavior kicking in and screwing everything up.
    event.preventDefault();
});