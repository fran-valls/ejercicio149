import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from "primeng/api";
import {PrimengModule} from "./primeng/primeng.module";
import {PreguntasModule} from "./preguntas/preguntas.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimengModule,
    PreguntasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
