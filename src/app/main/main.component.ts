import { Component, OnInit } from '@angular/core';
import { Broma } from '../broma';
import { ServicioBromas } from '../servicio-bromas.service';

@Component({
  selector: 'compPrincipal',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listaBromas:Broma[] = this.servicio.getListaBromas()

  constructor(private servicio:ServicioBromas) { 
    console.log(servicio)
    console.log(this.listaBromas)
    this.servicio.getChistesObservable().subscribe( listaRecuperada=>this.listaBromas=listaRecuperada)
  }

  ngOnInit(): void {
  }

}
