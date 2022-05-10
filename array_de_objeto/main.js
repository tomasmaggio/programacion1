//crear un arreglo de objetos

let vehiculos = [
    { //objeto 1
        marca:'Ford',
        modelo: 'Focus',
        anio: '2014',
        origen: 'Mercosur'
    },
    { //objeto 2
        marca:'Volkswagen',
        modelo: 'Golf 1.4 TSI',
        anio: '2014',
        origen: 'Mexico'
    }

]
//recorrer un array de objetos
vehiculos.forEach( (element, index) =>{
    console.log(index+'-'+element.modelo)
});


//funciones asincronas - Concepto de Async y Await 
const recorrer = async () => {

    //esto realiza una solicitud HTP
    //a traves del Metodo GET
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')

    const publicacion = await respuesta.json()

    publicacion.forEach(element => {
        console.log(element.title)
    });

}

const boton = document.getElementById("btn_ejecutar")
boton.addEventListener("click",recorrer)