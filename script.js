// script.js (CORRECTED & ENHANCED)

// Use an IIFE (Immediately Invoked Function Expression) to protect the global scope
(function() {
    
    // Define the server address once as a constant for clarity and easy updates
    const SERVER_ADDRESS = 'food-yang.gl.joinmc.link';
    const SLIDESHOW_INTERVAL_MS = 5000;

    function initApp() {
        
        // ================= Slideshow Logic =================
        let slides = document.querySelectorAll('.slideshow .slide');
        let current = 0;
        let slideshowTimer = null; // Variable to store the interval ID
        
        if (slides.length > 1) {
            // 1. Initialize the first slide to be visible
            slides[current].classList.add('active'); 
            
            // 2. Start the rotation timer
            slideshowTimer = setInterval(() => {
                // Remove 'active' from the current slide, but check if it exists first
                if (slides[current]) {
                    slides[current].classList.remove('active');
                }
                
                // Calculate the next slide index
                current = (current + 1) % slides.length;
                
                // Add 'active' to the new slide, checking if it exists
                if (slides[current]) {
                    slides[current].classList.add('active');
                }
            }, SLIDESHOW_INTERVAL_MS);
        }

        // ================= Join Us Button Logic =================
        const joinBtn = document.getElementById('joinBtn');
        
        if (joinBtn) {
            joinBtn.addEventListener('click', () => {
                // Use the defined constant
                navigator.clipboard.writeText(SERVER_ADDRESS)
                    .then(() => {
                        // Use a constant variable for the original text
                        const originalText = joinBtn.textContent; 
                        joinBtn.textContent = 'Copied!';
                        
                        setTimeout(() => { 
                            // Reset to the original text after a delay
                            joinBtn.textContent = originalText; 
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                        
                        // Use a constant variable for the original text
                        const originalText = joinBtn.textContent; 
                        joinBtn.textContent = 'Error!';
                        
                        setTimeout(() => { 
                            // Reset to the original text after a delay
                            joinBtn.textContent = originalText; 
                        }, 2000);
                    });
            });
        }

        // ================= Particles with Minecraft blocks =================
        // Use an async function for cleaner tsParticles loading and better error handling
        async function loadParticles() {
            if (window.tsParticles) {
                try {
                    await tsParticles.load("particles-js", {
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
                        detectRetina: false
                    });
                } catch (error) {
                    console.error("Failed to load tsParticles configuration:", error);
                }
            } else {
                console.warn("tsParticles library (window.tsParticles) is not loaded. Particle animation skipped.");
            }
        }
        
        loadParticles();
    }

    // ----------------------------------------------------------------------
    // Run the application logic once the entire HTML document is ready
    // ----------------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", initApp);

})(); // End of IIFE
