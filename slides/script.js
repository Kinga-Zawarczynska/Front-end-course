var slideIndex = 1;
manualSlides(slideIndex);


 const mouse = document.querySelector('.slideshow-container');
 const wrapper = document.querySelector('.wrapper');

 wrapper.addEventListener("mouseover", autoSlides);
 mouse.addEventListener("mouseover", manualSlides);



 
        // Next/previous controls
function plusSlides(n) {
    manualSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    manualSlides(slideIndex = n);
  }
  
  function manualSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }



  var autoSlideIndex = 0;
autoSlides(autoSlideIndex);



function autoSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) {autoSlideIndex = 1}
  slides[autoSlideIndex-1].style.display = "block";
  setTimeout(autoSlides, 3000); // Change image every 2 seconds
} 

 



   




// var slideIndex = 1;
// showSlides(slideIndex);

