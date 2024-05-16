import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevopacientePage } from './nuevopaciente.page';

const routes: Routes = [
  {
    path: '',
    component: NuevopacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevopacientePageRoutingModule {}
