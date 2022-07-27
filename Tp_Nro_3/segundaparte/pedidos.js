import Producto from "../primeraparte/producto.js"

export default class Pedidos {
    constructor(prod, img){
        this.producto = prod
        this.imagen = img
    }

    obtener_productos(){
        let lista_productos = JSON.parse(localStorage.getItem('listado_productos'))
        let carta_productos = []


        lista_productos.forEach((producto, index) =>{
            let carta=`
            <div class="col-3">
                <div class="card border-danger mb-3 style="max-widht: 18rem;">
                    <div class="card-header bg-transparent border-danger">Producto ${producto.producto}</div>
                    <img src="${producto.imagen}" class="card-img-top">
                </div>
                <div class="card-footer bg-transparent border-danger text-center">
                    <button>Agregar</button>
                </div>
            </div>
            `
            
            carta_productos.push(carta)
    
        })
        document.getElementById('tarjetas').innerHTML = carta_productos.join('')
    }














    
}