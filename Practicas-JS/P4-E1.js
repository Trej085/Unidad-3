let horario = {
  Materia1: {
    nombre: "Ecuaciones Diferenciales",
    hora: "Lunes a Viernes de 10:00 - 11:00"
  },
  Materia2: {
    nombre: "Arquitectura de Computadoras",
    hora: "Lunes a Viernes de 01:00 - 02:00"
  },
  Materia3: {
    nombre: "Taller de Base de Datos",
    hora: "Lunes a Jueves de 02:00 - 03:00"
  },
  Materia4: {
    nombre: "Programación Web",
    hora: "Lunes a Viernes de 05:00 - 06:00"
  },
  Materia5: {
    nombre: "Lenguajes y Autómatas",
    hora: "Lunes a Viernes de 06:00 - 07:00"
  },

  // Metodo para imprimir el horario
  imprimirHorario: function () {
    return this.Materia1.nombre + ": " + this.Materia1.hora + "\n" +
      this.Materia2.nombre + ": " + this.Materia2.hora + "\n" +
      this.Materia3.nombre + ": " + this.Materia3.hora + "\n" +
      this.Materia4.nombre + ": " + this.Materia4.hora + "\n" +
      this.Materia5.nombre + ": " + this.Materia5.hora;
  }
};

// Preguntar si quiere ejecutar el objeto
function preguntarMostrarHorario() {
  let respuesta = confirm("¿Quieres ver el horario de las materias?");
  if (respuesta) {
    // llama al metodo que Imprime el horario
    console.log(horario.imprimirHorario());
  } else {
    console.log("No se mostraron los horarios.");
  }
}

// Llamar a la función para preguntar
preguntarMostrarHorario();
