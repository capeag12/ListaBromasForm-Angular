    import { Injectable } from '@angular/core';
    import { Broma } from './broma';

    @Injectable({
    providedIn: 'root'
    })
export class ServicioBromas {
    private listaBromas:Broma[]

    constructor() { 
        this.listaBromas = []
        this.listaBromas.push(new Broma("¿Donde mira una vaca sus tareas?", "En la moooodle"));
        this.listaBromas.push(new Broma("¿Cuál es el peinado favorito de los carteros? ", "Los tirabuzones"))

    }

    getListaBromas():Broma[]{
        return this.listaBromas
    }

    addBroma(nueva:Broma){
        this.listaBromas.push(nueva)
    }

    eliminarBroma(index:number){
        this.listaBromas.splice(index,1)
    }

    devolverBroma(index:number):Broma{
        return this.listaBromas[index]
    }
}
