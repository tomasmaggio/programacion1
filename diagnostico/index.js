let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeros_pares = []

numero.forEach(numero => {
    if(numero%2 == 0){
        numeros_pares.push(numero)
    }
})
console.log(numeros_pares)

let numeros = []
for (const a of numero.splice(2,6)) {
    numeros.push(a)
}
console.log(numeros)