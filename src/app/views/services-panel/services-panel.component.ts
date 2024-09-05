import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ServiceTableComponent } from '../../components/service-table/service-table.component';

@Component({
  selector: 'app-services-panel',
  standalone: true,
  imports: [
    LayoutComponent,
    ServiceTableComponent,
  ],
  templateUrl: './services-panel.component.html',
  styleUrl: './services-panel.component.scss'
})
export class ServicesPanelComponent {

}
