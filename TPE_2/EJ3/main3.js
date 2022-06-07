const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
            lenguaje: 'TypeScript',
            patron: 'MVVM',
            spa: 'si'
            },
   }

   const mostrar = () => {
    const {titulo, nombre} = framework
    const {lenguaje, patron, spa} = framework.características
    console.log(`
            Titulo: ${titulo}.
            Nombre: ${nombre}.
            Lenguaje: ${lenguaje}.
            Patron: ${patron}.
            Spa: ${spa}.`
    )

}
document.getElementById('btn_ejecutar').addEventListener("click",mostrar)