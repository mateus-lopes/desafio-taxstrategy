import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { AddServiceFormComponent } from "../../components/add-service-form/add-service-form.component";

@Component({
  selector: 'app-services-add',
  standalone: true,
  imports: [
    LayoutComponent,
    AddServiceFormComponent
],
  templateUrl: './services-add.component.html',
  styleUrl: './services-add.component.scss'
})
export class ServicesAddComponent {

}
