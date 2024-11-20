// Bienvenida y Solicitar datos al usuario
let nombre = prompt("¿Cual es tu nombre?");
alert("Bienvenido,"+ nombre + "!");

let actividad = prompt(nombre + " por favor, ingresa tu actividad favorita:");

//Confirmar si desea guardar la informacion
//let confirm = prompt("¿Desea guardar la  informacion? (Escribe 'si' o 'no')");



// Verificar la respuesta y mostrar el mensaje final correspondiente
let eliminar = confirm("¿Estas seguro de que tu informacion es correcta?");
if (eliminar) {
    alert("Su informacion ha sido guardada correctamente: Nombre: ${nombre}, Actividad Favorita: ${actividad}");
} else {
    alert("Su informacion ha sido borrada");
}

// Mostrar mensaje personalizado en una alerta
alert(`Hola ${nombre}, Tu actividad favorita es ${actividad}`);