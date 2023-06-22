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
  finTiempo: boolean;
  intervalId: any;

  constructor(public paisesService: PaisesService, public httpClient: HttpClient){
    this.visible = true;
    this.puntos = 0;
    this.tiempo = 0;
    this.cargandoPaises = false;
    this.finTiempo = false
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
    );

  }

  // Obtiene una pregunta
  preguntaNueva() {
    this.pregunta = this.paisesService.obtenerPreguntaBandera();
  }

  empezar() {
    this.visible = false;
    this.preguntaNueva();
    this.contador();
  }

  comprobarAcierto(nombre: string) {
    if (nombre === this.pregunta.respuesta) {
      this.puntos += 100;
      this.tiempo +=5;
    } else {
      this.puntos -= 10;
    }
    this.preguntaNueva();
  }
  contador() {
    this.tiempo = 10; // Establece el valor inicial del contador

    this.intervalId = setInterval(() => {
      if (this.tiempo > 0) {
        this.tiempo--;
      }
      else {
        this.finTiempo = true;
        clearInterval(this.intervalId);
      }
    }, 1000); // Reduce el contador en 1 cada segundo (1000 ms)
  }

  reiniciar() {
    this.finTiempo = false;
    this.puntos = 0;
    this.empezar();
  }


  getEstiloImagen(imagen: any) {
    const width = 35; // Ancho deseado en píxeles
    const height = 15; // Alto deseado en píxeles

    let aspectRatio: number;
    let style: any = {};

    // Obtener la relación de aspecto de la imagen
    const img = new Image();
    img.src = imagen.url;
    aspectRatio = img.width / img.height;

    // Calcular estilos basados en la relación de aspecto
    if (aspectRatio > width / height) {
      style.width = width + 'rem';
      style.height = 'auto';
    } else {
      style.width = 'auto';
      style.height = height + 'rem';
    }

    return style;
  }



}
