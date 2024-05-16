import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { PacientesService } from 'src/app/Services/pacientes.service';
import { Consulta, Paciente } from 'src/app/models/models';
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  cedulaPaciente: any;

  constructor(public router: Router, private pacientesService: PacientesService, private consultasService: ConsultasService) { }

 
  ngOnInit() {
    this.paciente = this.pacientesService.getPaciente()
      
    }
  
  paciente: Paciente | null = null;

  datosConsulta: Consulta = {
    cedula: 0,
    motivoConsulta: '',
    enfermedadActual: '',
    descripcion: '',
    TA: 0,
    FC: 0,
    FR: 0,
    SATO2: 0,
    peso: 0,
    talla: 0,
    IMC: 0,
    plan: '',
    indicaciones: '',
    ordenesParaclinicos: '',
    fecha: new Date()
  }
    

  @ViewChild('modalFinalConsulta')
modalFinalConsulta!: IonModal;
  
  volverConsultasMenu(){
    this.router.navigateByUrl('/infopacientes')
    this.modalFinalConsulta.dismiss()
  }

  openFinalConsulta(){
    this.modalFinalConsulta.present()
  }
   
  volverConsulta(){
    this.router.navigateByUrl('/consulta')
    this.modalFinalConsulta.dismiss()
  }

  async guardarConsulta(datosConsulta: any ){
    if(this.paciente)
      this.cedulaPaciente = this.paciente.cedula;
      const consultaRef = await this.consultasService.guardarConsulta(datosConsulta, this.cedulaPaciente)
      console.log('consulta guardada:', consultaRef)

  } 

}
