import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { PacientesService } from 'src/app/Services/pacientes.service';
import { Paciente } from 'src/app/models/models';

@Component({
  selector: 'app-infopacientes',
  templateUrl: './infopacientes.page.html',
  styleUrls: ['./infopacientes.page.scss'],
})
export class InfopacientesPage implements OnInit {

  constructor(public router: Router, private pacientesService: PacientesService) { }

  ngOnInit() {
  this.pacientes = this.pacientesService.getPaciente()
    
  }

  pacientes: Paciente | null = null;

  @ViewChild('modalAntecedentesMedicos')
modalAntecedentesMedicos!: IonModal;

@ViewChild('modalAntecedentesQuirurgicos')
modalAntecedentesQuirurgicos!: IonModal;

    volverHome(){
      this.router.navigateByUrl('/home')
    }

    iniciarConsulta(){
      this.router.navigateByUrl('/consulta')
    }

    openAntecedentesMedicos(){
      this.modalAntecedentesMedicos.present()
    }

    closeAntecedentesMedicos(){
      this.modalAntecedentesMedicos.dismiss()
    }

    openAntecedentesQuirurgicos(){
      this.modalAntecedentesQuirurgicos.present()
    }

    closeAntecedentesQuirurgicos(){
      this.modalAntecedentesQuirurgicos.dismiss()
    }

    abrirRecipe(){
      this.router.navigateByUrl('/recipes')
    }
    
}

