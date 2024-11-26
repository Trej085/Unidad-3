//  arreglo vacío para almacenar las frutas
let frutas = [];

//  solicitar nombres de frutas al usuario
let continuar = true;

while (continuar) {
    let fruta = prompt("Ingresa el nombre de una fruta (o escribe 'salir' para terminar):");
    
    if (fruta.toLowerCase() === "salir") {
        continuar = false; // Terminar el bucle
    } else {
        frutas.push(fruta); // Agregar la fruta al arreglo
    }
}

// Mostrar las frutas ingresadas al final
alert("Frutas ingresadas: " + frutas.join(", "));
