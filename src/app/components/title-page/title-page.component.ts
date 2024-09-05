import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss'
})
export class TitlePageComponent {
  @Input() path: string = "Title 1";
  @Input() page: string = "";
}
