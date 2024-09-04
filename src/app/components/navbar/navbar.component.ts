import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NavComponent,
    LogoComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
