import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { LogoComponent } from "../logo/logo.component";
import { RouterLink } from '@angular/router';
import { ILink } from "../../interfaces/navbar.interface"

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LogoComponent,
    NavComponent,
    NgOptimizedImage,
    CommonModule,
    RouterLink, 
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  user = signal(true);

  toggleUser = () => {
    this.user.update(current => current ? false : true);
  }

  @Input() currentPage: string = "/";
  @Input() navbar: ILink[] = [{
    text: "Visão Geral",
    url: "/"
  }, {
    text: "Meus Seviços",
    url: "/my-services",
    notification: true
  }, {
    text: "Ordens de Serviço",
    url: "",
    children: [{
      text: "Painel de Seviços",
      url: "/services"
    }, {
      text: "Histórico de Seviços",
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
      url: "/employess"
    }, {
      text: "Cadastrar novo Funcionário",
      url: "/employess/add"
    }]
  }];
  @Input() myServicesValue: number = 1;
  @Input() notification: boolean = false;

  @Output("click") onClick: EventEmitter<any> = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
