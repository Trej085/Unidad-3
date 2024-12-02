 // Función para agregar una nueva película al menú
 function agregarPelicula() {
    const nuevaPelicula = prompt("Introduce el nombre de la nueva película:");
    if (nuevaPelicula) {
      const menu = document.getElementById("menu");
      const nuevoEnlace = document.createElement("a");
      nuevoEnlace.href = "#";
      nuevoEnlace.textContent = nuevaPelicula;
      menu.appendChild(nuevoEnlace);
    } else {
      alert("No se agregó ninguna película.");
    }
  }

  // Función para eliminar la primera película del menú
  function eliminarPrimeraPelicula() {
    const menu = document.getElementById("menu");
    if (menu.children.length > 0) {
      menu.removeChild(menu.firstElementChild);
    } else {
      alert("El menú está vacío.");
    }
  }

  // Función para eliminar la última película del menú
  function eliminarUltimaPelicula() {
    const menu = document.getElementById("menu");
    if (menu.children.length > 0) {
      menu.removeChild(menu.lastElementChild);
    } else {
      alert("El menú está vacío.");
    }
  }