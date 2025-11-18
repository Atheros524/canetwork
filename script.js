// Slideshow
let slides = document.querySelectorAll('.slideshow .slide');
let current = 0;
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);

// Join Us button copy with tooltip
const joinBtn = document.getElementById('joinBtn');
if (joinBtn) {
  joinBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('play.atheros524.ca');
    joinBtn.textContent = 'Copied!';
    setTimeout(() => { joinBtn.textContent = 'Join Us'; }, 2000);
  });
}

// Particles.js setup
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.7 },
    "size": { "value": 4 },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  }
});
