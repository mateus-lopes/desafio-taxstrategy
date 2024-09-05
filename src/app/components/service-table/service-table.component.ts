import { Component, HostListener, Input, Renderer2, ElementRef } from '@angular/core';
import { IService } from '../../interfaces/navbar.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BtnComponent } from "../btn/btn.component";

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
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  
  editRow$ = new BehaviorSubject<string>('');
  deleteRow$ = new BehaviorSubject<string>('');

  ctrlPressed$ = new BehaviorSubject<boolean>(false);

  selectedOption = '';
  
  getColor(status: string) {
    switch (status) {
      case 'Em Andamento':
        return 'blue';
      case 'Concluido':
        return 'green';
      case 'Cancelado':
        return 'red';
      default:
        return 'black';
    }
  }

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

  setNewEmployee(employee: string, ref: string) {
    try {
      const service = this.services.find((service) => service.ref === ref);
    if (service) service.employee = employee;
    } catch (error) {
      console.error(error);
    } finally {
      this.editRow$.next('');
    }
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
      description: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a",
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
    }
  ];
  @Input() employees: string[] = ["João", "Jeferson", "Mateus"];
  @Input() statuses: string[] = ["Em Espera", "Concluido", "Cancelado"];
  @Input() onlyRead: boolean = false;

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
        this.editRow$.next(selectedItem.ref);
      } else if (action === 'Delete') {
        this.services.splice(this.selectedRowIndex, 1);
        this.deleteRow$.next(selectedItem.ref);
        setTimeout(() => {
          this.deleteRow$.next('');
        }, 1000);
      }
    }

    this.showContextMenu = false;
  }
}
