import { Injectable } from '@angular/core';
import { IService } from '../interfaces/work.interface';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  public allWorks: IService[] = [
    {
      id: "8",
      finalDate: "14/08/2023",
      employee: "Carlos Silva",
      description: "Substituição da bateria de celular.",
      status: "Em Andamento",
      selected: false,
      initialDate: "10/08/2023",
      equipmentType: "Celular"
    },
    {
      id: "12",
      finalDate: "20/08/2023",
      employee: "",
      description: "Troca do display quebrado de notebook. Aguardando definição do funcionário responsável.",
      status: "Aguardando Funcionário",
      selected: false,
      initialDate: "19/08/2023",
      equipmentType: "Notebook"
    },
    {
      id: "9",
      finalDate: "16/08/2023",
      employee: "Jeferson Santos",
      description: "Troca do cabo de alimentação de monitor.",
      status: "Em Andamento",
      selected: false,
      initialDate: "12/08/2023",
      equipmentType: "Monitor"
    },
    {
      id: "7",
      finalDate: "18/08/2023",
      employee: "Mateus Albano",
      description: "Atualização de sistema operacional e formatação de notebook.",
      status: "Em Andamento",
      selected: false,
      initialDate: "13/08/2023",
      equipmentType: "Notebook"
    },
    {
      id: "10",
      finalDate: "14/08/2023",
      employee: "Mateus Albano",
      description: "Substituição do conector de carga de celular.",
      status: "Em Andamento",
      selected: false,
      initialDate: "11/08/2023",
      equipmentType: "Celular"
    },
    {
      id: "11",
      finalDate: "17/08/2023",
      employee: "",
      description: "Troca do painel frontal da TV de 55 polegadas.",
      status: "Aguardando Funcionário",
      selected: false,
      initialDate: "15/08/2023",
      equipmentType: "TV"
    },
    {
      id: "1",
      finalDate: "05/08/2023",
      employee: "João Pereira",
      description: "Substituição da tela trincada de celular.",
      status: "Finalizado",
      selected: false,
      initialDate: "02/08/2023",
      equipmentType: "Celular"
    },
    {
      id: "2",
      finalDate: "07/08/2023",
      employee: "João Pereira",
      description: "Troca do microfone de celular com defeito.",
      status: "Finalizado",
      selected: false,
      initialDate: "03/08/2023",
      equipmentType: "Celular"
    },
    {
      id: "3",
      finalDate: "09/08/2023",
      employee: "Jeferson Santos",
      description: "Reparo no circuito interno de smartphone com problema de aquecimento.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023/08/05",
      equipmentType: "Celular"
    },
    {
      id: "4",
      finalDate: "2023/08/12",
      employee: "Mateus Albano",
      description: "Troca do touchpad de notebook que não responde.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023/08/08",
      equipmentType: "Notebook"
    },
    {
      id: "5",
      finalDate: "2023/08/03",
      employee: "João Pereira",
      description: "Troca do sensor de proximidade de celular.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023/07/31",
      equipmentType: "Celular"
    },
    {
      id: "6",
      finalDate: "2023/08/06",
      employee: "João Pereira",
      description: "Reparo do botão de volume de celular.",
      status: "Finalizado",
      selected: false,
      initialDate: "2023/08/01",
      equipmentType: "Celular"
    }
  ];
  public works: IService[] = [];
  private _myWorks: IService[] = [];
  public reports: IService[] = [];
  public work: IService = {
    id: '',
    finalDate: '',
    employee: '',
    description: '',
    status: '',
    selected: false,
    initialDate: '',
    equipmentType: ''
  };
  public employees: string[] = this.employeeService.allEmployees.map(employee => employee.name);
  public equipmentTypes: string[] = ['Celular', 'TV', 'Notebook', 'Monitor', 'Computador desktop'];

  constructor(public userService: UserService, public employeeService: EmployeeService) {
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

  getWork(id: string): IService {
    this.work = this.works.find(work => work.id == id) || this.work;
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

  completeWork(id: string): void {
    const completedWork = this.works.find(work => work.id === id);
    if (completedWork) {
      completedWork.status = 'Finalizado';
      this.reports.push(completedWork);
      this.works = this.works.filter(work => work.id !== id);
      this.getMyWorks();
    }
  }
}

