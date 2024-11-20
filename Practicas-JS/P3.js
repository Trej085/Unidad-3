function solicitarDatos() {
    // Solicitar el nombre
    let nombre = prompt("¿Cuál es tu nombre?");
    alert("¡Bienvenido, " + nombre + "!"); //Bienvenida al usuario

    // Solicitar la actividad favorita
    let actividad = prompt(nombre + ", ingresa tu actividad favorita:");

    // Confirmar si desea guardar la información
    function confirmarDatos(nombre, actividad) {
        let confirmar = confirm(`¿Es correcto? \nNombre: ${nombre} \nActividad favorita: ${actividad}`);
        return confirmar; // Retornar verdadero o falso según la respuesta
    }
    // Verificar la respuesta final 
    function mostrarMensajeFinal(confirmado, nombre, actividad) {
        if (confirmado) {
            alert("Su información ha sido guardada correctamente.");
            alert(`${nombre}, tu actividad favorita es ${actividad}`);
        } else {
            alert("Su información ha sido borrada.");
            function volverAIntentar() { //Pregunta si desea volver a introducir los datos
                let reintentar = confirm("¿Deseas volver a ingresar los datos?");
                return solicitarDatos;

            }
        }
        // Despedida 
        function despedida(nombre) {
            alert(`¡Gracias por participar, ${nombre}! 😊`);
            alert("Esperamos que hayas disfrutado del programa. ¡Hasta pronto! 👋");
        }
    }

}