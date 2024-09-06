import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service.js';
import { NavComponent } from "../nav/nav.component";
import { LogoComponent } from "../logo/logo.component";
import { AuthService } from '../../services/auth.service.js';

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
  constructor(public userService: UserService, private authService: AuthService, private router: Router) {}
  @Input() currentPage: string = "/";
  @Output("click") onClick: EventEmitter<any> = new EventEmitter();
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
  toggleUser(): void {
    this.userService.toggleUser();
  }

  click() {
    this.onClick.emit();
  }
}
