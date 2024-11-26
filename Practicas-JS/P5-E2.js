//  arreglo vacío para almacenar las calificaciones
let calificaciones = [];

//  solicitar calificaciones al usuario
let continuar = true;

while (continuar) {
    let entrada = prompt("Ingresa una calificación (o escribe 'salir' para terminar):");
    
    if (entrada.toLowerCase() === "salir") {
        continuar = false; // Terminar el bucle
    } else {
        let calificacion = parseFloat(entrada); // Convertir la entrada a número
        if (!isNaN(calificacion)) {
            calificaciones.push(calificacion); // Agregar la calificación al arreglo
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }
}

// Calcular el promedio de las calificaciones
if (calificaciones.length > 0) {
    let suma = calificaciones.reduce((total, num) => total + num, 0); // Sumar todas las calificaciones
    let promedio = suma / calificaciones.length; // Calcular el promedio
    alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
} else {
    alert("No se ingresaron calificaciones.");
}
