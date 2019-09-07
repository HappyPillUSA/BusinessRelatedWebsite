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
});