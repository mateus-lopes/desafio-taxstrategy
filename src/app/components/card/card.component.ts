import { Component, Input } from '@angular/core';
import { IService } from '../../interfaces/work.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() service: IService = {
    id: '000',
    equipmentType: 'Notebook',
    finalDate: '00/00/0000',
    initialDate: '00/00/0000',
    employee: 'Mateus Albano',
    description: '...',
    status: "Em Andamento",
    selected: false
  };

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
