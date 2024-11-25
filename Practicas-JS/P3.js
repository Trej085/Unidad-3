function solicitarDatos() {
    // Solicitar el nombre
    let nombre = prompt("¿Cuál es tu nombre?");
    alert("¡Bienvenido, " + nombre + "!"); // Bienvenida al usuario

    // Solicitar la actividad favorita
    let actividad = prompt(nombre + ", ingresa tu actividad favorita:");

    // Confirmar si los datos son correctos
    let confirmado = confirmarDatos(nombre, actividad);

    // Mostrar el mensaje final o permitir volver a intentar
    mostrarMensajeFinal(confirmado, nombre, actividad);
}

// Función para confirmar si los datos son correctos
function confirmarDatos(nombre, actividad) {
    let confirmar = confirm(`¿Es correcto? \nNombre: ${nombre} \nActividad favorita: ${actividad}`);
    return confirmar; // Retorna verdadero o falso según la respuesta
}

// Función para mostrar el mensaje final o volver a intentar
function mostrarMensajeFinal(confirmado, nombre, actividad) {
    if (confirmado) {
        alert("Su información ha sido guardada correctamente.");
        alert(`${nombre}, tu actividad favorita es ${actividad}`);
        despedida(nombre);
    } else {
        alert("Su información ha sido borrada.");
        let reintentar = volverAIntentar(); // Preguntar si desea volver a intentar
        if (reintentar) {
            solicitarDatos(); // Volver a llamar la función principal
        } else {
            despedida(nombre);
        }
    }
}

// Función para preguntar si el usuario desea volver a intentar
function volverAIntentar() {
    let reintentar = confirm("¿Deseas volver a ingresar los datos?");
    return reintentar; // Retorna verdadero o falso
}

// Función de despedida
function despedida(nombre) {
    alert("Esperamos que hayas disfrutado del programa. ¡Hasta pronto! 👋");
}

// Llamar a la función principal
solicitarDatos();
