import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "../../components/btn/btn.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    BtnComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngAfterViewInit(): void {
    this.callFunctionAfterPageLoad();
  }

  callFunctionAfterPageLoad(): void {
    this.authService.isLoggedIn() == true ? this.router.navigate(['/dashboard']) : null;
  }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Falha no login. Verifique seu nome de usuário e senha.';
    }
  }
}
