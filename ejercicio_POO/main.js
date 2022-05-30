import Triangulo from "./triangulo.js";
import Trapecio from "./trapecio.js";
import Rectangulo from "./rectangulo.js";

const mostrar =() =>{
    const base= document.getElementById('base_triangulo').value
    const altura= document.getElementById('altura_triangulo').value

    const area = new Triangulo(base, altura)
    const respuesta = area.area_triangulo()
    document.getElementById('resultado_triangulo').textContent = respuesta





    const base1= document.getElementById('base_trapecio').value
    const base2= document.getElementById('base2_trapecio').value
    const altura_trap= document.getElementById('altura_trapecio').value

    const area_trap = new Trapecio(base1,base2,altura_trap)
    const respuesta_trap = area_trap.area_trapecio()
    document.getElementById('resultado_trapecio').textContent = respuesta_trap





    const base_rec= document.getElementById('base_rectangulo').value
    const altura_rec= document.getElementById('altura_rectangulo').value

    const area_rec = new Rectangulo(base_rec,altura_rec)
    const respuesta_rec = area_rec.area_rectangulo()
    document.getElementById('resultado_rectangulo').textContent = respuesta_rec


}

document.getElementById('btn_calculo').addEventListener("click",mostrar)
