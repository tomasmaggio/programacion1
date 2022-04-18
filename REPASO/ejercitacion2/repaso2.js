const angulos = (angulo1, angulo2, angulo3) => {
    const suma = angulo1+angulo2+angulo3

    var cuenta=(suma==180) ? 'Su triangulo es valido':'Su triangulo no es valido'
    return cuenta
}

const mostrar_calculo = () =>{
    const angulo1 = parseInt (document.getElementById("angulo1").value) 
    const angulo2 = parseInt (document.getElementById("angulo2").value)
    const angulo3 = parseInt (document.getElementById("angulo3").value)

    const respuesta = angulos(angulo1, angulo2, angulo3)
    document.getElementById("resultado").textContent=respuesta

}

const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click", mostrar_calculo)