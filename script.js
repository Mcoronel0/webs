document.addEventListener("DOMContentLoaded", () => {
    // Ocultar la pantalla de carga después de 1.5 segundos
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);

    // Manejar el envío del formulario de contacto
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el envío real del formulario

        // Mostrar el mensaje de éxito
        formMessage.classList.remove("d-none");

        // Limpiar los campos del formulario
        form.reset();

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            formMessage.classList.add("d-none");
        }, 3000);
    });
});
