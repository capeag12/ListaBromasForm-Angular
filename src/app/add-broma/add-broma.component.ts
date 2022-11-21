import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-broma',
  templateUrl: './add-broma.component.html',
  styleUrls: ['./add-broma.component.css']
})
export class AddBromaComponent implements OnInit {
  formAdd!:FormGroup

  pregValidado!:boolean
  resValidado!:boolean
  
  constructor() { }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      pregunta:new FormControl("",[Validators.required, Validators.minLength(6)]),
      respuesta:new FormControl("",[Validators.required, Validators.minLength(6)])
    })

    
    this.resValidado = this.formAdd.controls['respuesta'].valid
  }

}
