 const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });



    // slider.js

// slider.js

// slider.js

 document.addEventListener("DOMContentLoaded", function () {
      const slidesWrapper = document.getElementById('slides-wrapper');
      const dots = document.querySelectorAll('.dot');
      const slides = document.querySelectorAll('#slides-wrapper > div');
      let currentSlide = 0;
      const totalSlides = slides.length;

      function goToSlide(slide) {
        if (slide < 0) slide = 0;
        if (slide >= totalSlides) slide = totalSlides - 1;

        slidesWrapper.style.transform = `translateX(-${slide * 100}%)`;

        dots.forEach((dot, idx) => {
          dot.classList.toggle("bg-orange-500", idx === slide);
          dot.classList.toggle("bg-gray-300", idx !== slide);
        });

        currentSlide = slide;
      }

      dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => goToSlide(idx));
      });

      goToSlide(0);
    });


