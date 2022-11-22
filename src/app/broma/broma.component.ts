import { Component, OnInit, Input } from '@angular/core';
import { Broma } from '../broma';
import { ServicioBromas } from '../servicio-bromas.service';

@Component({
  selector: 'broma',
  templateUrl: './broma.component.html',
  styleUrls: ['./broma.component.css']
})
export class BromaComponent implements OnInit {
  @Input() indice!:number
  broma!:Broma
  
  constructor(private servicio:ServicioBromas) { 
    
  }

  ngOnInit(): void {
    this.broma = this.servicio.devolverBroma(this.indice);
    
  }

  eliminarBroma(){
    this.servicio.eliminarBroma(this.indice)
  }

}
