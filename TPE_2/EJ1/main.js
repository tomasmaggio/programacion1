const consumir_datos = async() => {

    const datos_recibidos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos = await datos_recibidos.json()

    let lista_monedas = []
    datos.forEach(monedas =>{
        let fila =`
                    <tr>
                        <td>N°</td>
                        <td>${monedas.casa.nombre}</td>
                        <td>${monedas.casa.compra}</td>
                        <td>${monedas.casa.venta}</td>
                    </tr>`

        lista_monedas.push(fila)
    })


    document.getElementById("tbl_body").innerHTML = lista_monedas.join('')
}
consumir_datos()

