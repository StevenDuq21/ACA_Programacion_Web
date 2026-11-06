document.addEventListener("DOMContentLoaded", function () {
    // 1. Validación de Datos y Confirmación de Envío del Formulario de Cotización

    const formCotizacion = document.getElementById("form-cotizacion");
    const contenedorMensajeCotizar = document.getElementById("mensaje-error-cotizar");

    if (formCotizacion) {
        formCotizacion.addEventListener("submit", function (event) {
            // Detener el envío por defecto para procesarlo con JS
            event.preventDefault();

            // Captura de datos
            const nombreCotizacion = document.getElementById("nombre").value.trim();
            const cedulaCotizacion = document.getElementById("cedula").value.trim();
            const correoCotizacion = document.getElementById("correo").value.trim();
            const telefonoCotizacion = document.getElementById("telefono").value.trim();
            const modeloCotizacion = document.getElementById("modelo").value;
            const fechaCotizacion = document.getElementById("fecha").value;
            const horaCotizacion = document.getElementById("hora").value;

            // Limpiar mensajes previos
            contenedorMensajeCotizar.style.color = "";
            contenedorMensajeCotizar.innerHTML = "";

            // Validación en JavaScript (Verifica campos vacíos o incorrectos)
            if (!nombreCotizacion || !cedulaCotizacion || !correoCotizacion || !telefonoCotizacion || !modeloCotizacion || !fechaCotizacion || !horaCotizacion) {
                contenedorMensajeCotizar.style.color = "#d9534f"; // Rojo
                contenedorMensajeCotizar.innerHTML = "⚠️ Por favor, diligencie todos los campos requeridos.";
                return;
            }

            // Validar cédula (debe tener entre 7 y 10 dígitos)
            if (cedulaCotizacion.length < 7 || cedulaCotizacion.length > 10) {
                contenedorMensajeCotizar.style.color = "#d9534f";
                contenedorMensajeCotizar.innerHTML = "⚠️ La cédula debe tener entre 7 y 10 dígitos.";
                return;
            }

            // Validar correo electrónico (formato texto+@+dominio)
            const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!correoRegex.test(correoCotizacion)) {
                contenedorMensajeCotizar.style.color = "#d9534f";
                contenedorMensajeCotizar.innerHTML = "⚠️ Ingrese un correo electrónico válido.";
                return;
            }

            // Validar teléfono (ingeresar un número de celular válido)
            if (telefonoCotizacion.length !== 10 || Number(telefonoCotizacion) < 3000000000 || Number(telefonoCotizacion) > 3999999999) {
                contenedorMensajeCotizar.style.color = "#d9534f";
                contenedorMensajeCotizar.innerHTML = "⚠️ Ingrese un número de celular válido de 10 dígitos (debe empezar por 3).";
                return;
            }

            // Validar fecha (no puede ser una fecha pasada al día de hoy)
            const fechaActual = new Date();
            const fechaSeleccionada = new Date(fechaCotizacion);
            if (fechaSeleccionada < fechaActual) {
                contenedorMensajeCotizar.style.color = "#d9534f";
                contenedorMensajeCotizar.innerHTML = "⚠️ La fecha seleccionada no puede ser anterior a la fecha actual.";
                return;
            }

            // Validar hora (debe ser entre 08:00 y 17:00)
            const [horaSeleccionada, minutosSeleccionados] = horaCotizacion.split(":").map(Number);
            if (horaSeleccionada < 8 || horaSeleccionada > 17 || (horaSeleccionada === 17 && minutosSeleccionados > 0)) {
                contenedorMensajeCotizar.style.color = "#d9534f";
                contenedorMensajeCotizar.innerHTML = "⚠️ La hora seleccionada no está dentro del rango de atención (08:00 - 17:00).";
                return;
            }

            // Si pasa todas las validaciones -> Mensaje de éxito
            contenedorMensajeCotizar.style.color = "#2e7d32"; // Verde
            contenedorMensajeCotizar.innerHTML = "✅ ¡Información enviada con éxito! Nos pondremos en contacto contigo pronto.";

            // Reiniciar los campos del formulario después del envío exitoso
            formCotizacion.reset();
        });
    }

    // 2. Validación de Datos y Confirmación de Envío del Formulario de Contacto

    const formContacto = document.getElementById("form-contacto");
    const contenedorMensajeContacto = document.getElementById("mensaje-error-contacto");

    if (formContacto) {
        formContacto.addEventListener("submit", function (event) {
            // Detener el envío por defecto para procesarlo con JS
            event.preventDefault();

            // Captura de datos
            const nombreContacto = document.getElementById("nombre").value.trim();
            const correoContacto = document.getElementById("correo").value.trim();
            const ciudadContacto = document.getElementById("ciudad").value.trim();
            const mensajeContacto = document.getElementById("mensaje").value.trim();

            // Limpiar mensajes previos
            contenedorMensajeContacto.style.color = "";
            contenedorMensajeContacto.innerHTML = "";

            // Validación en JavaScript (Verifica campos vacíos o incorrectos)
            if (!nombreContacto || !correoContacto || !mensajeContacto || !ciudadContacto) {
                contenedorMensajeContacto.style.color = "#d9534f"; // Rojo
                contenedorMensajeContacto.innerHTML = "⚠️ Por favor, diligencie todos los campos requeridos.";
                return;
            }

            // Validar correo electrónico (formato texto+@+dominio)
            const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!correoRegex.test(correoContacto)) {
                contenedorMensajeContacto.style.color = "#d9534f";
                contenedorMensajeContacto.innerHTML = "⚠️ Ingrese un correo electrónico válido.";
                return;
            }

            // Si pasa todas las validaciones -> Mensaje de éxito
            contenedorMensajeContacto.style.color = "#2e7d32"; // Verde
            contenedorMensajeContacto.innerHTML = "✅ ¡Información enviada con éxito! Nos pondremos en contacto contigo pronto.";

            // Reiniciar los campos del formulario después del envío exitoso
            formContacto.reset();
        });
    }
});