import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[comprobarValidacion]'
})
export class ErrorDirective {
  @Input() param={
    validado:true
  }

  @HostBinding('class.err') private noValidado:boolean = this.param.validado
  
  constructor(private el:ElementRef) {
    console.log(this.noValidado)
   }

}
