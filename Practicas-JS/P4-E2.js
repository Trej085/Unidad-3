let materia = {
    Materia1: {
      nombre: "Ecuaciones Diferenciales",
      horario: "Lunes 10:00 - 11:00",
      calificacion: 0
    },
    Materia2: {
      nombre: "Arquitectura de Computadoras",
      horario: "Lunes 01:00 - 02:00",
      calificacion: 0
    },
    Materia3: {
      nombre: "Taller de Base de Datos",
      horario: "Miércoles 02:00 - 03:00",
      calificacion: 0
    },
    Materia4: {
      nombre: "Programación Web",
      horario: "Jueves 05:00 - 06:00",
      calificacion: 0
    },
    Materia5: {
      nombre: "Lenguajes y Autómatas",
      horario: "Jueves 06:00 - 07:00",
      calificacion: 0
    },
  
    // Método para ingresar calificaciones
    ingresarCalificaciones: function () {
      for (let key in this) {
        if (typeof this[key] === "object" && this[key].calificacion !== undefined) {
          let calificacion = parseFloat(prompt(`Ingresa la calificación de ${this[key].nombre}:`));
          if (!isNaN(calificacion)) {
            this[key].calificacion = calificacion;
          } else {
            alert("Calificación no válida. Se asignará 0.");
            this[key].calificacion = 0;
          }
        }
      }
    },
  
    // Método para calcular la suma de las calificaciones
    calcularSuma: function () {
      let suma = 0;
      for (let key in this) {
        if (typeof this[key] === "object" && this[key].calificacion !== undefined) {
          suma += this[key].calificacion;
        }
      }
      return suma;
    },
  
    // Método para calcular el promedio de las calificaciones
    calcularPromedio: function () {
      let suma = this.calcularSuma();
      let numeroMaterias = 0;
      for (let key in this) {
        if (typeof this[key] === "object" && this[key].calificacion !== undefined) {
          numeroMaterias++;
        }
      }
      return (numeroMaterias > 0) ? (suma / numeroMaterias).toFixed(2) : 0;
    }
  };
  
  // Función para verificar si deseas ejecutar el programa
  function ejecutarPrograma() {
    let ejecutar = confirm("¿Deseas ingresar calificaciones y ver la suma y el promedio?");
    if (ejecutar) {
      materia.ingresarCalificaciones();
      let suma = materia.calcularSuma();
      let promedio = materia.calcularPromedio();
      console.log("La suma de las calificaciones es: " + suma);
      console.log("El promedio de las calificaciones es: " + promedio);
    } else {
      console.log("El programa no se ejecutó.");
    }
  }
  
  // Llamar a la función para iniciar el programa
  ejecutarPrograma();
  