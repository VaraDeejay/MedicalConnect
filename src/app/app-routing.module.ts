import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listapacientes',
    loadChildren: () => import('./Pacientes/listapacientes/listapacientes.module').then( m => m.ListapacientesPageModule)
  },
  {
    path: 'nuevopaciente',
    loadChildren: () => import('./Pacientes/nuevopaciente/nuevopaciente.module').then( m => m.NuevopacientePageModule)
  },
  {
    path: 'pacientesmenu',
    loadChildren: () => import('./Pacientes/pacientesmenu/pacientesmenu.module').then( m => m.PacientesmenuPageModule)
  },
  {
    path: 'pruebas',
    loadChildren: () => import('./pruebas/pruebas.module').then( m => m.PruebasPageModule)
  },
  {
    path: 'consultasmenu',
    loadChildren: () => import('./Consultas/consultasmenu/consultasmenu.module').then( m => m.ConsultasmenuPageModule)
  },
  {
    path: 'infopacientes',
    loadChildren: () => import('./Pacientes/infopacientes/infopacientes.module').then( m => m.InfopacientesPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./Consultas/consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
