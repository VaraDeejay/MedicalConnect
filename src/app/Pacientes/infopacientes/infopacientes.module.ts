import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopacientesPageRoutingModule } from './infopacientes-routing.module';

import { InfopacientesPage } from './infopacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopacientesPageRoutingModule
  ],
  declarations: [InfopacientesPage]
})
export class InfopacientesPageModule {}
