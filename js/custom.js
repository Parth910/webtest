(function ($) {
  "use strict";

  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">'

      ],
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  if (document.getElementById('default-select')) {
		$('select').niceSelect();
	}
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // menu fixed js code
  // console.log($('.main_menu .main-menu-item ul li a'));
var y =$(window).innerHeight();
  $('.banner_part').height( $(window).innerHeight());
  $('.bt_1').height( y);
  
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 5500) {
      
      $('.navbar-nav').addClass('tet5 animated fadeInDown');
    }
    if (window_top > 4800) {
      
      $('.navbar-nav').addClass('tet4 animated fadeInDown');
    }

    if (window_top > 3800) {
      
      $('.navbar-nav').addClass('tet3 animated fadeInDown');
    }
    if (window_top > 2800) {
      
      $('.navbar-nav').addClass('tet2 animated fadeInDown');
    }
    if (window_top > 1800) {
      
      $('.navbar-nav').addClass('tet1 animated fadeInDown');
    }
    if (window_top > 940) {
      
      $('.navbar-nav').addClass('tet animated fadeInDown');
      // $('.main_menu .main-menu-item ul li a').css("color", "#31C3F2 !important");

    }
     if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    }
     else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
      $('.navbar-nav').removeClass('tet animated fadeInDown');
      $('.navbar-nav').removeClass('tet1 animated fadeInDown');
      $('.navbar-nav').removeClass('tet2 animated fadeInDown');
      $('.navbar-nav').removeClass('tet3 animated fadeInDown');
      $('.navbar-nav').removeClass('tet4 animated fadeInDown');
      $('.navbar-nav').removeClass('tet5 animated fadeInDown');

    }
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay:true,
    pauseOnFocus: true,
    dots: true,
  });
 
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        }
      }
    ]
  });
 
  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 
  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 
 //UPDATED 
   
 $('.slider').on('afterChange', function(event, slick, currentSlide){   
   $('.content').hide();
   $('.content[data-id=' + (currentSlide + 1) + ']').show();
 }); 


}(jQuery));