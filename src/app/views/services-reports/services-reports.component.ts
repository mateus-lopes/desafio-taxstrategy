import { Component } from '@angular/core';
import { WorkService } from '../../services/work.service';
import { ServiceTableComponent } from '../../components/service-table/service-table.component';
import { LayoutComponent } from '../../components/layout/layout.component';

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
  constructor(public workService: WorkService) {}
}
