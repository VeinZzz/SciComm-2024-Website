// Form Submission with Enhanced Feedback and Loading Animation
document.getElementById('registration-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Add a loading animation to indicate processing
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerText = 'Submitting...';

    // Collect data from the form fields
    const formData = new FormData(e.target);

    try {
        const response = await fetch('/register', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (result.status === 'success') {
            alert(result.message);
            document.getElementById('registration-form').reset(); // Reset form
        } else {
            alert('Registration failed: ' + result.message);
        }
    } catch (error) {
        alert('Registration failed. Please try again.');
        console.error('Error:', error);
    }

    // Re-enable button and reset text after submission
    submitBtn.disabled = false;
    submitBtn.innerText = 'Submit Registration';
});

// Enhanced Burger Menu Toggle
document.querySelector('.burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');

    // Add sliding animation for smooth transition
    navLinks.style.transition = 'transform 0.5s ease-in-out';
    navLinks.style.transform = navLinks.classList.contains('active') ? 'translateX(0)' : 'translateX(100%)';
});

// Smooth Scrolling and Active Section Highlight
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to target section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Highlight active section in nav
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        // Close nav-links in mobile view
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.burger').classList.remove('active');
    });
});

// Enhanced Input Animation for Form Elements
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
    input.addEventListener('focus', () => {
        // Add a color change and grow effect
        input.style.borderColor = '#66BB6A'; // Soft green
        input.style.boxShadow = '0 0 15px rgba(102, 187, 106, 0.5)'; // Green glow
        input.style.transform = 'scale(1.03)'; // Slight enlarge
    });
    input.addEventListener('blur', () => {
        // Reset border and transform effects
        input.style.borderColor = '#e0e0e0';
        input.style.boxShadow = 'none';
        input.style.transform = 'scale(1)';
    });
});

// Interactive Button Ripple Effect (Natural Animation)
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
        ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
        ripple.style.background = 'rgba(102, 187, 106, 0.5)'; // Soft green ripple
        this.appendChild(ripple);

        // Animate ripple expansion and fade-out
        ripple.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
        ripple.style.transform = 'scale(10)';
        ripple.style.opacity = '0';

        setTimeout(() => {
            ripple.remove();
        }, 600); // Remove ripple after 600ms
    });
});

// Interactive Form Elements with Dynamic Hints
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    // Provide feedback based on the input field content
    input.addEventListener('input', () => {
        input.nextElementSibling && input.nextElementSibling.remove();
        if (input.value.trim() === '' && input.getAttribute('type') !== 'number') {
            const hint = document.createElement('p');
            hint.className = 'input-hint';
            hint.style.color = '#e63d32';
            hint.textContent = `Please provide ${input.placeholder.toLowerCase()}`;
            input.insertAdjacentElement('afterend', hint);
        }
    });
});

// Adaptive Button Styling Based on Content
document.querySelectorAll('.hero-buttons button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.background = 'linear-gradient(135deg, #388E3C, #66BB6A)'; // Green gradient on hover
        button.style.transform = 'translateY(-4px)'; // Hover lift effect
    });
    button.addEventListener('mouseleave', () => {
        button.style.background = 'linear-gradient(135deg, #66BB6A, #388E3C)'; // Revert gradient
        button.style.transform = 'translateY(0)';
    });
});

// Enhanced Navigation Effects
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Fade background color for navbar based on scroll
    document.querySelector('nav').style.backgroundColor = `rgba(56, 142, 60, ${Math.min(scrollY / 500, 0.9)})`;
});

// JavaScript for the accordion functionality
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.querySelector('span').textContent = content.classList.contains('active') ? '+' : '−';
        content.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link'); // Adjust class to your nav link class

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor behavior
            e.preventDefault();

            // Get the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
