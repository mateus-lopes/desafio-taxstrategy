import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { IService } from '../../interfaces/navbar.interface';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [
    LayoutComponent,
    CardComponent,
    CommonModule
  ],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent {
  services: IService[] = [
    {
      ref: "1",
      finalDate: "2021-10-10",
      employee: "Mateus Lopes Albano",
      description: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Notebook'
    },
    {
      ref: "2",
      finalDate: "2021-10-10",
      employee: "Mateus Lopes Albano",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Notebook'
    },
    {
      ref: "3",
      finalDate: "2021-10-10",
      employee: "Mateus Lopes Albano",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Computador desktop'
    },
    {
      ref: "4",
      finalDate: "2021-10-10",
      employee: "Mateus Lopes Albano",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Monitor'
    }
  ]
}
