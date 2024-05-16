import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevopacientePageRoutingModule } from './nuevopaciente-routing.module';

import { NuevopacientePage } from './nuevopaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevopacientePageRoutingModule
  ],
  declarations: [NuevopacientePage]
})
export class NuevopacientePageModule {}
