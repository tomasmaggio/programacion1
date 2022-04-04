const mostrar = () => {
    document.getElementById("inp_dato").value = 10
    document.getElementById("h_titulo").textContent ="Probando funcion flecha"
}

//obtengo el elemento botón
const boton = document.getElementById("btn_mostrar")

//indicamos el evento a escuchar (al hacer click en este caso)
//al hacer click se invoca la funcion mostrar
boton.addEventListener("click", mostrar)

