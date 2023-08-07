/**Animation */
function PinkSeperatorAnim() {
  var reveals = document.querySelectorAll(".MapImage ");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", PinkSeperatorAnim);





/**
 Counting in statistics
 */

 $(document).ready(function() {



  $(window).scroll(function() {




    // Get the top position of the row element
    var rowTopPosition = $('.row').offset().top;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    // Check if the row is in the viewport
    if (scrollTop + windowHeight > rowTopPosition) {
      // Start the counting animation for MyServicesNumber
      $({ countNum: 0 }).animate({
        countNum: 12 // Change this to your desired number
      }, {
        duration: 3000, // 3 seconds for the counting animation
        easing: 'linear',
        step: function() {
          $('#MyServicesNumber').text(Math.floor(this.countNum));
        },
        complete: function() {
          $('#MyServicesNumber').text(this.countNum);
        }
      });

      // Start the counting animation for RegisteredCompaniesNumber
      $({ countNum: 0 }).animate({
        countNum: 400 // Change this to your desired number
      }, {
        duration: 3000, // 3 seconds for the counting animation
        easing: 'linear',
        step: function() {
          $('#RegisteredCompaniesNumber').text(Math.floor(this.countNum));
        },
        complete: function() {
          $('#RegisteredCompaniesNumber').text(this.countNum);
        }
      });

      // Unbind the scroll event once the counting animations are triggered
      $(window).off('scroll');
    }






});

});

    
/******
 Navbar scroll 
 ******/
 
$(document).ready(function() {
 function checkNavbarActive() {
   var currentScrollTop = $(window).scrollTop();

   if (currentScrollTop > 0) {
     $("nav.navbar").addClass("active");
   } else {
     $("nav.navbar").removeClass("active");
   }
 }

 // Initial check when the page loads
 checkNavbarActive();

 // Handle scroll event and window resize event
 $(window).on('scroll resize', function () {
   checkNavbarActive();
 });
 });
