import { Component, Input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnComponent } from '../btn/btn.component';
import { IService } from '../../interfaces/work.interface';

@Component({
  selector: 'app-report-service-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BtnComponent
  ],
  templateUrl: './report-service-form.component.html',
  styleUrl: './report-service-form.component.scss'
})
export class ReportServiceFormComponent {
  @Input() id: string | undefined;
  addForm!: FormGroup;
  loading = signal(false);

  calculateRows(description: string): number {
    return description.split('\n').reduce((acc, line) => acc + Math.ceil(line.length / 100), 0);
  }

  service: IService = {
    id: "1",
    finalDate: "02/04/2024",
    employee: "Mateus Albano",
    description: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a",
    status: "Finalizado",
    selected: false,
    initialDate: '02/08/2024',
    equipmentType: 'Notebook',
    description_work: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando:\n \n- Teste 1 \n- Teste 2 \n- Teste 3"
  };
  
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
      equipmentType: new FormControl(this.service.equipmentType, [Validators.required]),
      description: new FormControl(this.service.description, [Validators.required]),
      initialDate: new FormControl(this.service.initialDate, [Validators.required]),
      finalDate: new FormControl(this.service.finalDate, [Validators.required]),
      employee: new FormControl(this.service.employee, []),
      description_work: new FormControl(this.service.description_work, [Validators.required]),
    });
  }

  submit() {
    this.loading.set(true);
    if(this.addForm.valid){
      this.loading.set(false);
    }
  }
}

