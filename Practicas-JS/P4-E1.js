let materia = {
    Materia1: {
      nombre: "Ecuaciones Diferenciales",
      horario: "Lunes 10:00 - 11:00"
    },
    Materia2: {
      nombre: "Arquitectura de Computadoras",
      horario: "Lunes 01:00 - 02:00"
    },
    Materia3: {
      nombre: "Taller de Base de Datos",
      horario: "Miércoles 02:00 - 03:00"
    },
    Materia4: {
      nombre: "Programación Web",
      horario: "Jueves 05:00 - 06:00"
    },
    Materia5: {
      nombre: "Lenguajes y Autómatas",
      horario: "Jueves 06:00 - 07:00"
    },
  
    // Método para imprimir el horario
    imprimirHorario: function() {
      return this.Materia1 + this.Materia2;
    }
  };
  
  // Preguntar si quiere ejecutar el objeto
  function preguntarMostrarHorario() {
    let respuesta = confirm("¿Quieres ver el horario de las materias?");
    if (respuesta) {
      // Imprime el horario
      console.log(materia.imprimirHorario());
    } else {
      console.log("No se mostraron los horarios.");
    }
  }
  
  // Llamar a la función para preguntar
  preguntarMostrarHorario();
  