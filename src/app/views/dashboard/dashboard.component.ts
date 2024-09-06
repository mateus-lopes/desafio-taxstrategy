import { Component, AfterViewInit, Renderer2   } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { CardDashboardComponent } from '../../components/card-dashboard/card-dashboard.component';
import { BtnComponent } from '../../components/btn/btn.component';
import { Chart, registerables } from 'chart.js';
import { IService } from '../../interfaces/work.interface';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LayoutComponent,
    CardDashboardComponent,
    CommonModule,
    BtnComponent,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, public workService: WorkService, public router: Router) {
    Chart.register(...registerables);
  };

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
  
  ngAfterViewInit() {
    const ctx = this.renderer.selectRootElement('#myChart') as HTMLCanvasElement;
    
    const completedServicesByMonth: Record<string, number> = {};

    this.workService.works.forEach(service => {
      if (service.status === 'Finalizado') {
        const month = service.finalDate.split('/')[1];
        completedServicesByMonth[month] = (completedServicesByMonth[month] || 0) + 1;
      }
    });

    const registeredServicesByMonth: Record<string, number> = {};

    this.workService.works.forEach(service => {
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
            data: data1.map(value => value -1),
            backgroundColor: 'rgba(15, 138, 101, 0.5)',
            borderColor: 'rgba(15, 138, 101, 1)',
            borderWidth: 1
          },
          {
            label: ' Número de Serviços Cadastrados',
            data: data2.map(value => value -1),
            backgroundColor: 'rgba(42, 93, 174, 0.5)',
            borderColor: 'rgba(42, 93, 174, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: Math.max(...data1, ...data2) + 1,
            beginAtZero: false,
          }
        }
      }
    });
  }
}