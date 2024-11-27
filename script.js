document.addEventListener("DOMContentLoaded", () => {
    // Pantalla de carga
    const loader = document.getElementById("loader");
    setTimeout(() => loader.style.display = "none", 1500);

    // Formulario
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        message.classList.remove("hidden");
        form.reset();
    });
});
