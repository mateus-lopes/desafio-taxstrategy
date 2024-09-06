import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public userService: UserService) {}

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  isLoggedIn(): boolean {
    if (this.isBrowser()) {
      return localStorage.getItem('currentUser') !== null;
    }
    return false;
  }

  login(username: string, password: string): boolean {
    if (username != '' && password != '') {
      const user = this.userService.getUser(username);
      console.log(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
  }

  getCurrentUser(): any {
    if (this.isBrowser()) {
      return JSON.parse(localStorage.getItem('currentUser') || '{}');
    }
    return null;
  }
}
