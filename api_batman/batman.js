export default class Batman{


    constructor(){

    }


    async obtener_peliculas(){
        const datos_peliculas = await fetch ('https://fake-movie-database-api.herokuapp.com/api?s=batman')

            const datos = await datos_peliculas.json()


            let lista_peliculas = []
            datos.Search.forEach(peliculas =>{
                let fila =`
                            <div class="col-md-4 mt-4">
                                <div class="card" style="width: 350px;">
                                <img src="${peliculas.Poster}" class="card-img-top" style="height: 480px">

                                <div class="card-body">
                                    <h4 class="card-tittle">${peliculas.Title}</h4>
                                    <p class="card-text">Año ${peliculas.Year}</p>
                                </div>

                                </div>
                            </div>`


                lista_peliculas.push(fila)
            })

            document.getElementById('pelicula').innerHTML = lista_peliculas.join('')
    }
    

}