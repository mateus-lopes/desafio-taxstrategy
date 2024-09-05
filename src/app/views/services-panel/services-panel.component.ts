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
        finalDate: "2021-10-10",
        employee: "João",
        description: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a",
        status: "Em Andamento",
        selected: false,
        initialDate: '',
        equipmentType: 'Notebook'
      },
      {
        ref: "2",
        finalDate: "2021-10-10",
        employee: "João",
        description: "Troca de óleo",
        status: "Em Andamento",
        selected: false,
        initialDate: '',
        equipmentType: 'Notebook'
      },
      {
        ref: "3",
        finalDate: "2021-10-10",
        employee: "Jeferson",
        description: "Troca de óleo",
        status: "Em Andamento",
        selected: false,
        initialDate: '',
        equipmentType: 'Notebook'
      },
      {
        ref: "4",
        finalDate: "2021-10-10",
        employee: "Carlos",
        description: "Troca de óleo",
        status: "Em Andamento",
        selected: false,
        initialDate: '',
        equipmentType: 'Notebook'
      },
      {
        ref: "5",
        finalDate: "2021-10-10",
        employee: "",
        description: "Troca de óleo",
        status: "Aguardando Funcionário",
        selected: false,
        initialDate: '',
        equipmentType: 'Notebook'
      },
      {
        ref: "6",
        finalDate: "2021-10-10",
        employee: "",
        description: "Troca de óleo",
        status: "Aguardando Funcionário",
        selected: false,
        initialDate: '',
        equipmentType: 'Notebook'
      },
    ]
}
