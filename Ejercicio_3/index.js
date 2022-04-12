function calcula_potencia()
{
    const tension = document.getElementById("inp_tension").value
    const corriente = document.getElementById("inp_corriente").value

    const potencia = tension * corriente;

    return potencia
}

function dar_resultado()
{
    const respuesta = calcula_potencia()
    alert(respuesta)
}