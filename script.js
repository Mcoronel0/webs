document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Evita que el formulario recargue la página

    const formData = new FormData(this);

    // Usamos fetch para enviar el formulario de manera asíncrona
    fetch("https://formsubmit.co/mauro.nicolas.coronel@gmail.com", {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // Mostrar el modal de agradecimiento
                const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));
                thankYouModal.show();
                // Reiniciar el formulario después de mostrar el modal
                this.reset();
            } else {
                alert("Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un error. Por favor, intenta más tarde.");
        });
});
