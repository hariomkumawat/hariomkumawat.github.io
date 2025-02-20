{/* <script> */ }
// Elements
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileOverlay = document.querySelector('.mobile-overlay');

// Scroll handler
function handleScroll() {
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
        navbar.style.padding = '1rem 0';
    } else {
        header.classList.remove('header-scrolled');
        navbar.style.padding = '1.5rem 0';
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu
function closeMobileMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
window.addEventListener('scroll', handleScroll);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Handle link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        closeMobileMenu();

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 968) {
        closeMobileMenu();
    }
});

// Initial scroll check
handleScroll();
//   </script>




//   <script>
// Combined Intersection Observer configuration
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that need animation
    const animatedElements = document.querySelectorAll(
        '.fade-up, .timeline-item, .education-item, .achievement-card'
    );

    // Observe each element
    animatedElements.forEach(element => observer.observe(element));
});
{/* </script> */ }

{/* <script> */ }
// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy-load');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.tagName === 'IMG') {
                    img.src = img.dataset.src;
                } else {
                    img.style.backgroundImage = `url(${img.dataset.src})`;
                }
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Parallax effect for background
document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.header-background');
    const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
    background.style.transform = `translate(${xPos}px, ${yPos}px)`;
});
{/* </script> */ }

{/* <script> */ }
// Animate progress bars when they come into view
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Initialize animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateProgressBars, 300);
});
{/* </script> */ }

{/* <script> */ }
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
{/* </script> */ }

