import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./preguntas/components/home/home.component";
import {CapitalesComponent} from "./preguntas/components/capitales/capitales.component";
import {BanderasComponent} from "./preguntas/components/banderas/banderas.component";

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "preguntas/home", component: HomeComponent},
  {path: "preguntas/capitales", component: CapitalesComponent},
  {path: "preguntas/banderas", component: BanderasComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
