import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: 'preguntas/home'
      },
      {
        label: 'Banderas',
        icon: 'pi pi-flag-fill',
        routerLink: 'preguntas/banderas'
      },
      {
        label: 'Capitales',
        icon: 'pi pi-globe',
        routerLink: 'preguntas/capitales'
      },
      {
        label: 'Configuracion',
        icon: 'pi pi-fw pi-cog',
        disabled: true
      },
    ];
  }

}
