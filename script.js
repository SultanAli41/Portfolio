document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================= */
    /* 1. Mobile Menu Toggle Logic (Refactored from original HTML) */
    /* ======================================================= */
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    // Get all links in the mobile menu and the desktop nav
    const navLinks = document.querySelectorAll('#mobile-menu a, .nav-link'); 

    // Function to toggle the mobile menu visibility
    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    // Event listener for the hamburger button
    menuButton.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (for smoother navigation on mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });


    /* ======================================================= */
    /* 2. Animated Cursor Logic */
    /* ======================================================= */
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('cursor-follower');
    const interactiveElements = document.querySelectorAll('a, button, .project-card, input, textarea, .interactive');

    // Store the position for the follower
    let posX = 0, posY = 0;
    // Store the position for the cursor dot
    let mouseX = 0, mouseY = 0;

    // Use a loop for smooth animation
    function animateCursor() {
        // Linear interpolation (lerp) for smooth following effect on the FOLLOWER
        // The closer the factor is to 1, the faster it moves. 0.1 is a good balance.
        posX += (mouseX - posX) * 0.1; 
        posY += (mouseY - posY) * 0.1;
        
        follower.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
        
        // Use requestAnimationFrame for smooth, browser-optimized animation loop
        requestAnimationFrame(animateCursor);
    }
    
    // Start the animation loop
    animateCursor();

    // Update target mouse position when mouse moves
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Directly move the primary dot without smoothing (for precision)
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    // Handle hover states for interactive elements
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.classList.add('hovered');
            cursor.classList.add('hovered-dot');
        });
        el.addEventListener('mouseleave', () => {
            follower.classList.remove('hovered');
            cursor.classList.remove('hovered-dot');
        });
    });

    // Add a class to the body to hide the cursor completely on mobile devices (optional but good practice)
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        document.body.style.cursor = 'default';
        cursor.style.display = 'none';
        follower.style.display = 'none';
    }

});
/*Send Message*/
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('contact-form');
        const messageContainer = document.getElementById('message-container');

        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.classList.add('hidden');
                messageContainer.classList.remove('hidden');
                messageContainer.classList.add('block');
            });
        }
    });
