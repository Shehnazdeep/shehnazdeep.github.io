document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            body.classList.toggle('mobile-nav-active');
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
