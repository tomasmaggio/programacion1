const generar_datos = async() =>{

    const datos_recibidos = await fetch('https://fakestoreapi.com/products/category/electronics')

    const datos = await datos_recibidos.json()


    let lista_articulos = []
    datos.forEach(articulos =>{
        let fila =`
                    <div class="col-md-4 mt-4">
                        <div class="card" style="width: 250px;">
                            <img src="${articulos.image}" class="card-img-top" style="height: 200px">
                            <div class="card-body">
                                <h4 class="card-tittle">${articulos.title}</h4>
                                <p class="card-text">${articulos.description}</p>
                                <a href="#" class="btn btn-danger">$${articulos.price}</a>
                            </div>
                        </div>
                    </div>
        `




        lista_articulos.push(fila)
    })


    document.getElementById('articulo').innerHTML = lista_articulos.join('')

}
generar_datos()
