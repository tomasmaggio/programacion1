import Pedidos from "./pedidos.js"


function construir_catalogo()
{
    let pedido = new Pedidos()
    pedido.obtener_productos()
}

construir_catalogo()