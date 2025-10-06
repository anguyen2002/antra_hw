import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: false
})
export class ChangeColorDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') backgroundColor? : string = "white";

  @HostListener('mouseenter') onHover() {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') onLeave() {
        this.backgroundColor = 'white';

  }
}
