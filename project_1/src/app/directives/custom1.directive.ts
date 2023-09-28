import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom1]'
})
export class Custom1Directive {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="blue";
  }

}
