import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';

@Component({
  selector: 'app-services-panel',
  standalone: true,
  imports: [
    LayoutComponent
  ],
  templateUrl: './services-panel.component.html',
  styleUrl: './services-panel.component.scss'
})
export class ServicesPanelComponent {

}
