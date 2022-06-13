let criptomonedas = ['Bitcoin','Etherium','Tether','BNB' ,'Cardano' ,'Dai' ,'Helium','Shiba Inu','Tron','Cronos','Solana']

//b)
criptomonedas.push("Stellar")
console.log(criptomonedas)

//c)
criptomonedas.splice(7,2)
console.log(criptomonedas)

//d)
criptomonedas.push("Gate")
console.log(criptomonedas)

//e)
function mostrar (){
    const longitud_array = criptomonedas.length
    const ultimo_el = criptomonedas[criptomonedas.length-1]

    const indice = criptomonedas.indexOf("Helium")
    const elemento_6 = criptomonedas[indice]

    document.getElementById("mostrar_p").textContent=`

            La longitud de el arreglo es ${longitud_array},
            el ultimo elemento del arreglo es ${ultimo_el}.
            Criptomoneda ${elemento_6}
    
    
    `
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar)


//f)
const recorrer = () => {
    let lista_cripto = []

    criptomonedas.forEach(criptomoneda => {
        let fila = `<li class="list-group-item">${criptomoneda}</li>`


    lista_cripto.push(fila)
    });


    document.getElementById('criptomonedas').innerHTML = lista_cripto.join('')
}
document.getElementById('btn_mostrar').addEventListener('click', recorrer)