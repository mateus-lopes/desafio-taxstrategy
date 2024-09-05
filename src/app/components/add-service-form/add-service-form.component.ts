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

  constructor() { 
    this.addForm = new FormGroup({
      equipmentType: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      initialDate: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$')]),
      finalDate: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$')]),
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
