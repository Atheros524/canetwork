// script.js

// By wrapping ALL code in DOMContentLoaded, we ensure:
// 1. The HTML elements are ready (for Slideshow and Join button)
// 2. The tsParticles library is fully loaded and defined (for tsParticles.load)

document.addEventListener("DOMContentLoaded", () => {
    
    // ================= Slideshow =================
    let slides = document.querySelectorAll('.slideshow .slide');
    let current = 0;
    
    // Only run if slides are found
    if (slides.length > 1) {
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }

    // ================= Join Us button =================
    const joinBtn = document.getElementById('joinBtn');
    
    if (joinBtn) {
        joinBtn.addEventListener('click', () => {
            // Note: The clipboard API requires the site to be served over HTTPS
            // or running locally for security reasons.
            navigator.clipboard.writeText('play.atheros524.ca')
                .then(() => {
                    joinBtn.textContent = 'Copied!';
                    setTimeout(() => { 
                        joinBtn.textContent = 'Join Us'; 
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                    joinBtn.textContent = 'Error!';
                    setTimeout(() => { 
                        joinBtn.textContent = 'Join Us'; 
                    }, 2000);
                });
        });
    }

    // ================= Particles with Minecraft blocks =================
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
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, outModes: { default: "out" } },
            opacity: { value: 0.9 }
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } }
        },
        detectRetina: true
    });
});
