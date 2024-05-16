import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Consulta } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  consultasCollection!: AngularFirestoreCollection <any>
  consulta!: Observable<Consulta>

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) { 
    this.consultasCollection = this.firestore.collection<Consulta>('Consultas')
  }

  async guardarConsulta(datosConsulta: any, cedula:any){
    const consultaData = {
      cedula : cedula,
      consulta:  datosConsulta,
      fecha: new Date()
 
    };
    const consultaRef = await this.consultasCollection.add(consultaData);
    
    console.log('ID de la consulta creada:', consultaRef.id);
  }
}
