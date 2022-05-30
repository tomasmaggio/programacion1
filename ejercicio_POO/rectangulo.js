export default class Rectangulo{

    constructor(bas,alt){
        this.base_rectangulo=bas
        this.altura_rectangulo=alt
    }

    area_rectangulo(){
        let rectangulo = this.base_rectangulo*this.altura_rectangulo
        return rectangulo
    }


}