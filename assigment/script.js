document.addEventListener("DOMContentLoaded", function () {
   var backToTopButton = document.querySelector(".back-top");

   window.addEventListener("scroll", function () {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           backToTopButton.style.display = "flex";
       } else {
           backToTopButton.style.display = "none";
       }
   });

   backToTopButton.addEventListener("click", function () {
       document.body.scrollTop = 0; // For Safari
       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
   });
});