const raices = (numero_a,numero_b,numero_c) => {
    const resultado1 = Math.pow(numero_b,2)-4*numero_a*numero_c
    const raiz_1 = -numero_b + Math.sqrt(resultado1)
    const raiz_2 = -numero_b - Math.sqrt(resultado1)
    const denominador = 2*numero_a



    const x1 = raiz_1/denominador
    const x2 = raiz_2/denominador




    return `x1 = ${x1} x2 = ${x2}`
}
 


const resultado = () => {
    const valor_a = parseInt(document.getElementById("numero_a").value)
    const valor_b = parseInt(document.getElementById("numero_b").value)
    const valor_c = parseInt(document.getElementById("numero_c").value)
    const respuesta = raices (valor_a, valor_b, valor_c)






    document.getElementById("resultado").textContent = respuesta





    
}

const boton_calcular = document.getElementById ("boton_calcular")
    boton_calcular.addEventListener('click',resultado)