import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ActivatedRoute } from '@angular/router';
import { EditServiceFormComponent } from '../../components/edit-service-form/edit-service-form.component';

@Component({
  selector: 'app-services-edit',
  standalone: true,
  imports: [
    LayoutComponent,
    EditServiceFormComponent
  ],
  templateUrl: './services-edit.component.html',
  styleUrl: './services-edit.component.scss'
})
export class ServicesEditComponent implements OnInit {
  id: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;

    console.log(this.id);
  }
}
