import { Component } from '@angular/core';

@Component({
  selector: 'app-td',
  standalone: true,
  imports: [],
  templateUrl: './td.component.html',
  styleUrl: './td.component.scss'
})
export class TdComponent {

  formatedDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

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
}
