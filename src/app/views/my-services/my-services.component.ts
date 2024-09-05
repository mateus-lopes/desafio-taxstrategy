import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [
    LayoutComponent
  ],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent {

}
