// Carousel functionality
const carouselInner = document.getElementById('carousel-inner');
const indicators = document.getElementById('carousel-indicators').children;
const slides = carouselInner.children;
let currentSlide = 0;

function showSlide(idx) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${idx * 100}%)`;
    indicators[i].className = 'w-3 h-3 rounded-full inline-block ' + (i === idx ? 'bg-sky-400' : 'bg-sky-200');
  }
  currentSlide = idx;
}

document.getElementById('carousel-prev').onclick = () => {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
};
document.getElementById('carousel-next').onclick = () => {
  showSlide((currentSlide + 1) % slides.length);
};

// Auto-play
setInterval(() => {
  showSlide((currentSlide + 1) % slides.length);
}, 4000);

// Scroll to top button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove('hidden');
  } else {
    scrollBtn.classList.add('hidden');
  }
});
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Initialize
showSlide(0);
