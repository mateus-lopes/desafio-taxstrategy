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
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Concluido",
      selected: false,
    },
    {
      ref: "2",
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Concluido",
      selected: false,
    },
    {
      ref: "3",
      forecastDate: "2021-10-10",
      employee: "Jeferson",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Concluido",
      selected: false,
    },
    {
      ref: "4",
      forecastDate: "2021-10-10",
      employee: "Mateus",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Concluido",
      selected: false,
    },
    {
      ref: "5",
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Concluido",
      selected: false,
    },
    {
      ref: "6",
      forecastDate: "2021-10-10",
      employee: "João",
      email:'abc@gmail.com',
      description: "Troca de óleo",
      status: "Concluido",
      selected: false,
    },
  ]
}
