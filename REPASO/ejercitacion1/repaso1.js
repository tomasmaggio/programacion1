function calcular_temperatura()
{
    const celcius = document.getElementById("grados_celcius").value
    
    const fahrenheit = (celcius * 9/5)+32

    return fahrenheit
}

function dar_resultado(){
    const respuesta = calcular_temperatura ()
    alert(respuesta)
}