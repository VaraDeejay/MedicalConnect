import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesmenuPageRoutingModule } from './pacientesmenu-routing.module';

import { PacientesmenuPage } from './pacientesmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientesmenuPageRoutingModule
  ],
  declarations: [PacientesmenuPage]
})
export class PacientesmenuPageModule {}
