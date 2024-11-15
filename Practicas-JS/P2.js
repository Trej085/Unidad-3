// Solicitar datos al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
let edad = prompt("Por favor, ingresa tu edad:");
let pais = prompt("Por favor, ingresa tu país de residencia:");

// Mostrar mensaje personalizado en una alerta
alert(`Hola ${nombre}, tu registro está completo. Eres de ${pais} y tienes ${edad} años.`);

// Confirmar si los datos son correctos
let confirmacion = prompt("¿Son correctos estos datos? (Escribe 'si' o 'no')");

// Verificar la respuesta y mostrar el mensaje correspondiente
if (confirmacion.toLowerCase() === "si") {
    console.log(`Registro guardado correctamente: Nombre: ${nombre}, Edad: ${edad}, País: ${pais}`);
} else {
    console.log("Registros borrados");
}

