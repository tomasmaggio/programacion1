import Pedidos from "./pedidos.js"


function construir_catalogo()
{
    let pedido = new Pedidos()
    pedido.obtener_productos()
}

construir_catalogo()

function agregar(){
    let pedido = new Pedidos()
    const index = localStorage.getItem("indice_pedido")

    pedido.agregar_pedido(index)
}

for (const btn of document.getElementsByClassName('btn_agregar')) {
    btn.addEventListener('click', agregar)
}


function mostrar_tabla (){
    let indice = localStorage.getItem("indice_pedido")
    let pedido = new Pedidos()
    pedido.agregar_pedido(indice) 
}
for (const btn of document.getElementsByClassName('btn_agregar')) {
    btn.addEventListener('click', mostrar_tabla)
}



function finalizar(){
    let pedido = new Pedidos()
    pedido.finalizar_pedido()
}
document.getElementById("btn_finalizar").addEventListener("click",finalizar)
