import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public allEmployees: IEmployee[] = [
    {
      name: 'Carlos Silva',
      email: 'carlos.silva@email.com',
      userType: 'Suporte',
      gender: true,
      selected: false,
      id: '2'
    },
    {
      name: 'Jeferson Santos',
      email: 'jeferson.santos@email.com',
      userType: 'Funcionário',
      gender: true,
      selected: false,
      id: '3'
    },
    {
      name: 'Mateus Albano',
      email: 'mateus.albano@email.com',
      userType: 'Admin',
      gender: true,
      selected: false,
      id: '1'
    },
    {
      name: 'João Pereira',
      email: 'joao.pereira@email.com',
      userType: 'Funcionário',
      gender: true,
      selected: false,
      id: '4'
    },
    {
      name: 'Jessica Santos',
      email: 'jessica.santos@email.com',
      userType: 'Funcionário',
      gender: false,
      selected: false,
      id: '5'
    }
  ];
  
  public employee: IEmployee = {
    name: '',
    email: '',
    userType: '',
    gender: false,
    selected: false,
    id: ''
  };
  constructor() { }

  setEmployees(employees: IEmployee[]): void {
    this.allEmployees = employees;
  }
}