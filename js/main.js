document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            body.classList.toggle('mobile-nav-active');

            // Ensure dark theme remains active when mobile nav is opened
            if (document.body.getAttribute('data-theme') === 'dark') {
                body.classList.add('dark'); // Add the dark theme class if it's dark
            } else {
                body.classList.remove('dark'); // Remove dark theme class if it's light
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = {
                name: this.name.value,
                email: this.email.value,
                message: this.message.value
            };

            // In a real-world scenario, you would use this data to send an email
            // Here's an example using EmailJS (you'd need to include their script)
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
            //   .then(function() {
            //     alert('Message sent successfully!');
            //     contactForm.reset();
            //   }, function(error) {
            //     alert('Error sending message: ' + error);
            //   });

            // For now, just log the data and show an alert
            console.log('Form submitted:', formData);
            alert('Thanks for your message! In a real implementation, this would be sent to my email.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                body.classList.remove('mobile-nav-active');

                // Scroll to target
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
