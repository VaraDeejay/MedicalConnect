import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasmenuPageRoutingModule } from './consultasmenu-routing.module';

import { ConsultasmenuPage } from './consultasmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasmenuPageRoutingModule
  ],
  declarations: [ConsultasmenuPage]
})
export class ConsultasmenuPageModule {}
