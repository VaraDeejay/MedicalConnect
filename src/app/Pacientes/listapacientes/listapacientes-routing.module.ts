import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapacientesPage } from './listapacientes.page';

const routes: Routes = [
  {
    path: '',
    component: ListapacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapacientesPageRoutingModule {}
