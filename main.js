$(document).ready(function () {
    // Manejador de clic en el sobre o corazón
    $('.valentines-day').click(function () {
        // Animación de desvanecimiento del sobre
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            // Ocultar los elementos dentro del sobre
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Redirigir a otra página después de la animación
            setTimeout(function () {
                window.location.href = "mensaje.html"; // Cambia "page2.html" por la ruta de tu página
            }, 500); // Tiempo adicional para esperar la animación
        });
    });
});
