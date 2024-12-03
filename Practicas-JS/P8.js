// Función suma
const suma = (a, b) => a + b;

// Función esPar
const esPar = (num) => num % 2 === 0;

//Ejercicio 1 Función para manejar la suma
function Suma() {
    const a = parseInt(prompt("Ingrese el primer número:"));
    const b = parseInt(prompt("Ingrese el segundo número:"));
    const suma = (a, b) => {
        return a + b;
    }
    console.log(suma);
}


// Ejercicio 2 Función para determinar si un numero es impar o par
function verificarPar() {
    const num = parseInt(prompt("Ingrese un número:"));
    if (esPar(num)) {
        alert(`El número ${num} es par.`);
    } else {
        alert(`El número ${num} es impar.`);
    }
}

// Ejercicio 3: Transformar array con .map
function Map() {
    let numeros = [2, 4, 6, 8, 10];
    let cubos = numeros.map(num => num ** 3);
    alert(`Números originales: ${numeros}\nCubo: ${cubos}`);
    console.log(cubos); // [8,64,216,512,1000]
}

// Ejercicio 4: Extraer nombres de una lista de objetos
function extraerNombres() {
    const personas = [
        { nombre: "Adan", edad: 22 },
        { nombre: "Diana", edad: 21 },
        { nombre: "Diego", edad: 20 },
        { nombre: "Jonathan", edad: 20 }
    ];
    const obtenerNombres = (arr) => arr.map(persona => persona.nombre);
    const nombres = obtenerNombres(personas);
    alert(`Nombres extraídos: ${nombres.join(", ")}`);
}