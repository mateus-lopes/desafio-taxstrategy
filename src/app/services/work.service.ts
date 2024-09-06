import { Injectable } from '@angular/core';
import { IService } from '../interfaces/navbar.interface';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  public allWorks: IService[] = [
    {
      ref: "8",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "12",
      finalDate: "2021-10-10",
      employee: "",
      description: "Quando o usuário pressionar a tecla CTRL e clicar nas linhas que ele deseja alterar, então o sistema deve dar destaque às linhas selecionadas utilizando uma cor diferente  das linhas não selecionadas Quando o usuário clicar com o botão direito do mouse sobre as linhas selecionadas, então o sistema deve apresentar um dropdown com as seguintes opções Alterar o funcionário responsável pelo a",
      status: "Aguardando Funcionário",
      selected: false,
      initialDate: '',
      equipmentType: 'Notebook'
    },
    {
      ref: "9",
      finalDate: "2021-10-10",
      employee: "Jeferson",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Monitor'
    },
    {
      ref: "7",
      finalDate: "2021-10-10",
      employee: "Mateus Albano",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Notebook'
    },
    {
      ref: "10",
      finalDate: "2021-10-10",
      employee: "Mateus Albano",
      description: "Troca de óleo",
      status: "Em Andamento",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "11",
      finalDate: "2021-10-10",
      employee: "",
      description: "Troca de óleo",
      status: "Aguardando Funcionário",
      selected: false,
      initialDate: '',
      equipmentType: 'TV'
    },
    {
      ref: "1",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "2",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "3",
      finalDate: "2021-10-10",
      employee: "Jeferson",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "4",
      finalDate: "2021-10-10",
      employee: "Mateus",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "5",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
    {
      ref: "6",
      finalDate: "2021-10-10",
      employee: "João",
      description: "Troca de óleo",
      status: "Finalizado",
      selected: false,
      initialDate: '',
      equipmentType: 'Celular'
    },
  ];
  public works: IService[] = [];
  private _myWorks: IService[] = [];
  public reports: IService[] = [];
  public work: IService = {
    ref: '',
    finalDate: '',
    employee: '',
    description: '',
    status: '',
    selected: false,
    initialDate: '',
    equipmentType: ''
  };
  public employees: string[] = ['Marcos Paulo', 'Jeferson Agudo', 'Mateus Albano'];
  public equipmentTypes: string[] = ['Celular', 'TV', 'Notebook', 'Monitor', 'Computador desktop'];

  constructor(public userService: UserService) {
    this.getWorks();
    this.getReports();
    this.getMyWorks();
  }

  get myWorks(): IService[] {
    return this._myWorks;
  }

  set myWorks(value: IService[]) {
    this._myWorks = value;
  }

  getWorks(): Observable<IService[]> {
    this.works = this.allWorks.filter(work => work.status != 'Finalizado');
    return of(this.works);
  }
  
  getMyWorks(): Observable<IService[]> {
    this.myWorks = this.works.filter(work => work.employee == this.userService.nickname);
    return of(this.myWorks);
  }
  
  getReports(): Observable<IService[]> {
    this.reports = this.allWorks.filter(work => work.status == 'Finalizado');
    return of(this.reports);
  }

  setWorks(works: IService[]): void {
    this.works = works;
    this.getMyWorks();
  }
}

