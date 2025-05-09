// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// SPA Navigation
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = item.getAttribute('href').slice(1);
        
        // Hide all pages
        pages.forEach(page => {
            page.style.display = 'none';
        });
        
        // Show target page
        document.getElementById(targetPage).style.display = 'block';
        
        // Update active nav item
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    contactForm.reset();
});

// Initialize - Show home page by default
window.addEventListener('DOMContentLoaded', () => {
    pages.forEach(page => {
        if (page.id !== 'home') {
            page.style.display = 'none';
        }
    });
});