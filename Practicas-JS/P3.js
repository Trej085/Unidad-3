function solicitarDatos() {
    // Solicitar el nombre
    let nombre = prompt("¿Cuál es tu nombre?");
    alert("¡Bienvenido, " + nombre + "!"); //Bienvenida al usuario

    // Solicitar la actividad favorita
    let actividad = prompt(nombre + ", ingresa tu actividad favorita:");

    // Confirmar si desea guardar la información
    let respuesta = confirm("¿Estás seguro de que deseas guardar la información?");
    
    // Verificar la respuesta final 
    let eliminar = confirm("¿Estás seguro de que tu información es correcta?");
    if (eliminar) {
        alert("Su información ha sido guardada correctamente.");
        alert(`${nombre}, tu actividad favorita es ${actividad}`);
    } else {
        alert("Su información ha sido borrada.");
        return solicitarDatos(); // Llamar de nuevo a la función SolicitarDatos
    }
}

// Llamar a la función 
solicitarDatos();