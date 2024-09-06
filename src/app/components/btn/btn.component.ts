import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input("text") text: string = 'Button';
  @Input() disabled: boolean = false;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' | 'block' = 'block';
  @Input() loading: boolean = false;

  @Output("click") onClick: EventEmitter<any> = new EventEmitter();

  click() {
    this.onClick.emit(null);
  }
}
