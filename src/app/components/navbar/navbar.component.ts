import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service.js';
import { NavComponent } from "../nav/nav.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LogoComponent,
    NavComponent,
    NgOptimizedImage,
    CommonModule,
    RouterLink, 
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public userService: UserService) {}
  @Input() currentPage: string = "/";
  @Output("click") onClick: EventEmitter<any> = new EventEmitter();

  updateUser(): void {
    this.userService.setUser('123', 'John Doe', 'admin');
  }

  toggleUser(): void {
    this.userService.toggleUser();
  }

  click() {
    this.onClick.emit();
  }
}
