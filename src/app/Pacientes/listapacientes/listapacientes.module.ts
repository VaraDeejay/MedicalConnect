import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapacientesPageRoutingModule } from './listapacientes-routing.module';

import { ListapacientesPage } from './listapacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapacientesPageRoutingModule
  ],
  declarations: [ListapacientesPage]
})
export class ListapacientesPageModule {}
