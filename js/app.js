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

   // team member
   // iify - instantly invoked function expression
   (function() {
      let data = [
         {
          id: 0,
          name: 'john doe',
          job: 'developer',
          text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
          favorites: ['eat', 'drink', 'sleep'],
          img: 'img/team-1.jpg'
         },
         {
          id: 1,
          name: 'tom orange',
          job: 'designer',
          text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
          favorites: ['paint', 'draw', 'run'],
          img: 'img/team-2.jpg'
         },
         {
          id: 2,
          name: 'albert cupid',
          job: 'accountant',
          text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
          favorites: ['math', 'physics', 'more math'],
          img: 'img/team-3.jpg'
         },
         {
          id: 3,
          name: 'dog hugo',
          job: 'intern',
          text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
          favorites: ['bark', 'run', 'bite'],
          img: 'img/team-4.jpg'
         }]

         $(".team-img-item").click(function() {

            // adding/removing active class
            $(".team-img-item").not(this).removeClass("active");
            $(this).addClass("active");

            // change data
            let id = $(this).attr("data-id");
            $(".team-info-member-name").text(data[id].name);
            $(".team-info-member-job").text(data[id].job);
            $(".team-info-member-text").text(data[id].text);
            $(".team-info-member-single-favorite-text").each(function(index) {
               $(this).text(data[id].favorites[index]);
            });
            $(".team-info-img").attr("src", data[id].img);
         });

         $(".owl-carousel").owlCarousel({
            loop: false,
            smartSpeed: 1000,
            margin: 10,
            nav: true,
            responsive: {
               0: {
                  items: 1
               },
               600: {
                  items: 1
               },
               1000: {
                  items: 1
               }
            }
         });

         // owl js
         $(".owl-prev").html('<div><i class="fa fa-chevron-left"></i></div>');
         $(".owl-next").html('<div><i class="fa fa-chevron-right"></i></div>');
   })();
});