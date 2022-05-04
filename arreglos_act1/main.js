let lenguajes =['Phyton', 'JavaScript', 'Csharp', 'C++' , 'Java' , 'PHP' , 'Ruby']

function mostrar (){
        const longitud_el = lenguajes.length
        const ultimo_el = lenguajes[lenguajes.length-1]
        const tercer_el = lenguajes[2]

        document.getElementById("mostrar_p").textContent=`

            La longitud de el arreglo es: ${longitud_el},
            El ultimo elemento del arreglo es: ${ultimo_el},
            Y el tercer elemento del arreglo es: ${tercer_el}

        ` 
}
const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar)

///////////////////////////////////////////////////// ////////////////////////////////

function recorrer_arreglo (){
        lenguajes.forEach(Element => {
        console.log(Element)
        })


        lenguajes.push("Go")

        lenguajes.shift()

        lenguajes.unshift("Kotlin")

        lenguajes.splice(4, 2)

}

const boton2 = document.getElementById("btn_calcular2")
boton2.addEventListener("click", recorrer_arreglo)