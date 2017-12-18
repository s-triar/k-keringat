
jQuery(document).ready(function($) {  

  /* ///////////////////////////////////////////////////////////////////// 
  // 1 - Preloader
  /////////////////////////////////////////////////////////////////////*/
  
  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });



  /* ///////////////////////////////////////////////////////////////////// 
  // 2 - General
  /////////////////////////////////////////////////////////////////////*/

  //woo effect
  new WOW().init();
  
  //tooltip
  $('#back-to-top').tooltip();
  $('#menu-toggle').tooltip();
  


  // Set Sticky Header
  var $sticky = $('.sticky');
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 100) $sticky.addClass('fixed');
    else $sticky.removeClass('fixed');
  });



  //back to top
  var $backToTop = $('#back-to-top').fadeIn();

  $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
          $backToTop.fadeIn();
      } else {
          $backToTop.fadeOut();
      }
  });
  // scroll body to 0px on click
  $backToTop.click(function () {
      $backToTop.tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });


  //Testimonial
  $("#review").owlCarousel({
    slideSpeed : 300,
    pagination:false,
    paginationSpeed : 400,
    singleItem:true,
    navigation : true,
    navigationText : ["",""]
  });


  //Async Video iframe loading
  setTimeout(function(){ 
    $('.async-iframe').each(function(){
      $(this).attr('src', $(this).data('src'));
    });
  }, 1000);




  /* ///////////////////////////////////////////////////////////////////// 
  // 3 - Sidebar menu Controls
  /////////////////////////////////////////////////////////////////////*/

  $("#menu-close").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
  });

  $(".sidebar-nav li a").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
  });




  /* ///////////////////////////////////////////////////////////////////// 
  // 4 - Scrolls to the selected menu item on the page
  /////////////////////////////////////////////////////////////////////*/

  $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html,body').stop().animate({
                      scrollTop: target.offset().top + 30
                  }, 1000);
                  return false;
              }
          }
      });
  });


  /* ///////////////////////////////////////////////////////////////////// 
  // 5 - Carousel
  /////////////////////////////////////////////////////////////////////*/

  $('#screenshots > a').nivoLightbox({effect: 'fadeScale'});

  var owl = $("#screenshots");
 
  owl.owlCarousel({
    autoPlay: false,
    pagination: false,
    stopOnHover: true,
  });
 

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  });
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });


// tweets ticker
$('.ticker1').easyTicker({
  direction: 'up',
  easing: 'swing',
  speed: 'slow',
  interval: 2000,
  height: 'auto',
  visible: 1,
  mousePause: 1,
  controls: {
    up: '',
    down: '',
    toggle: '',
    playText: 'Play',
    stopText: 'Stop'
  }
});

//video modal

 $('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
  
  
});

}); //end document ready

