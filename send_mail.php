<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configuración del correo
    $to = "mauro.nicolas.coronel@gmail.com"; // Cambia este correo al destino.
    $subject = "Nuevo mensaje del formulario de contacto";
    
    // Obtener los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Formatear el cuerpo del correo
    $body = "Has recibido un nuevo mensaje desde tu formulario de contacto.\n\n";
    $body .= "Nombre: $name\n";
    $body .= "Correo Electrónico: $email\n";
    $body .= "Teléfono: $phone\n";
    $body .= "Mensaje:\n$message\n";

    // Configurar cabeceras del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Hubo un problema al enviar el mensaje. Intenta nuevamente.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
