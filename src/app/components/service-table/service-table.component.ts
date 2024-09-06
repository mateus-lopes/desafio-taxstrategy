import { Component, HostListener, Input, Renderer2, ElementRef } from '@angular/core';
import { IService } from '../../interfaces/work.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BtnComponent } from "../btn/btn.component";
import { WorkService } from '../../services/work.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-service-table',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BtnComponent
  ],
  templateUrl: './service-table.component.html',
  styleUrl: './service-table.component.scss'
})
export class ServiceTableComponent {
  constructor(private renderer: Renderer2, private elRef: ElementRef, public workService: WorkService, public layoutService: LayoutService) {}
  @Input() services: IService[] = [];
  @Input() headers: string[] = ['Código', 'Funcionário', 'Data de Previsão', 'Tipo de Equipamento', 'Status'];
  @Input() onlyRead: boolean = false;
  
  ctrlPressed$ = new BehaviorSubject<boolean>(false);
  
  selectedOption = '';
  
  getColor(status: string) {
    switch (status) {
      case 'Em Andamento':
        return 'blue';
      case 'Finalizado':
        return 'green';
      case 'Cancelado':
        return 'red';
      default:
        return 'black';
    }
  }

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

  onRowClick(event: MouseEvent, service: IService, index: number) {
    if (event.ctrlKey && !this.onlyRead) {
      this.selectRow(service.id);
    }
  }

  selectRow(id: string) {
    const service = this.services.find((service) => service.id === id);
    if (service) service.selected = !service.selected;
  }
  
  selectAllRows() {
    const allSelected = this.services.every((service) => service.selected);
    this.services.forEach((service) => (service.selected = !allSelected));
  }


  ngOnInit() {
    this.services.sort((a, b) => +a.id - +b.id);
  }

  allSelected() {
    return this.services.every(service => service.selected);
  }

  draggedItemIndex: number[] = [];

  onDragStart(event: DragEvent, index: number) {
    this.services.forEach((service) => {
      if (service.selected) {
      this.draggedItemIndex.push(this.services.indexOf(service));
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
      const tempItems = draggedIndices.map((draggedIndex) => this.services[draggedIndex]);
      this.services = this.services.filter((_, i) => !draggedIndices.includes(i));
      this.services.splice(index, 0, ...tempItems);
    }

    this.workService.setWorks(this.services);
    this.layoutService.updateNavbarNotification();
    this.draggedItemIndex = [];
  }

  showContextMenu = false;
  contextMenuPosition = { x: 0, y: 0 };
  selectedRowIndex: number[] = [];


  editRow$ = new BehaviorSubject<boolean>(false);
  deleteRow$ = new BehaviorSubject<boolean>(false);

  setNewEmployee(employee: string) {
    this.selectedRowIndex.forEach((index) => {
      this.services[index].employee = employee;
      this.services[index].status = "Em Andamento";
    });
    this.editRow$.next(false);
    this.services.forEach((service) => (service.selected = false));
    
    this.workService.setWorks(this.services);
    this.layoutService.updateNavbarNotification();
  }

  onAction(action: string) {
    if (this.selectedRowIndex && this.selectedRowIndex.length > 0) {

      if (action === 'Edit') {
        this.editRow$.next(true);
      } else if (action === 'Delete') {
        this.services = this.services.filter((_, index) => !this.selectedRowIndex.includes(index));
        this.workService.setWorks(this.services);
        this.layoutService.updateNavbarNotification();
        
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
    this.services.forEach((service) => {
      if (service.selected && this.services.indexOf(service) !== index) {
        this.selectedRowIndex.push(this.services.indexOf(service));
      }
    });

    this.selectedRowIndex = this.selectedRowIndex.sort((a, b) => a - b);
  
    event.preventDefault();
    this.showContextMenu = true;
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
  }
}  
  
