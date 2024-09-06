import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './card-dashboard.component.html',
  styleUrl: './card-dashboard.component.scss'
})
export class CardDashboardComponent {
  @Input() link: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() size: string = '';
}
