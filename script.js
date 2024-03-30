const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.opacity = 0;
  });

  // Show current slide
  slides[currentSlide].style.opacity = 1;

  // Move to the next slide
  currentSlide = (currentSlide + 1) % slides.length;
}

// Show the first slide
showSlide();

// Show next slide every 5 seconds
setInterval(showSlide, 5000);