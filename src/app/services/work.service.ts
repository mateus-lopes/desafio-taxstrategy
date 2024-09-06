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
      finalDate: "2023-08-14",
      employee: "Carlos Silva",
      description: "Substituição da bateria de celular.",
      status: "Em Andamento",
      selected: false,
      initialDate: "2023-08-10",
      equipmentType: "Celular"
    },
    {
      ref: "12",
      finalDate: "2023-08-20",
      employee: "",
      description: "Troca do display quebrado de notebook. Aguardando definição do funcionário responsável.",
      status: "Aguardando Funcionário",
      selected: false,
      initialDate: "2023-08-19",
      equipmentType: "Notebook"
    },
    {
      ref: "9",
      finalDate: "2023-08-16",
      employee: "Jeferson Santos",
      description: "Troca do cabo de alimentação de monitor.",
      status: "Em Andamento",
      selected: false,
      initialDate: "2023-08-12",
      equipmentType: "Monitor"
    },
    {
      ref: "7",
      finalDate: "2023-08-18",
      employee: "Mateus Albano",
      description: "Atualização de sistema operacional e formatação de notebook.",
      status: "Em Andamento",
      selected: false,
      initialDate: "2023-08-13",
      equipmentType: "Notebook"
    },
    {
      ref: "10",
      finalDate: "2023-08-14",
      employee: "Mateus Albano",
      description: "Substituição do conector de carga de celular.",
      status: "Em Andamento",
      selected: false,
      initialDate: "2023-08-11",
      equipmentType: "Celular"
    },
    {
      ref: "11",
      finalDate: "2023-08-17",
      employee: "",
      description: "Troca do painel frontal da TV de 55 polegadas.",
      status: "Aguardando Funcionário",
      selected: false,
      initialDate: "2023-08-15",
      equipmentType: "TV"
    },
    {
      ref: "1",
      finalDate: "2023-08-05",
      employee: "João Pereira",
      description: "Substituição da tela trincada de celular.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023-08-02",
      equipmentType: "Celular"
    },
    {
      ref: "2",
      finalDate: "2023-08-07",
      employee: "João Pereira",
      description: "Troca do microfone de celular com defeito.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023-08-03",
      equipmentType: "Celular"
    },
    {
      ref: "3",
      finalDate: "2023-08-09",
      employee: "Jeferson Santos",
      description: "Reparo no circuito interno de smartphone com problema de aquecimento.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023-08-05",
      equipmentType: "Celular"
    },
    {
      ref: "4",
      finalDate: "2023-08-12",
      employee: "Mateus Albano",
      description: "Troca do touchpad de notebook que não responde.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023-08-08",
      equipmentType: "Notebook"
    },
    {
      ref: "5",
      finalDate: "2023-08-03",
      employee: "João Pereira",
      description: "Troca do sensor de proximidade de celular.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023-07-31",
      equipmentType: "Celular"
    },
    {
      ref: "6",
      finalDate: "2023-08-06",
      employee: "João Pereira",
      description: "Reparo do botão de volume de celular.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023-08-01",
      equipmentType: "Celular"
    }
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
  public employees: string[] = ['Carlos Silva', 'Jeferson Santos', 'Mateus Albano', 'João Pereira'];
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

  getWork(ref: string): IService {
    this.work = this.works.find(work => work.ref == ref) || this.work;
    return this.work;
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

  completeWork(ref: string): void {
    const completedWork = this.works.find(work => work.ref === ref);
    if (completedWork) {
      completedWork.status = 'Finalizado';
      this.reports.push(completedWork);
      this.works = this.works.filter(work => work.ref !== ref);
      this.getMyWorks();
    }
  }
}

