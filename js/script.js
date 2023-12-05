$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
   
  });
//   const navbar = document.getElementsByTagName('nav');
//       window.addEventListener('scroll', function() {
//        // add padding top to show content behind navbar
//       if (window.scrollY > 700) {
//         // navbar.classList.add('nav-colored');
//         $("nav").css("background-color" , "#fff");
//         $("a").css("color" , "black");
//         $(".navlogo").css("color" , "black");     
//        // remove padding top from body        
//       }
//        else {
//         $("nav").css("background-color" , "transparent");
//         $("a").css("color" , "#fff");
//       } 
//   });