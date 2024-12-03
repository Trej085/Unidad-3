  // Función suma
  const suma = (a, b) => a + b;

  // Función esPar
  const esPar = (num) => num % 2 === 0;

  // Función para manejar el botón de suma
  function mostrarSuma() {
      const num1 = parseInt(prompt("Ingrese el primer número:"));
      const num2 = parseInt(prompt("Ingrese el segundo número:"));
      alert(`La suma de ${num1} y ${num2} es: ${suma(num1, num2)}`);
  }

  // Función para manejar el botón esPar
  function verificarPar() {
      const num = parseInt(prompt("Ingrese un número:"));
      if (esPar(num)) {
          alert(`El número ${num} es par.`);
      } else {
          alert(`El número ${num} es impar.`);
      }
  }