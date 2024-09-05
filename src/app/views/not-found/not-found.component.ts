import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    LayoutComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
