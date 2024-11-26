// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
    this.reset();
});
