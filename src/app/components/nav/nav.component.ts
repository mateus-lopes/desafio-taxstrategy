import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavDropdownComponent } from "../nav-dropdown/nav-dropdown.component";
import { RouterLink } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';
import { Link } from "../../interfaces/navbar.interface"

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NavDropdownComponent, 
    NgForOf,
    CommonModule,
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() datas: Link[] = [];
  @Input() myServicesValue: number = 2;
  @Input() notification: boolean = false;
  @Input() currentPage: string = "/";

  @Output("click") onClick: EventEmitter<any> = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
