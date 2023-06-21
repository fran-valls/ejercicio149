import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {TieredMenuModule} from "primeng/tieredmenu";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    RippleModule,
    TieredMenuModule,
    DialogModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimengModule { }
