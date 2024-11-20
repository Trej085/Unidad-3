// Bienvenida y Solicitar datos al usuario
let nombre = prompt("¿Cual es tu nombre?");
alert("Bienvenido,"+ nombre + "!");

let actividad = prompt(nombre + "  ingresa tu actividad favorita:");

//
let respuesta = confirm("¿Estas seguro de que desea guardar la informacion?");

// Verificar la respuesta y mostrar el mensaje final correspondiente
let eliminar = confirm("¿Estas seguro de que tu informacion es correcta?");
if (eliminar) {
    alert("Su informacion ha sido guardada correctamente:");
    alert(`${nombre}, Tu actividad favorita es ${actividad}`);
} else{
    alert("Su informacion ha sido borrada");
}

