import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-consultasmenu',
  templateUrl: './consultasmenu.page.html',
  styleUrls: ['./consultasmenu.page.scss'],
})
export class ConsultasmenuPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  volverHome(){
    this.router.navigateByUrl('/home')
  }

  iniciarConsulta(){
    this.router.navigateByUrl('/infopacientes')
  }

  
  
}
