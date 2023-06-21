import { Injectable } from '@angular/core';
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


  get paises(): Pais[] {
    return this._paises;
  }

  set paises(value: Pais[]) {
    this._paises = value;
  }
}
