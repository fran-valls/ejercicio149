import {Component, OnInit} from '@angular/core';
import {PreguntaBandera} from "../../../shared/models/pregunta-bandera.model";
import {PaisesService} from "../../../shared/services/paises.service";
import {HttpClient} from "@angular/common/http";
import {Pais} from "../../../shared/models/pais.model";

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.css']
})
export class BanderasComponent implements OnInit{
  visible: boolean;
  puntos: number;
  tiempo: number = 0;
  cargandoPaises: boolean;
  pregunta!: PreguntaBandera;

  constructor(public paisesService: PaisesService, public httpClient: HttpClient){
    this.visible = true;
    this.puntos = 0;
    this.tiempo = 0;
    this.cargandoPaises = false;
  }

  showDialog() {
    this.visible = true;
  }

  hideDialig(): void {
    this.visible = false;
  }

  ngOnInit(): void {
    this.paisesService.obtenerTodosLosPaises().subscribe(
      {
        next: (datos: Pais[]) => {
          this.paisesService.paises = datos;
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }
}
