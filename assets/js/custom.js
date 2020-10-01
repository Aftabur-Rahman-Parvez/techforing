var $window = $(window);
var $root = $('html, body');

$(function(){
	// Animate with Scroll
	new WOW().init();
});

$(window).on('load', function() {
  $(".preloder_part").fadeOut();
  $(".spinner").delay(1000).fadeOut("slow");
});

$(document).ready(function(){

  // nav menu
  $('.main_menu_ul .nav-item .nav-link').click(function(){
    $('.main_menu_ul .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
  })

  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  });

    jQuery("#feature_testimonial_carosule").owlCarousel({
      autoplay: false,
      lazyLoad: true,
      loop: false,
      margin: 10,

      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      dots: false,
      nav:true,
      responsive: {
        0: {
          items: 3,
  
        },
    
        600: {
          items: 3,
          
        },
    
        1024: {
          items: 3,
          
        },
    
        1366: {
          items:5,   
          
        }
      },
      navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
  });

        // our Blog carosuel 
        jQuery("#video_feature_testimonial_carosule").owlCarousel({
          autoplay: false,
          lazyLoad: true,
          loop: false,
          margin: 0,
    
          responsiveClass: true,
          autoHeight: true,
          autoplayTimeout: 7000,
          smartSpeed: 800,
          dots: false,
          nav:true,
          responsive: {
            0: {
              items: 2,
      
            },
        
            600: {
              items: 2,
              
            },
        
            1024: {
              items: 3,
              
            },
        
            1366: {
              items:4,   
              
            }
          },
          navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
      });

      jQuery("#video_carosule").owlCarousel({
        autoplay: false,
        lazyLoad: true,
        loop: true,
        margin: 0,
  
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        dots: false,
        nav:true,
        responsive: {
          0: {
            items: 1,
    
          },
      
          600: {
            items: 1,
            
          },
      
          1024: {
            items: 1,
            
          },
      
          1366: {
            items:1,   
            
          }
        },
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    });

      jQuery("#client_say_carosule").owlCarousel({
        autoplay: false,
        lazyLoad: true,
        loop: true,
        margin: 0,
  
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        dots: true,
        nav:false,
        responsive: {
          0: {
            items: 1,
    
          },
      
          600: {
            items: 1,
            
          },
      
          1024: {
            items: 1,
            
          },
      
          1366: {
            items:1,   
            
          }
        },
    });

    jQuery("#security_review_carosule").owlCarousel({
      autoplay: false,
      lazyLoad: true,
      loop: true,
      margin:30,
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      dots: false,
      nav:true,
      responsive: {
        0: {
          items: 1,
  
        },
    
        600: {
          items: 1,
          
        },
    
        1024: {
          items: 2,
          
        },
    
        1366: {
          items:2,   
          
        }
      },
      navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
  });

  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });


    
  
})


$window.on('scroll', function () {
 
    if ($window.scrollTop() > 100) {
        $('#header').addClass('header-sticky');
      
    } else {
        $('#header').removeClass('header-sticky');
        
    }
  
});

$(function () {

  $("a.smooth-scroll").click(function (event) {

      event.preventDefault();
      var section = $(this).attr("href");

      $('html, body').animate({
          scrollTop: $(section).offset().top - 64
      }, 1250, "easeInOutExpo");
  });
});
