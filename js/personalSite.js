$(document).ready(function () {
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function () {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 500);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta)
    return;
  if (st > lastScrollTop && st > navbarHeight) {
    $('header').removeClass('nav-up').addClass('nav-down');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-down').addClass('nav-up');
    }
  }
  lastScrollTop = st;
}
  $('.photoThumbnail a').click(function (evt) {
    evt.preventDefault();
    var imgPath = $(this).attr('href');
    var hiResImgPath = $(this).attr('rel');
    var imgAlt = $(this).attr('alt');
    var oldImage = $('.feature img');
    var newImage = $('<img src="' + imgPath + '" srcset="' + imgPath + ' 1x, ' + hiResImgPath + ' 2x" alt="' + imgAlt + '">');
    newImage.hide();
    $('.feature').prepend(newImage);
    newImage.fadeIn(1000);
    oldImage.fadeOut(100, function () {
      $(this).remove();

    });
  });
  $('.photoThumbnail a:first').click();
  
    $('.designThumbnail a').click(function (evt) {
    evt.preventDefault();
    var dsgPath = $(this).attr('href');
    var dsgAlt = $(this).attr('alt');
    var oldDsg = $('.designFeature img');
    var newDsg = $('<img src="' + dsgPath + '" alt="' + dsgAlt + '">');
    newDsg.hide();
    $('.designFeature').prepend(newDsg);
    newDsg.fadeIn(1000);
    oldDsg.fadeOut(100, function () {
      $(this).remove();

    });
  });
  $('.designThumbnail a:first').click();
 
   $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
  });