// ================= Slideshow =================
let slides = document.querySelectorAll('.slideshow .slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);

// ================= Join Us button =================
const joinBtn = document.getElementById('joinBtn');
if (joinBtn) {
  joinBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('play.atheros524.ca');
    joinBtn.textContent = 'Copied!';
    setTimeout(() => { joinBtn.textContent = 'Join Us'; }, 2000);
  });
}

// ================= Particles.js with Minecraft blocks (tsparticles) =================
document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      shape: {
        type: "image",
        image: [
          { src: "https://raw.githubusercontent.com/Atheros524/canetwork/main/assets/blocks/grass.png", width: 32, height: 32 },
          { src: "https://raw.githubusercontent.com/Atheros524/canetwork/main/assets/blocks/stone.png", width: 32, height: 32 },
          { src: "https://raw.githubusercontent.com/Atheros524/canetwork/main/assets/blocks/diamond.png", width: 32, height: 32 },
          { src: "https://raw.githubusercontent.com/Atheros524/canetwork/main/assets/blocks/gold.png", width: 32, height: 32 }
        ]
      },
      size: { value: 15, random: { enable: true, minimumValue: 10 } },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" }
      },
      opacity: { value: 0.9 }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });
});
