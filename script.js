document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Evita que el formulario recargue la página

    const formData = new FormData(this);

    // Usamos fetch para enviar el formulario de manera asíncrona
    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Mostrar el snackbar de agradecimiento
            const snackbar = document.getElementById("snackbar");
            snackbar.className = "show"; // Activar la clase 'show' para mostrar el snackbar

            // Reiniciar el formulario después de mostrar el snackbar
            this.reset();

            // Ocultar el snackbar después de 3 segundos
            setTimeout(function() {
                snackbar.className = snackbar.className.replace("show", ""); 
            }, 3000);
        } else {
            alert("Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error. Por favor, intenta más tarde.");
    });
});
