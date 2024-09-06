import { Component } from '@angular/core';
import { BtnComponent } from "../../components/btn/btn.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    BtnComponent,
    RouterLink,
],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
