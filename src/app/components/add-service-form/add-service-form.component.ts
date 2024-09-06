import { Component, signal } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-add-service-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BtnComponent,
  ],
  providers: [],
  templateUrl: './add-service-form.component.html',
  styleUrl: './add-service-form.component.scss'
})
export class AddServiceFormComponent {
  addForm!: FormGroup;
  loading = signal(false);

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

  currentDate = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

  constructor() { 
    this.addForm = new FormGroup({
      equipmentType: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      initialDate: new FormControl(this.currentDate, [Validators.required]),
      finalDate: new FormControl('', [Validators.required]),
      employee: new FormControl('', []),
    });
  }

  submit() {
    this.loading.set(true);
    if(this.addForm.valid){
      console.log(this.addForm.value);
      this.loading.set(false);
    }
  }
}
