// script.js (FINAL FIX)

function initApp() {
    
    // ================= Slideshow =================
    // ... (slideshow logic remains the same)
    let slides = document.querySelectorAll('.slideshow .slide');
    let current = 0;
    
    // Only run if slides are found
    if (slides.length > 1) {
        // Ensure the first slide is visible initially if no CSS sets it
        slides[current].classList.add('active'); 
        
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }

    // ================= Join Us button =================
    // ... (join button logic remains the same)
    const joinBtn = document.getElementById('joinBtn');
    
    if (joinBtn) {
        joinBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('food-yang.gl.joinmc.link')
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
    // Only attempt to load tsParticles if the library is available
    if (window.tsParticles) {
        tsParticles.load("particles-js", {
            particles: {
                number: { value: 150, density: { enable: true, area: 800 } },
                shape: {
                    type: "image",
                    image: [
                        { src: "https://raw.githubusercontent.com/Atheros524/canetwork/main/assets/blocks/snow1.png", width: 1, height: 1 },
                        { src: "https://raw.githubusercontent.com/Atheros524/canetwork/main/assets/blocks/snow2.png", width: 3, height: 3 },
                        { src: "https://raw.githubusercontent.com/Atheros524/canetwork/main/assets/blocks/snow3.png", width: 3, height: 3 },
                        { src: "https://raw.githubusercontent.com/Atheros524/canetwork/main/assets/blocks/snow4.png", width: 3, height: 3 }
                    ]
                },
                size: { value: 3, random: { enable: true, minimumValue: 1 } },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, outModes: { default: "out" } },
                opacity: { value: 0.9 }
            },
            interactivity: {
                events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
                modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } }
            },
            detectRetina: false // <--- THIS IS THE KEY CHANGE
        });
    } else {
        console.warn("tsParticles library is not loaded. Particle animation skipped.");
    }
}

// ----------------------------------------------------------------------
// Run the application logic once the entire HTML document is ready
// ----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", initApp);
