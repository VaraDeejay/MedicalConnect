import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasmenuPage } from './consultasmenu.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasmenuPageRoutingModule {}
