        document.getElementById("contact-form").addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            fetch("https://formsubmit.co/mauro.nicolas.coronel@gmail.com", {
                method: "POST",
                body: formData
            })
                .then(response => {
                    if (response.ok) {
                        const snackbar = document.getElementById("snackbar");
                        snackbar.className = "show";
                        this.reset();
                        setTimeout(() => snackbar.className = snackbar.className.replace("show", ""), 3000);
                    } else {
                        alert("Error al enviar el formulario.");
                    }
                })
                .catch(() => alert("Hubo un problema. Intente nuevamente."));
        });