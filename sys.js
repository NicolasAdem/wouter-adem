document.addEventListener('DOMContentLoaded', function() {
    // Progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    // Update progress bar
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Reviews initialization
    const reviews = [
        {
            text: "Wouter's application review revealed critical performance issues we hadn't noticed. His recommendations improved our site speed by 40%.",
            author: "Sarah Johnson",
            company: "Tech Solutions Inc.",
            rating: 5
        },
        {
            text: "The team training program transformed how we handle caching. Our applications are now significantly more efficient.",
            author: "Michael Chen",
            company: "Digital Innovations",
            rating: 5
        },
        {
            text: "In-depth knowledge and practical approaches make Wouter's coaching invaluable. Highly recommended for any Drupal team.",
            author: "Emma Williams",
            company: "WebStack Pro",
            rating: 5
        }
    ];

    const reviewsContainer = document.querySelector('.reviews-slider');
    if (reviewsContainer) {
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review-card';
            reviewElement.innerHTML = `
                <div class="stars">${'★'.repeat(review.rating)}</div>
                <p class="review-text">${review.text}</p>
                <div class="review-author">
                    <strong>${review.author}</strong>
                    <span>${review.company}</span>
                </div>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = e.target.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
    
            fetch("https://formspree.io/f/mannlepv", {
                method: "POST",
                body: new FormData(e.target),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    submitBtn.textContent = 'Message Sent!';
                    contactForm.reset();
                } else {
                    throw new Error('Error sending message');
                }
            })
            .catch(error => {
                submitBtn.textContent = 'Error - Try Again';
            })
            .finally(() => {
                setTimeout(() => {
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                }, 2000);
            });
        });
}});

function createParticles(progressBar) {
    if (Math.random() < 0.3) {  // Control particle frequency
        const particle = document.createElement('div');
        particle.className = 'particle';
        progressBar.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

// Update your existing scroll event listener
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${progress}%`;
    
    createParticles(progressBar);
});
