import { Component, Input, signal, WritableSignal } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TitlePageComponent } from "../title-page/title-page.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    TitlePageComponent,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input() path: string = "";
  @Input() page: string = "";
  @Input() currentPage: string = "/";
  @Input() navOpen: boolean = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
