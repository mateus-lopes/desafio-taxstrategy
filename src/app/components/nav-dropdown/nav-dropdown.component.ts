import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ILink } from '../../interfaces/navbar.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-dropdown',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './nav-dropdown.component.html',
  styleUrl: './nav-dropdown.component.scss'
})
export class NavDropdownComponent {
  @Input() currentPage: string = "/";
  show = signal(true);
  showClass = signal('fadeIn');

  toggleDrop = () => {
    this.show.update(current => current ? false : true);
    this.showClass.update(current => current === 'fadeOut' ? 'fadeIn' : 'fadeOut');
  }
  
  @Input() data: ILink = {
    text: "Teste",
    url: "/"
  };

}
