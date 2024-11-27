document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    // Manejar envío de formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Mostrar mensaje de confirmación
        formMessage.classList.remove("d-none");

        // Limpiar formulario
        form.reset();

        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            formMessage.classList.add("d-none");
        }, 3000);
    });
});
