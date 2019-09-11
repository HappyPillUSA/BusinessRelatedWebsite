$(document).ready(function() {
   // preloader
   $(".preloader").fadeOut();

   // navBtn
   $(".navBtn").click(function() {
      $(".nav").toggleClass("nav-show");
   });

   // video switch
   $(".video-switch-container").click(function() {
      const value = $(".video-switch-btn").hasClass("btnSlide");
      if(value) {
         $(".video-switch-btn").removeClass("btnSlide");
         $("#video").get(0).play();
      }
      else {
         $(".video-switch-btn").addClass("btnSlide");
         $("#video").get(0).pause();
      }
   });

   // magnific popup
   $("#projects-modal").magnificPopup({
      delegate: "a", // child items selector, by clicking on it popup will open
      type: "image",
      gallery: {
         // options for gallery
         enabled: true
      }
      // other options
   });

   // accordion
   $(".accordion-btn").click(function() {

      $(".accordion-btn").not(this).removeClass("rotate");
      $(".accordion-btn").not(this).parent().next().slideUp();

      $(this).toggleClass("rotate");

      $(this).parent().next().slideToggle();
   });
});