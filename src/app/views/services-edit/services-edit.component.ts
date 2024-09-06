import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkService } from '../../services/work.service';
import { LayoutService } from '../../services/layout.service';
import { LayoutComponent } from '../../components/layout/layout.component';
import { BtnComponent } from '../../components/btn/btn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-edit',
  standalone: true,
  imports: [
    LayoutComponent,
    ReactiveFormsModule,
    BtnComponent,
    CommonModule,
  ],
  templateUrl: './services-edit.component.html',
  styleUrl: './services-edit.component.scss'
})
export class ServicesEditComponent implements OnInit {
  id: string | undefined;
  
  constructor(private route: ActivatedRoute, public workService: WorkService, private router: Router, public layoutService: LayoutService) { 
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.workService.getWork(this.id);

    this.editForm = new FormGroup({
      equipmentType: new FormControl(this.workService.work.equipmentType, [Validators.required]),
      description: new FormControl(this.workService.work.description, [Validators.required]),
      initialDate: new FormControl(this.workService.work.initialDate, [Validators.required]),
      finalDate: new FormControl(this.workService.work.finalDate, [Validators.required]),
      employee: new FormControl(this.workService.work.employee, []),
    });
  }
  editForm!: FormGroup;
  loading = signal(false);

  calculateRows(description: string): number {
    return description.split('\n').reduce((acc, line) => acc + Math.ceil(line.length / 100), 0);
  }
  
  applyDateMask(event: Event, id_input: string): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    if (value.length > 5) {
      value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }

    input.value = value;
    this.editForm.get(id_input)?.setValue(value);
  }

  update() {
    try {
      if (this.editForm.valid) {
        this.workService.setWorks(this.workService.works.map(work => {
          if (work.ref === this.id) {
            return {
              ref: work.ref,
              status: this.editForm.value.employee ? 'Em Andamento' : 'Aguardando Funcionário',
              ...this.editForm.value,
            };
          }
          return work;
        }));
        this.layoutService.updateNavbarNotification();
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      this.editForm.reset();
      this.router.navigate(['/services']);
    }
  }

  submit() {
    try {
      if (this.editForm.valid) {
        if (this.id) {
          this.workService.completeWork(this.id);
        }
        this.layoutService.updateNavbarNotification();
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      this.editForm.reset();
      this.router.navigate(['/services']);
    }
  }

  delete() {
    try {
      this.workService.setWorks(this.workService.works.filter(work => work.ref !== this.id));
      this.layoutService.updateNavbarNotification();
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      this.router.navigate(['/services']);
    }
  }

  ngOnInit() { }
}
