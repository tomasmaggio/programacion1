function teorema (cateto_A, cateto_B){

    hipotenusa = Math.sqrt(Math.pow(cateto_A,2) + Math.pow(cateto_B,2))

    const resultado = hipotenusa.toFixed(2)

    return resultado
}

function resultado() {
    const cateto_A = parseInt(document.getElementById("cateto_a").value)
    const cateto_B = parseInt(document.getElementById("cateto_b").value)

const respuesta = teorema(cateto_A,cateto_B)

document.getElementById("resultado").textContent = respuesta
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", resultado)