import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-control',
  standalone: false,
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss'
})
export class ButtonControlComponent {
  @Input() selectedColor:any;
  @Output() titleColor = new EventEmitter<string>;

  setColor(){
    this.titleColor.emit(this.selectedColor);
  }

}
