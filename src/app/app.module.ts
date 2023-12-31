import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {PrimengModule} from "./primeng/primeng.module";
import {PreguntasModule} from "./preguntas/preguntas.module";
import {SharedModule} from "./shared/shared.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    PreguntasModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
