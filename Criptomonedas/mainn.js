const consumir_datos = async() => {

    const datos_recibidos = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    const datos= await datos_recibidos.json()

    let lista_cryptos = []
    datos.forEach(crypto =>{
        let fila =`<tr>
                    <td><img src="${crypto.image}" class="img-fluid"></td>
                    <td>${crypto.name}</td>
                    <td>${crypto.symbol}</td>
                    <td>${crypto.current_price}</td>
                    <td>${crypto.price_change_percentage_24h}</td>
                    <td>${crypto.total_volume}</td>
                    </tr>`

        lista_cryptos.push(fila)
    })

    document.getElementById("tbl_body").innerHTML = lista_cryptos.join('')


    
}

consumir_datos()