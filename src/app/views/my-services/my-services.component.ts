import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { WorkService } from '../../services/work.service';

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
  constructor(public workService: WorkService) {}
}
