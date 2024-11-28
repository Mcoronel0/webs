document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message")
    };

    fetch("https://formsubmit.co/mauro.nicolas.coronel@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert("Mensaje enviado correctamente.");
                this.reset();
            } else {
                alert("Hubo un error al enviar el mensaje.");
            }
        })
        .catch(error => console.error("Error:", error));
});
