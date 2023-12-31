import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj : ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.background = 'yellow';
  }

  
}
