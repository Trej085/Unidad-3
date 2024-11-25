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
      nombre: "Programacion Web",
      horario: "Jueves 05:00 - 06:00"
    },
    Materia5: {
        nombre: "Lenguajes y Automatas",
        horario: "Jueves 06:00 - 07:00"
    },  
    mostrarMaterias: function () {
      return this.Materia1 + this.Materia2 + this.Materia3 + this.Materia4 + this.Materia5
    }
};
// Función para ejecutar el botón virtual
function mostrarMateriasBoton() {
    let ejecutar = confirm("¿Deseas mostrar las materias del semestre?");
    if (ejecutar) {
      alert(materias.mostrarMaterias());
    } else {
      alert("Operación cancelada.");
    }
  }
  
  // Llamar a la función del botón virtual
  mostrarMateriasBoton();
  
  
  console.log(materia.mostrarMaterias());
  