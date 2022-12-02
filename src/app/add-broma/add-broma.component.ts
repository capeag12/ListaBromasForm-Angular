import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Broma } from '../broma';
import { ServicioBromas } from '../servicio-bromas.service';

@Component({
  selector: 'app-add-broma',
  templateUrl: './add-broma.component.html',
  styleUrls: ['./add-broma.component.css']
})
export class AddBromaComponent implements OnInit {
  formAdd!:FormGroup

  pregValidado!:boolean
  resValidado!:boolean
  
  constructor(private servicio:ServicioBromas) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      pregunta:new FormControl("",[Validators.required, Validators.minLength(6)]),
      respuesta:new FormControl("",[Validators.required, Validators.minLength(6)])
    })

  }

  addBroma(){
    
    this.servicio.addBroma(new Broma(this.formAdd.controls['pregunta'].value,this.formAdd.controls['respuesta'].value))
    this.formAdd.reset()
  }

}
