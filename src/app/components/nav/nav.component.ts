import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../services/layout.service.js';
import { NavDropdownComponent } from "../nav-dropdown/nav-dropdown.component";

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
  constructor(public layoutService: LayoutService) {}
  @Input() currentPage: string = "/";
  @Output("click") onClick: EventEmitter<any> = new EventEmitter();

  click(): void {
    this.onClick.emit();
  }
}
