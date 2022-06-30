export default class Producto{

    constructor(prod, prec, img, desc){
        this.producto = prod
        this.precio = prec
        this.imagen = img
        this.descripcion = desc
    }

    guardar_producto(){

        let nuevo_producto ={
            producto: this.producto,
            precio: this.precio,
            imagen: this.imagen,
            descripcion: this.descripcion
        }

        if("listado_productos" in localStorage){
            let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))
            lista_productos.push(nuevo_producto)
            localStorage.setItem("listado_productos", JSON.stringify(lista_productos))

        }else{
            let lista_productos = []
            lista_productos.push(nuevo_producto)

            localStorage.setItem("listado_productos", JSON.stringify (lista_productos))
        }
    }


    obtener_productos(){
        let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))

        let filas = []
        lista_productos.forEach( (element, index) => {
            let fila=
            `<tr>
                    <td>${index}</td>
                    <td>${element.producto}</td>
                    <td><img src="${element.imagen}"></td>
                    <td>${element.descripcion}</td>
                    <td>${element.precio}</td>

                </tr>`
                filas.push(fila)
        })
        document.getElementById("tbody").innerHTML = filas.join('')

    }



















}