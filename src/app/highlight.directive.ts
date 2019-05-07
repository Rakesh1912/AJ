import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(a1:ElementRef) {
    a1.nativeElement.style.background='red';
   }

}
