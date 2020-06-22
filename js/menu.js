// Menu-toggle button
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect
$(window).on("scroll", function() {
  $("nav ul").removeClass("showing");
    if($(window).scrollTop()) {
            $('nav').addClass('black');
    }

    else {
            $('nav').removeClass('black');
    }
})


$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 92
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})