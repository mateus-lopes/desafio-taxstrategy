import { Component, HostListener, Input, Renderer2, ElementRef } from '@angular/core';
import { IService } from '../../interfaces/navbar.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-service-table',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './service-table.component.html',
  styleUrl: './service-table.component.scss'
})
export class ServiceTableComponent {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  
  editRow$ = new BehaviorSubject<boolean>(false);

  ctrlPressed$ = new BehaviorSubject<boolean>(false);
  
  @HostListener('window:keydown', ['$event'])
  onCtrlDown(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.renderer.addClass(document.body, 'ctrl-pressed');
      this.ctrlPressed$.next(true);
    }
  }

  @HostListener('window:keyup', ['$event'])
  onCtrlUp(event: KeyboardEvent) {
    if (event.key === 'Control') {
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

  formatedDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  onRowClick(event: MouseEvent, service: IService, index: number) {
    if (event.ctrlKey) {
      this.selectRow(service.ref);
    }
  }

  selectRow(ref: string) {
    const service = this.services.find((service) => service.ref === ref);
    if (service) service.selected = !service.selected;
  }
  
  selectAllRows() {
    const allSelected = this.services.every((service) => service.selected);
    this.services.forEach((service) => (service.selected = !allSelected));
  }

  @Input() services: IService[] = [
    {
      ref: "1",
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Em Espera",
      selected: false,
    },
    {
      ref: "2",
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Em Espera",
      selected: false,
    },
    {
      ref: "3",
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Em Espera",
      selected: false,
    },
    {
      ref: "4",
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Em Espera",
      selected: false,
    },
    {
      ref: "5",
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Em Espera",
      selected: false,
    }
  ];

  allSelected() {
    return this.services.every(service => service.selected);
  }

  draggedItemIndex: number | null = null;

  onDragStart(event: DragEvent, index: number) {
    this.draggedItemIndex = index;
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

    const draggedIndex = this.draggedItemIndex;

    if (draggedIndex !== null && draggedIndex !== index) {
      const temp = this.services[draggedIndex];
      this.services.splice(draggedIndex, 1);
      this.services.splice(index, 0, temp);
    }

    this.draggedItemIndex = null;
  }

  showContextMenu = false;
  contextMenuPosition = { x: 0, y: 0 };
  selectedRowIndex: number | null = null;

  onRightClick(event: MouseEvent, index: number) {
    event.preventDefault();
    this.showContextMenu = true;
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    this.selectedRowIndex = index;
  }

  onAction(action: string) {
    if (this.selectedRowIndex !== null) {
      const selectedItem = this.services[this.selectedRowIndex];
      console.log(`${action} no item: `, selectedItem);

      if (action === 'Edit') {
        this.editRow$.next(true);
      } else if (action === 'Delete') {
        this.services.splice(this.selectedRowIndex, 1);
        alert(`Deletado: ${selectedItem.ref}`);
      }
    }

    this.showContextMenu = false;
  }
}
