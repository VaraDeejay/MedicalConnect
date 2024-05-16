import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}


  abrirPacientesMenu(){
    this.router.navigateByUrl('/pacientesmenu')
  }

  abrirConsultasMenu(){
    this.router.navigateByUrl('/consultasmenu')
  }
}
