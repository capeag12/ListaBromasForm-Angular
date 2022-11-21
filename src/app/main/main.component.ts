import { Component, OnInit } from '@angular/core';
import { ServicioBromas } from '../servicio-bromas.service';

@Component({
  selector: 'compPrincipal',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listaBromas = this.servicio.getListaBromas()

  constructor(private servicio:ServicioBromas) { 
    console.log(servicio)
    console.log(this.listaBromas)
  }

  ngOnInit(): void {
  }

}
