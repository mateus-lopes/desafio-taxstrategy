import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ServiceTableComponent } from '../../components/service-table/service-table.component';
import { IService } from '../../interfaces/navbar.interface';

@Component({
  selector: 'app-services-panel',
  standalone: true,
  imports: [
    LayoutComponent,
    ServiceTableComponent,
  ],
  templateUrl: './services-panel.component.html',
  styleUrl: './services-panel.component.scss'
})
export class ServicesPanelComponent {
  services: IService[] = [
      {
        ref: "1",
        forecastDate: "2021-10-10",
        employee: "João",
        email:'abc@gmail.com',
        description: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a",
        status: "Em Andamento",
        selected: false,
      },
      {
        ref: "2",
        forecastDate: "2021-10-10",
        employee: "João",
        email:'abc@gmail.com',
        description: "Troca de óleo",
        status: "Em Andamento",
        selected: false,
      },
      {
        ref: "3",
        forecastDate: "2021-10-10",
        employee: "Jeferson",
        email:'abc@gmail.com',
        description: "Troca de óleo",
        status: "Em Andamento",
        selected: false,
      },
      {
        ref: "4",
        forecastDate: "2021-10-10",
        employee: "Carlos",
        email:'abc@gmail.com',
        description: "Troca de óleo",
        status: "Em Andamento",
        selected: false,
      },
      {
        ref: "5",
        forecastDate: "2021-10-10",
        employee: "",
        email:'',
        description: "Troca de óleo",
        status: "Aguardando Funcionário",
        selected: false,
      },
      {
        ref: "6",
        forecastDate: "2021-10-10",
        employee: "",
        email:'',
        description: "Troca de óleo",
        status: "Aguardando Funcionário",
        selected: false,
      },
    ]
}
