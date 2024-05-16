import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, AlertController } from '@ionic/angular';
import { PacientesService } from 'src/app/Services/pacientes.service';
import { Paciente } from 'src/app/models/models';


@Component({
  selector: 'app-pacientesmenu',
  templateUrl: './pacientesmenu.page.html',
  styleUrls: ['./pacientesmenu.page.scss'],
})
export class PacientesmenuPage implements OnInit{

  constructor(public router: Router, public alertCtrl: AlertController, private pacientesService: PacientesService) { }

  async ngOnInit() {
    
      
        await this.loadPacientes();
      
      
  }

  loadPacientes() {
    this.pacientesService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
      console.log(pacientes)
     
    });
  }
  pacienteSeleccionado: any;

  pacientes : Paciente[] = [];

  paciente: Paciente = {
    nombres: '',
    apellidos: '',
    cedula: 0,
    telefono: '',
    sexo: '',
    fechadenacimiento: new Date,
    edad: 0,
    domicilio: '',
    personaemergencia: '',
    numeroemergencia: 0,
    email: '',
    pacienteId: ''
  }


volverHome(){
  this.router.navigateByUrl('/home')
}

@ViewChild('modalAgregarPaciente')
modalAgregarPaciente!: IonModal;

openModalAgregarPaciente(){
  this.modalAgregarPaciente.present();
}

closeModalAgregarPaciente(){
  this.modalAgregarPaciente.dismiss()
}

async alertaCreacion(message: string) {
  const alert = await this.alertCtrl.create({
    header: '¡Paciente Agregado Exitosamente!',
    message: `Continuar`,
    buttons: [
      {
        text: 'Terminar',
        handler: async () => {
          try {
            // Intenta copiar el texto al portapapeles
            await navigator.clipboard.writeText('Paciente ID');
            console.log('Texto copiado al portapapeles:');
            this.router.navigateByUrl('/home')
            this.closeModalAgregarPaciente()
            
            
          } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
         
           
          }
        }
      },
      {
        text: 'Mas info',
        handler: async () => {
          try {
            // Intenta copiar el texto al portapapeles
            await navigator.clipboard.writeText('Paciente ID');
            console.log('Texto copiado al portapapeles:');
            this.router.navigateByUrl('/infopacientes')
            this.closeModalAgregarPaciente()
            
            
          } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
         
           
          }
        }
      }
    ]
  });


  await alert.present();}


  guardarPaciente(paciente: Paciente){

    this.pacientesService.guardarPaciente(paciente)
    this.alertaCreacion('Paciente guardado')

  }

  async getPacientes(){
    await this.pacientesService.getPacientes()
  }

seleccionarPaciente(paciente: any){
  console.log(paciente)
  this.pacienteSeleccionado = paciente;
  this.pacientesService.setPaciente(this.pacienteSeleccionado);
  this.router.navigateByUrl('/infopacientes')
}

}

