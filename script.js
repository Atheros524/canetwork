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

// Particles.js with Minecraft block images
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "shape": {
      "type": "image",
      "image": [
        { "src": "assets/blocks/grass.png", "width": 32, "height": 32 },
        { "src": "assets/blocks/stone.png", "width": 32, "height": 32 },
        { "src": "assets/blocks/diamond.png", "width": 32, "height": 32 },
        { "src": "assets/blocks/gold.png", "width": 32, "height": 32 }
      ]
    },
    "opacity": { "value": 0.9 },
    "size": { "value": 15, "random": true },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": true }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    }
  }
});
