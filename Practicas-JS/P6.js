function cambiarDiseño(){
    let titulo = document.getElementById("titulo");
    titulo.innerText = "Manipulacion del DOOM";
    
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = "<p> Botón al final de la pagina centrado. Cuando se le de click al Boton debera de Cambiar la mayoría de las características.</p>";
}