import { Injectable, OnInit } from '@angular/core';
import { WorkService } from './work.service';
import { ILink } from '../interfaces/navbar.interface';
import { IService } from '../interfaces/work.interface';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public myWorks: IService[] = [];
  public navbar: ILink[] = [];

  constructor(public workService: WorkService) {
    this.loadNavbar();
    this.workService.getMyWorks().subscribe(works => {
      this.myWorks = works;
      this.updateNavbarNotification();
    });
  }

  private loadNavbar(): void {
    this.workService.getMyWorks().subscribe(works => {
      this.myWorks = works;
      this.navbar = [{
        text: "Visão Geral",
        url: "/dashboard"
      }, {
        text: "Meus Serviços",
        url: "/my-services",
        notification: this.myWorks.length
      }, {
        text: "Ordens de Serviço",
        url: "",
        children: [{
          text: "Painel de Serviços",
          url: "/services"
        }, {
          text: "Histórico de Serviços",
          url: "/services/reports"
        }, {
          text: "Cadastrar novo serviço",
          url: "/services/add"
        }]
      }, {
        text: "Funcionários",
        url: "",
        children: [{
          text: "Tabela de Funcionários",
          url: "/employees"
        }]
      }];
    });
  }

  updateNavbarNotification(): void {
    this.workService.getMyWorks().subscribe(works => {
      this.navbar[1].notification = works.length;
    });
  }
}
