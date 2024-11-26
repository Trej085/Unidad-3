// Crear un arreglo inicial con algunos números
let numeros = [10, 20, 30];

// Bucle para permitir al usuario agregar más números al arreglo
let continuar = true;

while (continuar) {
    let entrada = prompt("Ingresa un número para agregar al arreglo (o escribe 'salir' para terminar):");
    
    if (entrada.toLowerCase() === "salir") {
        continuar = false; // Terminar el bucle
    } else {
        let numero = parseFloat(entrada); // Convertir la entrada a número
        if (!isNaN(numero)) {
            numeros.push(numero); // Agregar el número al arreglo
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }
}

// Mostrar los números ingresados
alert("Números ingresados: " + numeros.join(", "));

// Calcular y mostrar la suma total de los números
let sumaTotal = numeros.reduce((total, num) => total + num, 0); // Sumar los números
alert("La suma total de los números es: " + sumaTotal);
