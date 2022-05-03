const frases = (grados) =>{
    if (grados >=14 && grados <32){
        var valor = "La temperatura es baja"
    }else{
        if (grados >=32 && grados <68){
                valor = "La temperatura es adecuada"
        }else{
                if (grados >=68 && grados <96){
                    valor = "La temperatura es alta"
                }else{
                        valor = "la temperatura es desconocida"
                }
        }
    }
return valor
}

const respuesta = () =>{
    const input = document.getElementById("input_grados").value

    const resultado = frases (input)

    document.getElementById("h1resultado").textContent = resultado
}



const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", respuesta)