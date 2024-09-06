import { Component, AfterViewInit  } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { CommonModule } from '@angular/common';
import { CardDashboardComponent } from '../../components/card-dashboard/card-dashboard.component';
import { BtnComponent } from '../../components/btn/btn.component';
import { Chart, registerables } from 'chart.js';
import { IService } from '../../interfaces/navbar.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LayoutComponent,
    CardDashboardComponent,
    CommonModule,
    BtnComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {

  services: IService[] = [
    { ref: "1", finalDate: "02/04/2024", employee: "João", description: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a", status: "Finalizado", selected: false, initialDate: '02/08/2024', equipmentType: 'Notebook' },
    { ref: "2", finalDate: "02/05/2024", employee: "João", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/05/2024', equipmentType: 'Notebook' },
    { ref: "3", finalDate: "02/03/2024", employee: "Jeferson", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/05/2024', equipmentType: 'Notebook' },
    { ref: "4", finalDate: "02/03/2024", employee: "Carlos", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/12/2024', equipmentType: 'Notebook' },
    { ref: "5", finalDate: "02/06/2024", employee: "", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/06/2024', equipmentType: 'Notebook' },
    { ref: "6", finalDate: "02/06/2024", employee: "", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/06/2024', equipmentType: 'Notebook' },
    { ref: "7", finalDate: "02/07/2024", employee: "", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/07/2024', equipmentType: 'Notebook' },
    { ref: "8", finalDate: "02/08/2024", employee: "", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/08/2024', equipmentType: 'Notebook' },
    { ref: "9", finalDate: "02/09/2024", employee: "", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/09/2024', equipmentType: 'Notebook' },
    { ref: "10", finalDate: "02/10/2024", employee: "", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/12/2024', equipmentType: 'Notebook' },
    { ref: "11", finalDate: "02/11/2024", employee: "", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/11/2024', equipmentType: 'Notebook' },
    { ref: "12", finalDate: "02/12/2024", employee: "", description: "Troca de óleo", status: "Finalizado", selected: false, initialDate: '02/12/2024', equipmentType: 'Notebook' }
  ];

  months = {
    '01': 'Janeiro',
    '02': 'Fevereiro',
    '03': 'Março',
    '04': 'Abril',
    '05': 'Maio',
    '06': 'Junho',
    '07': 'Julho',
    '08': 'Agosto',
    '09': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro'
  };

  formatMonth = (month: string): string => {
    return this.months[month as keyof typeof this.months];
  };

  constructor() {
    Chart.register(...registerables);
  };
  
  ngAfterViewInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    const completedServicesByMonth: Record<string, number> = {};

    this.services.forEach(service => {
      if (service.status === 'Finalizado') {
      const month = service.finalDate.split('/')[1];
      completedServicesByMonth[month] = (completedServicesByMonth[month] || 0) + 1;
      }
    });

    const registeredServicesByMonth: Record<string, number> = {};

    this.services.forEach(service => {
      const month = service.initialDate.split('/')[1];
      registeredServicesByMonth[month] = (registeredServicesByMonth[month] || 0) + 1;
    });

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const labels = Array.from({ length: currentMonth }, (_, index) => {
      const month = (index + 1).toString().padStart(2, '0');
      return this.formatMonth(month);
    });
    const data1 = Object.values(completedServicesByMonth);
    const data2 = Object.values(registeredServicesByMonth);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: ' Número de Serviços Finalizados',
            data: data1,
            backgroundColor: 'rgba(15, 138, 101, 0.5)',
            borderColor: 'rgba(15, 138, 101, 1)',
            borderWidth: 1
          },
          {
            label: ' Número de Serviços Cadastrados',
            data: data2,
            backgroundColor: 'rgba(42, 93, 174, 0.5)',
            borderColor: 'rgba(42, 93, 174, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}