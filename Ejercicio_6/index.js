//crear un array
let marcas = ["Ford","Renault","Volkswagen","Seat","Peugeot","Chevrolet","Fiat","Toyota","Chery"]

//longitud del arreglo
console.log(`
Longitud = ${marcas.lenght} //3
`)

//acceder al ultimo elemento
let ultimo_elemento = marcas[marcas.length-1]
console.log(`
    ultimo elemento = ${ultimo_elemento}
`)

//recorrer un arreglo usando foreach (osea ir de elemento por elemento en la consola)
marcas.forEach( (element,index) => {
    console.log(`
        ${index} - ${element}
    `)
});




//agregar un elemento al final de un arreglo
marcas.push("Lamborghini")
console.log(marcas)

//eliminar un elemento al final de un arreglo
marcas.pop("Lamborghini")
console.log(marcas)

//agregar un elemento al inicio del arreglo
marcas.unshift("Ferrari")
console.log(marcas)

//eliminar un elemento al inicio del arreglo
marcas.shift("Ferrari")
console.log(marcas)

//encontrar la posicion de un elemento
let buscar_indice = marcas.indexOf("Ford")
console.log(`
    Posicion del elemento de Ford = ${buscar_indice}
`)

//eliminar un elemento segun la posicion
marcas.splice(buscar_indice,1)
console.log(marcas)

//eliminar varios elementos juntos de un array
marcas.splice(0,2)
console.log(marcas)

//copiar un array
marcas.push("Volkswagen")
let copia
copia.push("Seat")

console.log(copia)
console.log(marcas)




