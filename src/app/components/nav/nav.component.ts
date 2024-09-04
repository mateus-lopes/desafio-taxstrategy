import { Component } from '@angular/core';
import { NavDropdownComponent } from "../nav-dropdown/nav-dropdown.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavDropdownComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
