    import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
    import { Broma } from './broma';

    @Injectable({
    providedIn: 'root'
    })
export class ServicioBromas {
    private listaBromas:Broma[]
    private chistesSubject: Subject<Broma[]>

    constructor() { 
        this.listaBromas = []
        this.listaBromas.push(new Broma("¿Donde mira una vaca sus tareas?", "En la moooodle"));
        this.listaBromas.push(new Broma("¿Cuál es el peinado favorito de los carteros? ", "Los tirabuzones"))
        this.chistesSubject = new Subject();

    }

    getChistesObservable():Observable<Broma[]>{
        return this.chistesSubject.asObservable()
    }

    getListaBromas():Broma[]{
        return [...this.listaBromas]
    }

    addBroma(nueva:Broma){
        this.listaBromas.push(nueva)
        this.chistesSubject.next([...this.listaBromas])
    }

    eliminarBroma(index:number){
        this.listaBromas.splice(index,1)
        this.chistesSubject.next([...this.listaBromas])
    }

    devolverBroma(index:number):Broma{
        return this.listaBromas[index]
    }
}
