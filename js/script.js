document.addEventListener("DOMContentLoaded", function () {
// 1. Validación de Datos y Confirmación de Envío del Formulario de Cotización

    const formCotizacion = document.getElementById("form-cotizacion");
    const contenedorMensajeCotizar = document.getElementById("mensaje-error-cotizar");

    if (formCotizacion) {
        formCotizacion.addEventListener("submit", function (event) {
            // Detener el envío por defecto para procesarlo con JS
            event.preventDefault();

            // Captura de datos
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const modelo = document.getElementById("modelo").value;
            const fecha = document.getElementById("fecha").value;

            // Limpiar mensajes previos
            contenedorMensajeCotizar.style.color = "";
            contenedorMensajeCotizar.innerHTML = "";

            // Validación en JavaScript (Verifica campos vacíos o incorrectos)
            if (!nombre || !correo || !telefono || !modelo || !fecha) {
                contenedorMensajeCotizar.style.color = "#d9534f"; // Rojo
                contenedorMensajeCotizar.innerHTML = "⚠️ Por favor, diligencie todos los campos requeridos.";
                return;
            }

            // Validar teléfono (debe ser numérico de 10 dígitos)
            if (telefono.length !== 10) {
                contenedorMensajeCotizar.style.color = "#d9534f";
                contenedorMensajeCotizar.innerHTML = "⚠️ Ingrese un número de celular válido de 10 dígitos.";
                return;
            }

            // Si pasa todas las validaciones -> Mensaje de éxito
            contenedorMensajeCotizar.style.color = "#2e7d32"; // Verde
            contenedorMensajeCotizar.innerHTML = "✅ ¡Información enviada con éxito! Nos pondremos en contacto contigo pronto.";
            
            // Reiniciar los campos del formulario después del envío exitoso
            formCotizacion.reset();
        });
    }

});