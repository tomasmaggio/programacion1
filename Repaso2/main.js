let consolas= ['PlayStation', 'Xbox', 'Nintendo Game Cube', 'Sega Dreamcast','Gameboy Advanced', 'Pokemon Mini']

//punto 2
consolas.push("Nintendo 64")
console.log(consolas)

//punto 3
consolas.splice(4,2)
console.log(consolas)

//punto 4
function mostrar (){
    const longitud_array = consolas.length
    const ultimo_el = consolas[consolas.length-1]
    const elemento_4 = consolas[4]

    document.getElementById("mostrar_p").textContent=`

            La longitud de el arreglo es ${longitud_array},
            el ultimo elemento del arreglo es ${ultimo_el},
            y el cuarto elemento del arreglo es ${elemento_4}
    
    
    `
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar)





let con = []
const recorrido = () => {

    consolas.forEach((index,element) => {
        
        let fila = `
                    <tr>
                    <th>${element}</th>
                    <td>${index}</td>
                    </tr>
        `

        con.push(fila)
    });

    document.getElementById('tbody').innerHTML=con.join('')
}

document.getElementById('btn_tabla').addEventListener("click",recorrido)