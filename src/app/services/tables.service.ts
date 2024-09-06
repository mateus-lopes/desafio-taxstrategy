import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  public selectedOption = '';
  public draggedItemIndex: number[] = [];
  public editRow$ = new BehaviorSubject<boolean>(false);
  public deleteRow$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  getColor(status: string): string {
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

  formatedDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }

  selectRow(ref: string): void {
    // Implementation for selecting a row
  }

  selectAllRows(): void {
    // Implementation for selecting all rows
  }

  onDragStart(event: DragEvent, index: number): void {
    // Implementation for drag start event
  }

  onDragOver(event: DragEvent): void {
    // Implementation for drag over event
  }

  onDrop(event: DragEvent, index: number): void {
    // Implementation for drop event
  }

  setNewEmployee(employee: string): void {
    // Implementation for setting a new employee
  }

  onAction(action: string): void {
    // Implementation for performing an action
  }

  onRightClick(event: MouseEvent, index: number): void {
    // Implementation for right-click event
  }
}
