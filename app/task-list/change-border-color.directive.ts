import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBorderColor]',
  standalone: false
})
export class ChangeBorderColorDirective {

  constructor() { }
  @HostBinding('style.border') border = '2px solid white';

  @HostListener('mouseenter') onHover() {
    this.border = '4px solid purple';
  }

  @HostListener('mouseleave') onLeave() {
    this.border = '2px solid white';
  }

}
