import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { IService } from '../../interfaces/navbar.interface';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [
    LayoutComponent,
    CardComponent,
    CommonModule
  ],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent {
  services: IService[] = [
    {
      ref: "7",
      finalDate: "2021-10-10",
      employee: "Mateus Albano",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Notebook'
    },
    {
      ref: "10",
      finalDate: "2021-10-10",
      employee: "Mateus Albano",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
  ]
}
