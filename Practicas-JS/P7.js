 // Función para agregar una nueva película al menú desplegable
 function agregarPelicula() {
    const nuevaPelicula = prompt("Introduce el nombre de la nueva película:");
    if (nuevaPelicula) {
      const menu = document.getElementById("menu");
      const nuevoElemento = document.createElement("li");
      const nuevoEnlace = document.createElement("a");
      nuevoEnlace.href = "#";
      nuevoEnlace.textContent = nuevaPelicula;
      nuevoElemento.appendChild(nuevoEnlace);
      menu.appendChild(nuevoElemento);
    } else {
      alert("No se agregó ninguna película.");
    }
  }

  // Función para eliminar la primera película del menú desplegable
  function eliminarPrimeraPelicula() {
    const menu = document.getElementById("menu");
    if (menu.children.length > 0) {
      menu.removeChild(menu.firstElementChild);
    } else {
      alert("El menú está vacío.");
    }
  }
