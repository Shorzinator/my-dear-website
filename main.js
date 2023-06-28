// Select all links with hashes
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default behavior
        e.preventDefault();

        // Animate smooth scroll
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
