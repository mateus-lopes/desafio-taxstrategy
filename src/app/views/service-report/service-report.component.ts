import { Component } from '@angular/core';
import { ReportServiceFormComponent } from '../../components/report-service-form/report-service-form.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-report',
  standalone: true,
  imports: [
    LayoutComponent,
    ReportServiceFormComponent,
  ],
  templateUrl: './service-report.component.html',
  styleUrl: './service-report.component.scss'
})
export class ServiceReportComponent {
  id: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
}
