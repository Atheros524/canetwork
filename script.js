// script.js (FINAL FIX)

function initApp() {
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
    // This code only runs AFTER the DOM is loaded AND the function is called
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
}

// ----------------------------------------------------------------------
// Check if the library is loaded, and then run the rest of the application
// ----------------------------------------------------------------------
if (window.tsParticles) {
    // If tsParticles is immediately available (normal load)
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    // Fallback: If the library is still loading, wait for the DOM
    document.addEventListener("DOMContentLoaded", () => {
        // Now that the DOM is loaded, check for the library again (this should be the fix)
        if (window.tsParticles) {
            initApp();
        } else {
            // Last resort: Add a very short delay to wait for definition
            setTimeout(() => {
                if (window.tsParticles) {
                     initApp();
                } else {
                    console.error("tsParticles is STILL not defined after waiting.");
                    // You might consider alerting the user or loading a fallback here.
                }
            }, 100);
        }
    });
}
