import Producto from "./producto.js";

function guardar(){
    let producto = document.getElementById("inp_producto").value
    let precio   = document.getElementById("inp_precio").value
    let imagen   = document.getElementById("inp_imagen").value
    let descripcion = document.getElementById("inp_descripcion").value

    let productojs = new Producto(producto, precio, imagen, descripcion)
    productojs.guardar_producto()
}

document.getElementById("btn_guardar").addEventListener("click", guardar)

function listar(){
    let productojs = new Producto()
    productojs.obtener_productos()
}
listar()