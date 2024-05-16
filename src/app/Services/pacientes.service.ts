import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Paciente, InfoPaciente } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private pacientesCollection!: AngularFirestoreCollection<Paciente>
  pacientes: Observable<Paciente[]>

  private paciente: Paciente | null = null;

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {

    this.pacientesCollection = this.firestore.collection<Paciente>('Pacientes');
    this.pacientes = this.pacientesCollection.valueChanges();
   }

   async guardarPaciente(paciente: Paciente){
    await this.pacientesCollection.add(paciente)
   }

  getPacientes(): Observable<any>{

    return this.pacientes;


   }

   setPaciente(paciente: Paciente) {
    this.paciente = paciente;
    console.log(paciente)
  }

  getPaciente(): Paciente | null {
    console.log('recuperado:',this.paciente)
    return this.paciente;

  }
}
