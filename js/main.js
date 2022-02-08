$(document).ready(function() {

      // Sticky navbar
      let header = $('.header');
      let scrollPos = $(window).scrollTop();
  
  
      $(window).on('scroll load resize', function(){
          scrollPos = $(this).scrollTop();
  
          if(scrollPos > 1){
            header.addClass('active');
          }else{
            header.removeClass('active');
          }
      });

    // *************** Burger menu ***************
const menuBtn = $('.burger');
const miniNav = $('.mini-nav');

menuBtn.on('click', function () {
  menuBtn.toggleClass('burger__open');
  miniNav.toggleClass('active');
  
})
 
  // ======== Year ========
    
let abcYear = document.getElementById('year');
abcYear.innerHTML = new Date().getFullYear();

// Smooth scroll
$("[data-scroll]").on('click', function(event){
  event.preventDefault();

  let elemID = $(this).data('scroll');
  let elemOffSet = $(elemID).offset().top;

  $('html, body').animate({
      scrollTop: elemOffSet - 68
  });

});

// To top
let topBtn = $('#toTop');
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 30) {
    topBtn.addClass('show');
  } else {
    topBtn.removeClass('show');

  }
});


    
});
