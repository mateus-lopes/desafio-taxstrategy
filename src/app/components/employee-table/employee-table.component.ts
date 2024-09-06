import { Component, HostListener, Input, Renderer2, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IEmployee } from '../../interfaces/employee.interface';
import { BtnComponent } from "../btn/btn.component";
import { EmployeeService } from '../../services/employee.service';
import { PopupEditEmployeeComponent } from "../popup-edit-employee/popup-edit-employee.component";
import { UserService } from '../../services/user.service';
    
@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BtnComponent,
    PopupEditEmployeeComponent
],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  constructor(private renderer: Renderer2, private elRef: ElementRef, public employeeService: EmployeeService) {}
    @Input() employees: IEmployee[] = [];
    @Input() headers: string[] = ['Id', 'Nome', 'Email', 'Gênero', 'Tipo do Usuário'];
    @Input() onlyRead: boolean = false;
    
    ctrlPressed$ = new BehaviorSubject<boolean>(false);
    editRow$ = new BehaviorSubject<boolean>(false);
    deleteRow$ = new BehaviorSubject<boolean>(false);
    draggedItemIndex: number[] = [];
    showContextMenu = false;
    contextMenuPosition = { x: 0, y: 0 };
    selectedRowIndex: number[] = [];
  
    @HostListener('window:keydown', ['$event'])
    onCtrlDown(event: KeyboardEvent) {
      if (event.key === 'Control' && !this.onlyRead) {
        this.renderer.addClass(document.body, 'ctrl-pressed');
        this.ctrlPressed$.next(true);
      }
    }
  
    @HostListener('window:keyup', ['$event'])
    onCtrlUp(event: KeyboardEvent) {
      if (event.key === 'Control' && !this.onlyRead) {
        this.renderer.removeClass(document.body, 'ctrl-pressed');
        this.ctrlPressed$.next(false);
      }
    }
  
    @HostListener('document:mousedown', ['$event'])
    onDocumentClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (this.showContextMenu && !this.elRef.nativeElement.contains(target)) {
        this.showContextMenu = false;
      }
    }
  
    onRowClick(event: MouseEvent, employee: IEmployee, index: number) {
      if (event.ctrlKey && !this.onlyRead) {
        this.selectRow(employee.id);
      }
    }
  
    selectRow(id: string) {
      const employee = this.employees.find((employee) => employee.id === id);
      if (employee) employee.selected = !employee.selected;
    }
    
    selectAllRows() {
      const allSelected = this.employees.every((employee) => employee.selected);
      this.employees.forEach((employee) => (employee.selected = !allSelected));
    }
  
    allSelected() {
      return this.employees.every(employee => employee.selected);
    }
  
    onDragStart(event: DragEvent, index: number) {
      this.employees.forEach((employee) => {
        if (employee.selected) {
          this.draggedItemIndex.push(this.employees.indexOf(employee));
        }
      });
      if (this.draggedItemIndex.length == 0) this.draggedItemIndex.push(index);
      if (event.dataTransfer) {
        event.dataTransfer.setData('text', String(index));
        event.dataTransfer.effectAllowed = 'move';
      }
    }
  
    onDragOver(event: DragEvent) {
      event.preventDefault();
      event.dataTransfer!.dropEffect = 'move'; 
    }
  
    onDrop(event: DragEvent, index: number) {
      event.preventDefault();
      const draggedIndices = this.draggedItemIndex.sort((a, b) => a - b);
      if (draggedIndices.length > 0 && draggedIndices[0] !== index) {
        const tempItems = draggedIndices.map((draggedIndex) => this.employees[draggedIndex]);
        this.employees = this.employees.filter((_, i) => !draggedIndices.includes(i));
        this.employees.splice(index, 0, ...tempItems);
      }
      this.employeeService.setEmployees(this.employees);
      this.draggedItemIndex = [];
    }
  
    setEmployee(employee: IEmployee) {
      this.selectedRowIndex.forEach((index) => {
        this.employees[index] = employee;
      });
      this.editRow$.next(false);
      this.employees.forEach((employee) => (employee.selected = false));
      this.employeeService.setEmployees(this.employees);
    }
  
    onAction(action: string) {
      if (this.selectedRowIndex && this.selectedRowIndex.length > 0) {
        if (action === 'Edit') {
          this.editRow$.next(true);
        } else if (action === 'Delete') {
          this.employees = this.employees.filter((_, index) => !this.selectedRowIndex.includes(index));
          this.employeeService.setEmployees(this.employees);
          this.deleteRow$.next(true);
          setTimeout(() => {
            this.deleteRow$.next(false);
          }, 1000);
        }
      }
      this.showContextMenu = false;
    }
  
    onRightClick(event: MouseEvent, index: number) {
      this.selectedRowIndex = [];
      this.selectedRowIndex.push(index);
      this.employees.forEach((employee) => {
        if (employee.selected && this.employees.indexOf(employee) !== index) {
          this.selectedRowIndex.push(this.employees.indexOf(employee));
        }
      });
      this.selectedRowIndex = this.selectedRowIndex.sort((a, b) => a - b);
      event.preventDefault();
      this.showContextMenu = true;
      this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    }

    ngOnInit() {
      this.employees.sort((a, b) => +a.id - +b.id);
    }
  }  
    
  
