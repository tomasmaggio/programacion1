async function obtener_datos()
{
    const datos = await fetch('https://api.jikan.moe/v4/anime?q=one%20punch%20man&sfw')

    const datos_definitivos = await datos.json()

    const datos_definitivos2 = datos_definitivos.data


    let totales_columnas = []
    datos_definitivos2.forEach(element =>{
        let columna = `
                
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <p></p>
                    </div>
                </div>            
            </div>`

            totales_columnas.push(columna)
    })



}