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

  formatedDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  onRowClick(event: MouseEvent, service: IService, index: number) {
    if (event.ctrlKey && !this.onlyRead) {
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
      finalDate: "2021-10-10",
      employee: "João",
      description: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a",
      status: "Aguardando Funcionário",
      selected: false,
      initialDate: '',
      equipmentType: 'Notebook'
    },
    {
      ref: "2",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Aguardando Funcionário",
      selected: false,
      initialDate: '',
      equipmentType: 'Notebook'
    }
  ];
  @Input() employees: string[] = ["João", "Jeferson", "Mateus"];
  @Input() onlyRead: boolean = false;

  allSelected() {
    return this.services.every(service => service.selected);
  }

  draggedItemIndex: number[] = [];

  onDragStart(event: DragEvent, index: number) {
    this.services.map((service) => {
      if (service.selected) {
        this.draggedItemIndex.push(this.services.indexOf(service));
      }
    })
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

    console.log('draggedItemIndex', this.draggedItemIndex);
    const draggedIndices = this.draggedItemIndex.sort((a, b) => a - b);

    if (draggedIndices.length > 0 && draggedIndices[0] !== index) {
      const tempItems = draggedIndices.map((draggedIndex) => this.services[draggedIndex]);
      this.services = this.services.filter((_, i) => !draggedIndices.includes(i));
      this.services.splice(index, 0, ...tempItems);
    }

    this.draggedItemIndex = [];
  }

  showContextMenu = false;
  contextMenuPosition = { x: 0, y: 0 };
  selectedRowIndex: number[] = [];


  editRow$ = new BehaviorSubject<boolean>(false);
  deleteRow$ = new BehaviorSubject<boolean>(false);

  setNewEmployee(employee: string) {
    console.log('setNewEmployee', this.selectedRowIndex)
    this.selectedRowIndex.forEach((index) => {
      this.services[index].employee = employee;
    });
    this.editRow$.next(false);
    this.services.forEach((service) => (service.selected = false));
  }

  onAction(action: string) {
    if (this.selectedRowIndex && this.selectedRowIndex.length > 0) {

      if (action === 'Edit') {
        this.editRow$.next(true);
        console.log('Edit', this.selectedRowIndex);
      } else if (action === 'Delete') {
        this.services = this.services.filter((_, index) => !this.selectedRowIndex.includes(index));

        this.deleteRow$.next(true);

        setTimeout(() => {
          this.deleteRow$.next(false);
        }, 1000);

        console.log('delete', this.selectedRowIndex);
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
  
