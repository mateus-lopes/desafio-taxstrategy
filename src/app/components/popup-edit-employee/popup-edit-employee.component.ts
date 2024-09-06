import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { IEmployee } from '../../interfaces/employee.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-edit-employee',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BtnComponent,
    CommonModule,
    FormsModule,
  ],
  providers: [
    Output
  ],
  templateUrl: './popup-edit-employee.component.html',
  styleUrl: './popup-edit-employee.component.scss'
})
export class PopupEditEmployeeComponent {
  @Input() employee: IEmployee = {
    id: '',
    name: '',
    email: '',
    userType: '',
    gender: false
  };
  @Output() submit = new EventEmitter();
  @Output() close = new EventEmitter();

  closePopup() {
    this.close.emit();
  }

  setEmployee(employee: any) {
    this.submit.emit({
      ...employee,
      id: this.employee.id,
      gender: employee.gender === 'true' ? true : false
    });
  }

  form!: FormGroup;
  
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(this.employee.name, [Validators.required]),
      email: new FormControl(this.employee.email, [Validators.required]),
      gender: new FormControl(this.employee.gender, [Validators.required]),
      userType: new FormControl(this.employee.userType, [Validators.required]),
    });
  }

} 
