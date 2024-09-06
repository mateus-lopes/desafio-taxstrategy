import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public userService: UserService) {   }

  // Método para login
  login(username: string, password: string): boolean {
    if (username != '' && password != '') {
      const user = this.userService.getUser(username);
      console.log(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Método para logout
  logout(): void {
    localStorage.removeItem('currentUser');
  }

  // Verifica se o usuário está logado
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  // Obtém o usuário atual
  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}
