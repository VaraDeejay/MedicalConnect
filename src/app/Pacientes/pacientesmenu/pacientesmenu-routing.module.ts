import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesmenuPage } from './pacientesmenu.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesmenuPageRoutingModule {}
