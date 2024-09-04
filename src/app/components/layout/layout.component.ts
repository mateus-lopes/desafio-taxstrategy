import { Component } from '@angular/core';
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

}
