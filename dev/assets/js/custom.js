
$( document ).ready(function() {
  $('.slider').slick({
      dots: true,
      speed: 1000,
      appendArrows: ".container-arrows",
      responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              // fade: true,
            }
          },
           
      ]
  });

  // $('.navbar-toggler').on('click', function(){
  //   $('.navbar').toggleClass('margin-bottom')
  // })


});


