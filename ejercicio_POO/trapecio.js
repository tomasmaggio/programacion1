export default class Trapecio{

    constructor(b1,b2,Al){
        this.base1=b1
        this.base2=b2
        this.altura_trap=Al
}

area_trapecio(){
    let trapecio = ((parseInt(this.base1)+parseInt(this.base2))*this.altura_trap)/2
    return trapecio
}

}