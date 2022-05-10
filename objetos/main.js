// crear un objeto

const miobjeto = {
    nombre: 'Juan',
    apellido: 'Perez',
    dni: '45798880',
    correos: {
        gmail: 'JPerez@gmail.com',
        outlook: 'JPerez@hotmail.com',
        yahoo: 'JPerez@hotmail.com'
    }
}
console.log(miobjeto.apellido)

//mostrar los correos
/*
const gmail =miobjeto.correos.gmail;
const outlook =miobjeto.correos.outlook;
const yahoo =miobjeto.correos.yahoo;
*/

//Destructuring Objet
const { gmail, outlook, yahoo } = miobjeto.correos;

console.log(`
    correos:

    Gmail: ${gmail}
    Outlook: ${outlook}
    Yahoo: ${yahoo}
`)
