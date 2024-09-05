 //javascript for image slider navigation
 const btns = document.querySelectorAll(".slid-btn");
 const slides = document.querySelectorAll(".img-slid");

 var sliderNav = function(manual){
     btns.forEach((btn) => {
         btn.classList.remove("active");
     });

     slides.forEach((slide) => {
         slide.classList.remove("active");
     });

     btns[manual].classList.add("active");
     slides[manual].classList.add("active");
 }

 btns.forEach((btn, i) => {
     btn.addEventListener("click", () => {
         sliderNav(i);
     });
 });