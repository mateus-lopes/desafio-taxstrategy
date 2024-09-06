import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeTableComponent } from '../../components/employee-table/employee-table.component';

@Component({
  selector: 'app-employees-panel',
  standalone: true,
  imports: [
    EmployeeTableComponent,
    LayoutComponent,
],
  templateUrl: './employees-panel.component.html',
  styleUrl: './employees-panel.component.scss'
})
export class EmployeesPanelComponent {
  constructor(public employeeService: EmployeeService) { }
}
