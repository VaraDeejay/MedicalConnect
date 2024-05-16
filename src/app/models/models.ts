export interface Paciente{
    nombres: string;
    apellidos: string;
    cedula: number;
    telefono: string;
    sexo: string;
    fechadenacimiento: Date;
    edad: number;
    domicilio: string;
    personaemergencia: string;
    numeroemergencia: number;
    email: string;
    pacienteId:string;

}

export interface InfoPaciente{
    antecedentesMedicos: string;
    antecedentesQuirurgicos: string;
    habitosPsicobiologicos: string;
    antecedentesFamiliares:{
        madre: string;
        padre: string;
        abuelos: string;
        hermanos: string;
    }
}

export interface Consulta{
    cedula: number;
    motivoConsulta: string;
    enfermedadActual: string;
    descripcion: string;
    TA: number;
    FC: number;
    FR: number;
    SATO2: number;
    peso: number;
    talla: number;
    IMC: number;
    plan: string;
    indicaciones: string;
    ordenesParaclinicos: string;
    fecha: Date;
}