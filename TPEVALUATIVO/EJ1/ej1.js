//funcion clasica
function sacarporcentaje(){

const auto = document.getElementById("slt_auto").value


    if(auto == 'fordka')
    {
        const resultado = 1750000 - (1750000*0.15)
        document.getElementById("resultado").textContent = 'Precio Ford Ka (con descuento del 15%) = '+ resultado
    }
    else{
        if(auto == 'fordfiesta')
        {
            const resultado = 1950000 - (1950000*0.05)
            document.getElementById("resultado").textContent = 'Precio Ford Fiesta (con descuento del 5%) = '+ resultado
        } else{
            const resultado = 2560000 - (2560000*0.10)
            document.getElementById("resultado").textContent = 'Precio Ford Focus (con descuento del 10%) = '+ resultado
        }
    }
    
}

function dar_resultado()
{
    const respuesta = sacarporcentaje()
}