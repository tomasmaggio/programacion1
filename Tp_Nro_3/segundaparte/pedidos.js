import Producto from "../primeraparte/producto.js"

export default class Pedidos {
    constructor(prod, img, cliente){
        this.producto = prod
        this.imagen = img

        this.contar = 0
        this.total = 0
    }

    obtener_productos(){
        let lista_productos = JSON.parse(localStorage.getItem('listado_productos'))
        let carta_productos = []


        lista_productos.forEach((producto, index) =>{
            let carta=`
            <div class="col-3">
                <div class="card border-danger mb-3 style="max-widht: 18rem;">
                    <div class="card-header bg-transparent border-danger">Producto ${producto.producto}</div>
                    <img src="${producto.imagen}" class="">
                </div>
                <div class="card-footer bg-transparent border-danger text-center">
                    <button onclick="guardar_indice_pedido(${index})" class="btn_agregar">Agregar</button>
                </div>
            </div>
            `
            
            carta_productos.push(carta)
    
        })
        document.getElementById('tarjetas').innerHTML = carta_productos.join('')
    }



agregar_pedido(index){ 
    let lista_productos = JSON.parse(localStorage.getItem('listado_productos'))
    
    let nuevo_pedido ={
        producto: lista_productos[index].producto,
        cantidad: 1,
        precio: lista_productos[index].precio
    }

    if("listado_pedidos" in localStorage){
        let lista_pedidos = JSON.parse(localStorage.getItem("listado_pedidos"))
        lista_pedidos.push(nuevo_pedido)
        localStorage.setItem("listado_pedidos", JSON.stringify(lista_pedidos))

    }else{
        let lista_pedidos = []
        lista_pedidos.push(nuevo_pedido)

        localStorage.setItem("listado_pedidos", JSON.stringify (lista_pedidos))
    }
}



tabla_pedidos(){
    let pedidos= JSON.parse(localStorage.getItem("listado_pedidos"))
    let nuevo_pedido = []
    pedidos.forEach((producto) =>{
        let producto_pedido=`<tr>
                                <td>${producto.nombre}</td>
                                <td>${producto.cantidad}</td>
                                <td>${producto.precio}</td>
                            </tr>`

    nuevo_pedido.push(producto_pedido)
    })

    document.getElementById("table_body").innerHTML = nuevo_pedido.join('')

}



finalizar_pedido(){
    let pedido_terminado = JSON.parse(localStorage.getItem("listado_pedidos"))

    pedido_terminado.forEach(producto =>{
        this.contar = this.contar + 1
        this.total = this.total + parseInt(producto.precio)

    })
    console.log(this.total)

    let nuevo_pedido = {
        cliente: this.cliente,
        total: this.total,
        pedido: pedido_terminado
    }
    console.log(nuevo_pedido)


    if("pedido_final" in localStorage){
        let pedido = JSON.parse(localStorage.getItem("pedido_terminado"))
        pedido.push(nuevo_pedido)
        localStorage.setItem("pedido_terminado", JSON.stringify(pedido))
    }else{
        let pedido= []
        pedido.push(nuevo_pedido)
        localStorage.setItem("pedido_terminado", JSON.stringify(pedido))
    }





}







    
}