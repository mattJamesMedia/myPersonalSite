$(document).ready(function () {
  $('header').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('header').slideDown();
    } else if ($(this).scrollTop() <= 200) {
      $('header').slideUp();
    }
  });
  $('.thumbnail a').click(function (evt) {
    evt.preventDefault();
    var imgPath = $(this).attr('href');
    var hiResImgPath = $(this).attr('rel');
    var imgClass = $(this).attr('data');
    var oldImage = $('.feature img');
    var newImage = $('<img src="' + imgPath + '" srcset="' + imgPath + ' 1x, ' + hiResImgPath + ' 2x" class="' + imgClass + '">');
    newImage.hide();
    $('.feature').prepend(newImage);
    newImage.fadeIn(1000);
    oldImage.fadeOut(100, function () {
      $(this).remove();

    });
  });
  $('.thumbnail a:first').click();
  
    $('.designThumbnail a').click(function (evt) {
    evt.preventDefault();
    var dsgPath = $(this).attr('href');
    
    var oldDsg = $('.designFeature img');
    var newDsg = $('<img src="' + dsgPath + '">');
    newDsg.hide();
    $('.designFeature').prepend(newDsg);
    newDsg.fadeIn(1000);
    oldDsg.fadeOut(100, function () {
      $(this).remove();

    });
  });
  $('.designThumbnail a:first').click();
 
  function filterPath(string) {
    return string
      .replace(/^\//, '')
      .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
      .replace(/\/$/, '');
  }
  $('a[href*=#]').each(function () {
    if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
      var $targetId = $(this.hash),
        $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;
        $(this).click(function () {
          $('html, body').animate({
            scrollTop: targetOffset
          }, 1000);
          var d = document.createElement("div");
          d.style.height = "101%";
          d.style.overflow = "hidden";
          document.body.appendChild(d);
          window.scrollTo(0, scrollToM);
          setTimeout(function () {
            d.parentNode.removeChild(d);
          }, 10);
          return false;
        });
      }
    }
  });
});
/*! Smooth Scroll - v1.4.5 - 2012-07-22
 * Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */