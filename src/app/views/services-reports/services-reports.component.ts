import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { IService } from '../../interfaces/navbar.interface';
import { ServiceTableComponent } from '../../components/service-table/service-table.component';

@Component({
  selector: 'app-services-reports',
  standalone: true,
  imports: [
    LayoutComponent,
    ServiceTableComponent,
  ],
  templateUrl: './services-reports.component.html',
  styleUrl: './services-reports.component.scss'
})
export class ServicesReportsComponent {
  services: IService[] = [
    {
      ref: "1",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "2",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "3",
      finalDate: "2021-10-10",
      employee: "Jeferson",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "4",
      finalDate: "2021-10-10",
      employee: "Mateus",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "5",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "6",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
  ]
}
