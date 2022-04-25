function sacarporcentaje(){

const auto = document.getElementById("slt_auto").value

    if(auto == 'fordka')
    {
        const resultado = 1487500
        document.getElementById("resultado").textContent = 'Precio Ford Ka (con descuento del 15%) = '+ resultado
    }
    else{
        if(auto == 'fordfiesta')
        {
            const resultado = 1852500
            document.getElementById("resultado").textContent = 'Precio Ford Fiesta (con descuento del 5%) = '+ resultado
        } else{
            const resultado = 2304000
            document.getElementById("resultado").textContent = 'Precio Ford Focus (con descuento del 10%) = '+ resultado
        }
    }
    
}

function dar_resultado()
{
    const respuesta = sacarporcentaje()
}