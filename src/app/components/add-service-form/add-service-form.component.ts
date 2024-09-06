import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { BtnComponent } from "../btn/btn.component";
import { WorkService } from '../../services/work.service';
import { LayoutService } from "../../services/layout.service";

@Component({
  selector: 'app-add-service-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BtnComponent,
    CommonModule,
  ],
  providers: [],
  templateUrl: './add-service-form.component.html',
  styleUrl: './add-service-form.component.scss'
})
export class AddServiceFormComponent {
  constructor(public workService: WorkService, public layoutService: LayoutService, private router: Router) { 
    this.addForm = new FormGroup({
      equipmentType: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      initialDate: new FormControl(this.currentDate, [Validators.required]),
      finalDate: new FormControl('', [Validators.required]),
      employee: new FormControl('', []),
    });
  }
  addForm!: FormGroup;
  currentDate = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

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
    this.addForm.get(id_input)?.setValue(value);
  }

  submit() {
    try {
      if (this.addForm.valid) {
        this.workService.setWorks([...this.workService.works, {
          ...this.addForm.value,
          id: this.workService.allWorks.length + 1,
          status: 'Em Andamento',
        }]);
        this.layoutService.updateNavbarNotification();
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      this.addForm.reset();
      this.router.navigate(['/services']);
    }
  }
}
