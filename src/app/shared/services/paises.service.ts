import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pais} from "../models/pais.model";
import {PreguntaBandera} from "../models/pregunta-bandera.model";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _paises!: Pais[];
  constructor(private httpClient: HttpClient) {
  }
  obtenerTodosLosPaises():Observable<Pais[]>{
    return this.httpClient.get<Pais[]>("https://restcountries.com/v3.1/all")
  }

  obtenerPreguntaBandera():PreguntaBandera{
    let pais: Pais;
    const grupoPaises:Pais[] = [];

    // Crea un grupo de 4 paises al azar
    while (grupoPaises.length < 4){
      pais = this.paisAlAzar();
      if (!grupoPaises.includes(pais)){
        grupoPaises.push(pais);
      }
    }

    // Obtenemos un pais al azar de los 4, que será el pais a adivinar
    pais = grupoPaises[Math.floor(Math.random() * grupoPaises.length)]

    // Formamos y devolvemos la pregunta
    return {
      bandera: pais.flags.svg,
      respuesta: pais.name.common,
      desordenadas: this.obtenerNombrePaises(grupoPaises)
    };
  }

  private obtenerNombrePaises(grupoPaises: Pais[]): string[]{
    let nombrePaises: string[] = [];
    for (let i = 0; i < grupoPaises.length; i++) {
      nombrePaises[i] = grupoPaises[i].name.common;
    }
    return nombrePaises;
  }

  public paisAlAzar():Pais {
    return this.paises[Math.floor(Math.random() * this.paises.length)];
  }
  get paises(): Pais[] {
    return this._paises;
  }

  set paises(value: Pais[]) {
    this._paises = value;
  }
}
