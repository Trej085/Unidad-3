// Bienvenida y Solicitar datos al usuario
let nombre = prompt("¿Cual es tu nombre?");
alert("Bienvenido,"+ nombre + "!");

let actividad = prompt(nombre + "  ingresa tu actividad favorita:");

// Verificar la respuesta y mostrar el mensaje final correspondiente
let confirm = prompt("¿Estas seguro de que tu informacion es correcta?");
if (confirm) {
    alert("Su informacion ha sido guardada correctamente:");
    alert(`${nombre}, Tu actividad favorita es ${actividad}`);
} else {
    alert("Su informacion ha sido borrada");
}

