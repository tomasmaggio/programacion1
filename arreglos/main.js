//crear un array
let helados = ["Cereza","Banana Split", "Dulce de leche"]

//mostrar longitud de un arreglo (cantidad de elementos)
console.log(`
Longitud = ${helados.lenght} //3
`)

//acceso a un elemento de un array mediante su índice
//EJ:acceder al ultimo elemento
let ultimo_elemento = helados[helados.length-1]
console.log(`
    ultimo elemento = ${ultimo_elemento}
`)



//recorrer un arreglo haciendo uso de foreach
helados.forEach( (element,index) => {
    console.log(`
         ${index} - ${element}
    `)
});


//como agregar un elemento al final de un array 
helados.push("Pistacho")
console.log(helados)

//como eliminar un elemento al final de un array
helados.pop()
console.log("helados")

//como agregar un elemento al inicio de un array 
helados.unshift("Menta granizada")
console.log(helados)


//como eliminar el pirmer elemento de un array
helados.shift()
console.log(helados)

//como encontrar los posiciones de un elemento
let buscar_indice = helados.indexOf("Banana Split")
console.log(`
    Posicion del elemento de Banana Split = ${buscar_indice}
`)


//Eliminar un elemento segun su posicion
helados.splice(buscar_indice,1)
console.log(helados)


//Eliminar varios elementos de un array
helados.splice(0,2)
console.log(helados)


//como copiar un array
helados.push("Marroc")
//aca comienza la copia
//["Marroc"]
let copia = helados.slice()
copia.push("Chocolate")

console.log(copia)
console.log(helados)











