    // Enviar los datos a FormSubmit
    const formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // Mostrar el modal de agradecimiento
                const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));
                thankYouModal.show();
                // Reiniciar el formulario
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