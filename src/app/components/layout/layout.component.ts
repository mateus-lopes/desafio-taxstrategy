import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TitlePageComponent } from "../title-page/title-page.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    TitlePageComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input() path: string = "Title Layout";
  @Input() page: string = "";
  @Input() currentPage: string = "/";
  @Input() notification: number = 2;
  
}
