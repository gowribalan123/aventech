 
    const carousel = document.getElementById("carousel");
    const totalSlides = 4;
    let index = 0;

    document.getElementById("prevBtn").addEventListener("click", () => {
      index = (index - 1 + totalSlides) % totalSlides;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      index = (index + 1) % totalSlides;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    // Optional auto-slide
   setInterval(() => {
  index = (index + 1) % totalSlides;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}, 5000);



  let autoSlide = setInterval();

carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carousel.addEventListener("mouseleave", () => {
  autoSlide = setInterval();
});
