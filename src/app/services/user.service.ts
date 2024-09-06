// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _id: string = '1';
  private _name: string = 'Mateus Lopes Albano';
  private _nickname: string = this._name.split(' ')[0] + ' ' + this._name.split(' ')[this._name.split(' ').length - 1];
  private _gender: boolean = true;
  private _userType: string = 'Admin';

  constructor() { }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  
  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get userType(): string {
    return this._userType;
  }

  set userType(value: string) {
    this._userType = value;
  }

  get gender(): boolean {
    return this._gender;
  }

  set gender(value: boolean) {
    this._gender = value;
  }

  setUser(id: string, name: string, userType: string): void {
    this._id = id;
    this._name = name;
    this._userType = userType;
  }

  toggleUser(): void {
    this._gender = !this._gender
  }
}
